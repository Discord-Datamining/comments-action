//@ts-check
import * as core from "@actions/core"
import { context, getOctokit } from "@actions/github"
import differ from "@adryd325/discord-datamining-lang-differ"
import { PushEvent } from "@octokit/webhooks-types"

const token = process.env.GITHUB_TOKEN
const filenameRegex = /\d{20,}\.js$/

async function run() {
    try {
        if (!token) return core.setFailed("Invalid GITHUB_TOKEN")

        const octokit = getOctokit(token)
        const { owner, repo } = context.repo

        if (context.eventName !== "push") return

        /** @type {PushEvent} */
        const payload = context.payload
        const commitSha = payload.base_ref

        const commit = await octokit.rest.repos.getCommit({
            owner,
            repo,
            ref: commitSha,
        })
        const { filename, sha: fileSha } = commit.data.files[0]

        if (!filenameRegex.test(filename))
            return

        const lastBlob = await octokit.rest.repos.getContent({
            owner,
            repo,
            path: "datamine-test/current.js",
            ref: payload.before,
        })
        const blob = await octokit.rest.git.getBlob({
            owner,
            repo,
            file_sha: fileSha,
        })

        const diff = differ(
            Buffer.from(lastBlob.content, "base64").toString("utf8"),
            Buffer.from(blob.data.content, "base64").toString("utf8"),
            "codeblock",
        )
        if (!diff.length)
            return core.setOutput("no string changes")

        await octokit.rest.repos.createCommitComment({
            owner,
            repo,
            commit_sha: commitSha,
            body: diff
        })
        return core.setOutput("created commit comment")
    } catch (error) {
        core.setFailed(error.message)
    }
}
run()
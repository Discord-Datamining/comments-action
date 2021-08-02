# comments-action

GitHub Action for posting commit comments in the Discord-Datamining repo.

## Setup
`.github/workflows/comments.yml`

```yml
name: Commit comments
on:
  push:
    branches:
      - master

jobs:
  comments:
    name: Commit comments
    runs-on: ubuntu-latest
    steps:
      - name: Comment on commit
        uses: Discord-Datamining/comments-action@main
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
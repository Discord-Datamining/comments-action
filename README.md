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
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Comment on commit
        uses: Discord-Datamining/comments-action@latest
        env:
          GITHUB_TOKEN: ${{ secrets.GH_TOKEN }}
```
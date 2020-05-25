# GitHub raw url Action

![](https://github.com/actioncloud/github-raw-url/workflows/Test%20converting/badge.svg)


The [Action](https://github.com/marketplace/actions/github-raw-url) convert a normal GitHub file url to its raw url format.

For example, the raw url of `https://github.com/actioncloud/github-raw-url/blob/master/index.js` is:

```
https://raw.githubusercontent.com/actioncloud/github-raw-url/master/index.js
```

This is the first GitHub Action I created, just take it as another [GitHub Actions: Hello World](https://github.com/actions/hello-world-javascript-action). But it's still useful though you can just write one-line script to do the same conversion job in your workflow configuration.

## Inputs

### `github-url`

**Required** A normal GitHub file url.

## Usage

```yaml
# in your workflow config file
jobs:
  my-workflow-job:
    steps:
    - name: A previous step
      id: previous-step
      uses: <an-action>
    - name: Convert a url
      id: convert-to-raw-url
      # or actioncloud/github-raw-url@master
      uses: actioncloud/github-raw-url@v1
      with:
        github-url: ${{ previous-step.outputs.github-url }}
    - name: Another step
      uses: <another-action>
      with:
        github-raw-url: ${{ convert-to-raw-url.outputs.raw-url }}
```

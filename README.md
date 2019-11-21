# GitHub raw url action

The Action convert a normal GitHub url to its raw url format.

For example, the raw url of `https://github.com/actioncloud/github-raw-url/blob/master/index.js` is:

```
https://raw.githubusercontent.com/actioncloud/github-raw-url/master/index.js
```

### Usage

```yaml
# in your action.yml
jobs:
  my-workflow-job:
    steps:
    - name: previous-step
      uses: a-previous-action
    - name: convert-to-raw-url
      uses: actioncloud/github-raw-url@v1
      with:
        github-url: ${{ previous-step.outputs.github-url }}
    - name: another-step
      uses: another-action
      with:
        github-raw-url: ${{ convert-to-raw-url.outputs.raw-url }}
```

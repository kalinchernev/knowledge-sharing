# Knowledge Sharing

[![CircleCI](https://circleci.com/gh/kalinchernev/knowledge-sharing.svg?style=svg)](https://circleci.com/gh/kalinchernev/knowledge-sharing)

## Prerequisites

- AWS account
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) to setup profile and credentials
- NodeJS (8, 10 or higher, LTS is best, obviously)

## Getting started

Please refer to Amplify's official [guide](https://aws-amplify.github.io/docs/).

Although official documentation recommends that `@aws-amplify/cli` is installed globally, in this project it's included in development dependencies. With this, you can easily use the CLI in the following way:

```sh
$ npx amplify help
```

## Workflows

Amplify is an abstraction on top of AWS services and mistakes are costly. Make sure you read, know and understand how to share and collaborate with the tool correctly.

Read more about [multiple environments and team workflows](https://aws-amplify.github.io/docs/cli/multienv?sdk=js)

## Documentation for developers

There is a separate file with [tips and tricks](./docs/development.md) for those who are interested in making modifications in the project.

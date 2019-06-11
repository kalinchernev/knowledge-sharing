# Knowledge Sharing

[![CircleCI](https://circleci.com/gh/kalinchernev/knowledge-sharing.svg?style=svg)](https://circleci.com/gh/kalinchernev/knowledge-sharing)

Because sharing is caring!

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

## Tricky parts

AWS Amplify is a relatively new framework ([`"created_at": "2017-10-02T22:17:14Z"`](https://api.github.com/repos/aws-amplify/amplify-js)) and there are rough edges.

Known compromises, workarounds, constraints and other similar:

- Only default cognito user pool security mechanism used, no federated authentication with Google, Facebook or similar because AppSync's GraphQL APIs can have only 1 authorization type. (11/06/2019) Related: issue [#1252](https://github.com/aws-amplify/amplify-js/issues/1252), [blog post](https://aws.amazon.com/blogs/mobile/using-multiple-authorization-types-with-aws-appsync-graphql-apis/), [documentation](https://aws-amplify.github.io/docs/cli/graphql#auth)

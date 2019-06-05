# Development Tips and Tricks

Various hints on how to develop within the project more effectively.

## Switch between named profiles

Useful when the developer has several accounts and wants to use a specific one for this project.

Documentation: [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)

Example: `export AWS_DEFAULT_PROFILE=kalata`

## Swithing between computers

As not everyone use a single laptop for work and after-work entertainment. Some use several machines and it's important to know how to work with the project in this repository in a consistent way throughout different workspaces.

Here's an overview of the workflow:

- Commit `amplify/team-provider-info.json` to source control from your primary working machine. This will allow for other users with enough permissions to use same existing resources.
- Have access to the credentials of the same user from the primary machine or create another one which have sufficient permissions in AWS to manage the beforementioned resources.
- Use the [AWS CLI](https://docs.aws.amazon.com/cli/latest/reference/index.html#cli-aws) to set credentials on the new working machine.
- Use the instructions for [team-members sharing the same dev backend](https://aws-amplify.github.io/docs/cli/multienv#team-members-sharing-the-same-dev-backend)

Example:

```sh
➜  knowledge-sharing git:(master) ✗ npx amplify init
Note: It is recommended to run this command from the root of your app directory
? Do you want to use an existing environment? Yes
? Choose the environment you would like to use: dev
? Choose your default editor: Visual Studio Code
Using default provider  awscloudformation

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use default
✔ Initialized provider successfully.
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify <category> add" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything

➜  knowledge-sharing git:(master) ✗ npx amplify status

Current Environment: dev

| Category | Resource name   | Operation | Provider plugin   |
| -------- | --------------- | --------- | ----------------- |
| Hosting  | S3AndCloudFront | No Change | awscloudformation |

Hosting endpoint: http://knowledge-sharing-dev.s3-website-eu-west-1.amazonaws.com
```

The example above assumes that the [`configure`](https://docs.aws.amazon.com/cli/latest/reference/configure/) command has been used to set credentials with sufficient permissions:

```sh
$ aws configure
```

The `amplify status` command showing the existing deployed version of the project from your primary machine is your feedback for successful setup to your new workspace.

## Useful Amplify Commands

Reminder of available commanda and options:

```sh
$ amplify
```

Check current setup

```sh
$ amplify status
```

Publish current state of local application:

```sh
$ amplify publish
```

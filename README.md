oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

<!-- toc -->
* [Getting Started](#getting-started)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Getting Started
In order to use this tool, you'll first need to install `vault`. Follow the instructions supplied by HashiCorp here [https://developer.hashicorp.com/vault/tutorials/getting-started/getting-started-install#install-vault](https://developer.hashicorp.com/vault/tutorials/getting-started/getting-started-install#install-vault).

You'll also need `ssh` installed and your RSA key has to be added to the server. Please speak to your system administrator if your SSH key has not been added yet.

Finally, a user on Vault needs to be created with you and you need to be associated with the correct policies to gain access to the environment variables you require. Please speak to your system administrator if you have not been added to Vault yet.


# Usage
<!-- usage -->
```sh-session
$ npm install -g entro-vault
$ entro-vault COMMAND
running command...
$ entro-vault (--version)
entro-vault/1.0.1 linux-x64 node-v16.15.0
$ entro-vault --help [COMMAND]
USAGE
  $ entro-vault COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`entro-vault connect`](#entro-vault-connect)
* [`entro-vault disconnect`](#entro-vault-disconnect)
* [`entro-vault env download PATH`](#entro-vault-env-download-path)
* [`entro-vault env upload PATH`](#entro-vault-env-upload-path)
* [`entro-vault help [COMMAND]`](#entro-vault-help-command)

## `entro-vault connect`

Connect to the server and begin a reverse tunnel

```
USAGE
  $ entro-vault connect -h <value> -u <value> [-p <value>] [-v <value>] [-l <value>]

FLAGS
  -h, --host=<value>        (required) The IP address or hostname to connect to via SSH
  -l, --listenPort=<value>  [default: 33233] The port to listen on when the tunnel is created
  -p, --port=<value>        [default: 22] The port to connect to via SSH
  -u, --username=<value>    (required) The username to use when connecting via SSH
  -v, --vaultPort=<value>   [default: 8200] The port to connect to the Vault server

DESCRIPTION
  Connect to the server and begin a reverse tunnel

EXAMPLES
  $ entro-vault connect --host=vault.example.com --username=example_user --port=2222
```

_See code: [dist/commands/connect.ts](https://github.com/entrostat/entro-vault/blob/v1.0.1/dist/commands/connect.ts)_

## `entro-vault disconnect`

Disconnect from the server and stop the reverse tunnel

```
USAGE
  $ entro-vault disconnect

DESCRIPTION
  Disconnect from the server and stop the reverse tunnel

EXAMPLES
  $ entro-vault disconnect
```

_See code: [dist/commands/disconnect.ts](https://github.com/entrostat/entro-vault/blob/v1.0.1/dist/commands/disconnect.ts)_

## `entro-vault env download PATH`

Download an environment file from the Vault server

```
USAGE
  $ entro-vault env download [PATH] [-o <value>] [-h <value>]

ARGUMENTS
  PATH  The path to the env that we want to download

FLAGS
  -h, --vault=<value>   [default: http://localhost:33233] The hostname and path of the Vault server
  -o, --output=<value>  [default: ./.env] The path to save the environment file to

DESCRIPTION
  Download an environment file from the Vault server

EXAMPLES
  $ entro-vault env download product:development/backend --output=devops/dev/backend/.env
```

## `entro-vault env upload PATH`

Upload the contents of an environment file to the Vault server

```
USAGE
  $ entro-vault env upload [PATH] -p <value> [-h <value>] [-y]

ARGUMENTS
  PATH  The path to the env that we want to upload

FLAGS
  -h, --vault=<value>        [default: http://localhost:33233] The hostname and path of the Vault server
  -p, --secret-path=<value>  (required) The path to where the env should be stored on Vault
  -y, --yes                  Automatically confirm that the env variables can be overwritten

DESCRIPTION
  Upload the contents of an environment file to the Vault server

EXAMPLES
  $ entro-vault env upload --secret-path=product:development/backend --yes devops/dev/backend/.env
```

## `entro-vault help [COMMAND]`

Display help for entro-vault.

```
USAGE
  $ entro-vault help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for entro-vault.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.19/src/commands/help.ts)_
<!-- commandsstop -->

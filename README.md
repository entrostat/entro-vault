oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
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
* [`entro-vault plugins`](#entro-vault-plugins)
* [`entro-vault plugins:install PLUGIN...`](#entro-vault-pluginsinstall-plugin)
* [`entro-vault plugins:inspect PLUGIN...`](#entro-vault-pluginsinspect-plugin)
* [`entro-vault plugins:install PLUGIN...`](#entro-vault-pluginsinstall-plugin-1)
* [`entro-vault plugins:link PLUGIN`](#entro-vault-pluginslink-plugin)
* [`entro-vault plugins:uninstall PLUGIN...`](#entro-vault-pluginsuninstall-plugin)
* [`entro-vault plugins:uninstall PLUGIN...`](#entro-vault-pluginsuninstall-plugin-1)
* [`entro-vault plugins:uninstall PLUGIN...`](#entro-vault-pluginsuninstall-plugin-2)
* [`entro-vault plugins update`](#entro-vault-plugins-update)

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

## `entro-vault plugins`

List installed plugins.

```
USAGE
  $ entro-vault plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ entro-vault plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.7/src/commands/plugins/index.ts)_

## `entro-vault plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ entro-vault plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ entro-vault plugins add

EXAMPLES
  $ entro-vault plugins:install myplugin 

  $ entro-vault plugins:install https://github.com/someuser/someplugin

  $ entro-vault plugins:install someuser/someplugin
```

## `entro-vault plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ entro-vault plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ entro-vault plugins:inspect myplugin
```

## `entro-vault plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ entro-vault plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ entro-vault plugins add

EXAMPLES
  $ entro-vault plugins:install myplugin 

  $ entro-vault plugins:install https://github.com/someuser/someplugin

  $ entro-vault plugins:install someuser/someplugin
```

## `entro-vault plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ entro-vault plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ entro-vault plugins:link myplugin
```

## `entro-vault plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ entro-vault plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ entro-vault plugins unlink
  $ entro-vault plugins remove
```

## `entro-vault plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ entro-vault plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ entro-vault plugins unlink
  $ entro-vault plugins remove
```

## `entro-vault plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ entro-vault plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ entro-vault plugins unlink
  $ entro-vault plugins remove
```

## `entro-vault plugins update`

Update installed plugins.

```
USAGE
  $ entro-vault plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->

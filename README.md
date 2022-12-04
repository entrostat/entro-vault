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
entro-vault/0.0.0 linux-x64 node-v16.15.0
$ entro-vault --help [COMMAND]
USAGE
  $ entro-vault COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`entro-vault hello PERSON`](#entro-vault-hello-person)
* [`entro-vault hello world`](#entro-vault-hello-world)
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

## `entro-vault hello PERSON`

Say hello

```
USAGE
  $ entro-vault hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/entrostat/entro-vault/blob/v0.0.0/dist/commands/hello/index.ts)_

## `entro-vault hello world`

Say hello world

```
USAGE
  $ entro-vault hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ entro-vault hello world
  hello world! (./src/commands/hello/world.ts)
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

import { Command, Flags, CliUx } from '@oclif/core';
import * as fs from 'fs-extra';
import * as path from 'node:path';
import { executeCommand } from '../../shared/execute-command';

export default class EnvUpload extends Command {
    static description =
        'Upload the contents of an environment file to the Vault server';

    static examples = [
        `<%= config.bin %> <%= command.id %> --secret-path=product:development/backend --yes devops/dev/backend/.env`,
    ];

    static flags = {
        vault: Flags.string({
            char: 'h',
            description: 'The hostname and path of the Vault server',
            default: 'http://localhost:33233',
        }),
        'secret-path': Flags.string({
            char: 'p',
            description: 'The path to where the env should be stored on Vault',
            required: true,
        }),
        yes: Flags.boolean({
            char: 'y',
            description:
                'Automatically confirm that the env variables can be overwritten',
            default: false,
        }),
    };

    static args = [
        {
            name: 'path',
            description: 'The path to the env that we want to upload',
            required: true,
        },
    ];

    public async run(): Promise<void> {
        const { args, flags } = await this.parse(EnvUpload);

        if (!flags.yes) {
            const confirm = await CliUx.ux.confirm(
                'This will overwrite any existing values. Are you sure you want to continue?',
            );
            if (!confirm) {
                this.error(`Confirmation was not received. Aborting.`);
            }
        }

        this.log(`Uploading env to Vault @ ${args.path}`);
        const file = await fs.readFile(args.path);
        const lines = file
            .toString()
            .split('\n')
            .filter((line) => line.trim().length > 0)
            .filter((line) => !line.startsWith('#'));
        this.log(
            `Found ${lines.length} keys in env file, verifying they are all valid lines`,
        );
        this.assertAllLinesAreValidEnvEntries(lines);

        const keyValuePairs: string[] = [];
        for (const line of lines) {
            const indexOfEquals = line.indexOf('=');
            const key = line.substring(0, indexOfEquals);
            const value = line.substring(indexOfEquals + 1);
            keyValuePairs.push(`${key}=${this.escapeShell(value)}`);
        }

        await executeCommand(
            `export VAULT_ADDR=${flags.vault}; vault kv put ${
                flags.secretPath
            } ${keyValuePairs.join(' ')}`,
            () => {},
            console.error,
        );

        this.log(`Set ${lines.length} keys in Vault`);
    }

    private assertAllLinesAreValidEnvEntries(lines: string[]): void {
        const invalid: string[] = [];
        for (const line of lines) {
            if (!/^\w+=.+$/.test(line)) {
                invalid.push(line);
            }
        }

        if (invalid.length > 0) {
            throw new Error(
                `Invalid lines found in env file: \n\n${invalid.join('\n')}`,
            );
        }
    }

    private escapeShell(str: string): string {
        return '"' + str.replace(/(["'$`\\])/g, '\\$1') + '"';
    }
}

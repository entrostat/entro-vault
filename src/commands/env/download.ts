import { Command, Flags } from '@oclif/core';
import { executeCommand } from '../../shared/execute-command';
import * as fs from 'fs-extra';
import * as path from 'path';

export default class EnvDownload extends Command {
    static description = 'Download an environment file from the Vault server';

    static examples = ['<%= config.bin %> <%= command.id %>'];

    static flags = {
        output: Flags.string({
            char: 'o',
            description: 'The path to save the environment file to',
            default: './.env',
        }),
        vault: Flags.string({
            char: 'h',
            description: 'The hostname and path of the Vault server',
            default: 'http://localhost:33233',
        }),
    };

    static args = [
        {
            name: 'path',
            description: 'The path to the env that we want to download',
            required: true,
        },
    ];

    public async run(): Promise<void> {
        const { args, flags } = await this.parse(EnvDownload);
        this.log(`Downloading env from Vault @ ${args.path}`);
        const vaultResponse = await executeCommand(
            `export VAULT_ADDR=http://localhost:33233; vault kv get -format json ${args.path}`,
            () => {},
            console.error,
        );
        const json = JSON.parse(vaultResponse);
        const data = json?.data?.data || {};
        this.log(
            `Writing ${Object.keys(data).length} keys in env to ${
                flags.output
            }`,
        );

        let env = '';

        for (const key of Object.keys(data)) {
            env += `${key}=${data[key]}\n`;
        }

        await fs.writeFile(path.resolve(flags.output), env);
    }
}

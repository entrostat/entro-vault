import { Command, Flags } from '@oclif/core';
import { executeCommand } from '../shared/execute-command';

export default class Connect extends Command {
    static description = 'Connect to the server and begin a reverse tunnel';

    static examples = ['<%= config.bin %> <%= command.id %>'];

    static flags = {
        host: Flags.string({
            char: 'h',
            description: 'The IP address or hostname to connect to via SSH',
            required: true,
        }),
        username: Flags.string({
            char: 'u',
            description: 'The username to use when connecting via SSH',
            required: true,
        }),
        port: Flags.integer({
            char: 'p',
            description: 'The port to connect to via SSH',
            default: 22,
        }),
        vaultPort: Flags.integer({
            char: 'v',
            description: 'The port to connect to the Vault server',
            default: 8200,
        }),
        listenPort: Flags.integer({
            char: 'l',
            description: 'The port to listen on when the tunnel is created',
            default: 33_233,
        }),
    };

    static args = [];

    public async run(): Promise<void> {
        const { flags } = await this.parse(Connect);

        await executeCommand(
            `ssh -L ${flags.listenPort}:localhost:${flags.vaultPort} ${flags.username}@${flags.host} -p ${flags.port} -o StrictHostKeychecking=no`,
            console.log,
            console.error,
        );
    }
}

import { Command, Flags } from '@oclif/core';
import { executeCommand } from '../shared/execute-command';
import { getConfig } from '../shared/get-config';
import { saveConfig } from '../shared/save-config';

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

        const command = `ssh -L ${flags.listenPort}:localhost:${flags.vaultPort} ${flags.username}@${flags.host} -p ${flags.port} -o StrictHostKeychecking=no`;

        const config = await getConfig(this.config.configDir);
        config.processes = config.processes || [];
        config.processes.push(command);
        await saveConfig(this.config.configDir, config);

        this.log(`


Creating the reverse bind now, when it is complete you can visit:

http://localhost:${flags.listenPort}

To access the Vault server. If you would like to use the Vault CLI, you will need to run the following export command:

export VAULT_ADDR=http://localhost:${flags.listenPort}
        `);

        await executeCommand(command, console.log, console.error);
    }
}

import { Command, Flags } from '@oclif/core';
import * as waitOn from 'wait-on';

export default class Wait extends Command {
    static description =
        'Wait until the connection has been opened before continuing';

    static examples = ['<%= config.bin %> <%= command.id %>'];

    static flags = {
        port: Flags.integer({
            char: 'p',
            description: 'The port that the tunnel is listening on',
            default: 33_233,
        }),
        timeout: Flags.integer({
            char: 't',
            description:
                'The number of seconds to wait before timing out and returning an error exit code',
            default: 30,
        }),
    };

    static args = [];

    public async run(): Promise<void> {
        const { flags } = await this.parse(Wait);
        try {
            await waitOn({
                timeout: flags.timeout * 1000,
                resources: [`tcp:localhost:${flags.port}`],
            });
            this.log(`Connection established!`);
        } catch (e) {
            this.error(
                `Failed to connect to port ${flags.port} after ${flags.timeout} seconds`,
                {
                    code: '1',
                },
            );
        }
    }
}

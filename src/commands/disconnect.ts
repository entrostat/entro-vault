import { Command, Flags } from '@oclif/core';
import { getConfig } from '../shared/get-config';
import { saveConfig } from '../shared/save-config';
import { executeCommand } from '../shared/execute-command';

export default class Disconnect extends Command {
    static description =
        'Disconnect from the server and stop the reverse tunnel';

    static examples = ['<%= config.bin %> <%= command.id %>'];

    static flags = {
        // flag with a value (-n, --name=VALUE)
        name: Flags.string({ char: 'n', description: 'name to print' }),
        // flag with no value (-f, --force)
        force: Flags.boolean({ char: 'f' }),
    };

    static args = [{ name: 'file' }];

    public async run(): Promise<void> {
        const config = await getConfig(this.config.configDir);
        config.processes = config.processes || [];

        const sshProcessesStr = await executeCommand(
            `ps aux | grep ssh`,
            () => {
                // Do nothing
            },
            console.error,
        );
        const sshProcesses = sshProcessesStr.split('\n');
        const killed: string[] = [];

        for (const command of config.processes) {
            this.log(`Killing process: ${command}`);

            const exists = sshProcesses.find((proc) => proc.includes(command));
            if (!exists) {
                continue;
            }

            const pid = exists.split(/ +/)[1];

            await executeCommand(
                `kill -9 ${pid}`,
                () => {
                    // Do nothing
                },
                console.error,
            );
            killed.push(exists);
        }

        config.processes = config.processes.filter(
            (proc: string) =>
                !killed.includes(proc) && sshProcesses.includes(proc),
        );

        await saveConfig(this.config.configDir, config);
    }
}

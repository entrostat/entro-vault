import * as fs from 'fs-extra';
import * as path from 'node:path';

export async function saveConfig(
    folderPath: string,
    config: any,
): Promise<any> {
    try {
        await fs.mkdirp(folderPath);
        return await fs.writeJson(path.join(folderPath, 'config.json'), config);
    } catch {
        return {};
    }
}

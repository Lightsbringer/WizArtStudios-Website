import fs from 'fs';
import path from 'path';

const directoryPath = path.join(__dirname, '../../assets/');

export const scanAssetsFolder = () => {
    let websiteFiles: string[] = [];

    const files = fs.readdirSync(directoryPath);
    websiteFiles = files;

    return websiteFiles;
}

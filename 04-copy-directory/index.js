const path = require('path');
const { copyFile, mkdir, readdir, unlink, rm } = require('node:fs/promises');


const copy = async () => {
    try {

        await mkdir(path.join(__dirname, 'files-copy'), { recursive: true });

        const fileList = await readdir(path.join(__dirname, 'files'));
        const fileCopyList = await readdir(path.join(__dirname, 'files-copy'))
        console.log(fileCopyList.length);

        for (const file of fileCopyList) {
            await unlink(path.join(__dirname, 'files-copy', file));
        }
        for (const file of fileList) {
            await copyFile(
                path.join(__dirname, 'files', file),
                path.join(__dirname, 'files-copy', file));
        }
    } catch {
        console.error('The file could not be copied');
    }
}
copy();
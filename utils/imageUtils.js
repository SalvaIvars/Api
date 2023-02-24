const { readdir } = require('fs/promises');
const path = require('path')

const findByExtension = async (dir, name) => {
    const matchedFiles = new Set();
    const extensions = ['PNG','png', 'jpg','jpeg','jpg','svg', 'JPG']
    const files = await readdir(dir);
    for (const file of files) {
        if(file.startsWith(name)){
            const fileExt = path.extname(file);
            for(const ext in extensions){
                if (fileExt === `.${extensions[ext]}`) {
                    matchedFiles.add(file);
                }
            }
        }
    }
    return matchedFiles;
};

const getNumberOfFiles = async(dir) => {
    let nFiles = 0;
    const files = await readdir(dir);

    for (const file of files) {
        nFiles++
    }

    return nFiles
}

module.exports = {
    findByExtension,
    getNumberOfFiles
}
const { stdout } = process;
const path = require('path');
const fsPromise = require('fs/promises');


const readDirectory = async () => {
  const directory = fsPromise.readdir(path.join(__dirname, 'secret-folder'), {withFileTypes: true});
  const filesArray = await directory;
  for (const file of filesArray) {
    if (!file.isDirectory()) {
      const fileName = path.parse(file.name).name;
      const extensionName = path.extname(file.name).slice(1);
      const statFile = await fsPromise.stat(path.join(__dirname,'secret-folder',file.name));
      const weightFile = statFile.size;
      
      stdout.write(`${fileName} - ${extensionName} - ${weightFile} Kb\n`);
    }
  }
  
};
readDirectory();

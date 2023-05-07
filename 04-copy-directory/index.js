const fs = require('fs');
const {stdout} = process;
const path = require('path');

fs.mkdir(path.join(__dirname, 'files-copy'), (err) => {
    if (err) throw err;
})
console.log('directory has created');

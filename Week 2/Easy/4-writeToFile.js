// Try to write to the contents of a file, using the fs library again 

const fs = require('fs');

const data = 'Hello, World! I am writing to a file!';

fs.writeFile('./4-file.txt', data, 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

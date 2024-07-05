/* Read a file, remove all the extra spaces and write it back to the same file. 
*/

const fs = require('fs').promises;

async function removeExtraSpaces(filePath) {
    try {
        /* Read the file content */
        const data = await fs.readFile(filePath, 'utf8');
        
        // Remove extra spaces (leading, trailing, and multiple spaces between words)
        const modifiedData = data.replace(/\s+/g, ' ').trim();
        
        // Write the modified content back to the same file
        await fs.writeFile(filePath, modifiedData, 'utf8');
        
        console.log('File has been updated successfully.');
    } catch (err) {
        console.error('Error processing the file:', err);
    }
}

module.exports = removeExtraSpaces;

const { error } = require('console');
const fs = require('fs')

const path = './info.txt'
const content = 'Node.js is awesome!'

fs.writeFile(path, content, (err) => {
if (err) {
  console.error('Error creating the file'); 
}
console.log('The file was successfully created');
})

fs.readFile(path,'utf8', (err, data) => {
 if (err) {
  console.error('Error reading the file');
}
console.log('Contents of the file: ', data);

})
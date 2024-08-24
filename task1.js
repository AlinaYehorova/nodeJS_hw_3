const { error } = require('console');
const fs = require('fs')

const paht = './myFolder' 

// {recursive: true} -> создает необходимые род. директории, если их нет
fs.mkdir(paht, {recursive: true}, (err) => {
  if (err) {
    console.error('Error creating the folder');
    
  }

  console.log('The folder was successfully created');
  
})

fs.rmdir(paht, (err) => {
if (err) {
  console.error('Error removing the folder');
  
}
console.log('The folder was successfully removed');

})
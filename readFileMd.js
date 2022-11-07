const path = require('node:path');
const fs = require('node:fs');
const filePath = './README.md';
const { extractorLinks } = require('./extractorLinks.js');

const readFileMd = (filePath, options) => {
  console.log(filePath);

  if (path.isAbsolute(filePath) === false) {
    // aca debo convertir a absoluta
    filePath = path.resolve(filePath);
  }
  if (fs.existsSync(filePath)) {
    let checkPath = fs.statSync(filePath);
    //early return
    if (checkPath.isDirectory()) {
      console.log(TypeError);
    }
    //else if(checkPath.isFile()){
    let otroPath = path.extname(filePath);
    console.log(otroPath);
    if (otroPath != ".md") {
      console.log(TypeError);
    }

    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        console.log('error: ', err);
      } else {
        extractorLinks(data);
        //en un futuro esto cambia 
      }
    });

  } else {
    console.log("El archivo NO EXISTE!");
  }
  // Function to get current filenames
  //in directory with specific extension



};
readFileMd(filePath)


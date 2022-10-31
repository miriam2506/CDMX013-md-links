const path = require('node:path');
const fs = require('node:fs');
const filePath= './prueba3.md';

const mdLinks = (filePath, options)=>{ 
  console.log (filePath);

  if(path.isAbsolute(filePath) === false) {
    // aca debo convertir a absoluta
    filePath = path.resolve(filePath);
  }
  
  let checkPath=fs.statSync(filePath);
  
  if(fs.existsSync(filePath)){
    //early return
    if (checkPath.isDirectory()){
  return (TypeError); 
    }
    //else if(checkPath.isFile()){
       let otroPath=path.extname(filePath);  
       console.log (otroPath);
   
       if (otroPath != ".md"){
   console.log(TypeError);
  }

       // filePath.
  //(file => {
    //  if (path.extname(file) == ".md"){
      //  let array = []
        //return array
      //}
      //console.log();
      //})
     fs.readFile(filePath [options], callback)
     fs.readFile('archivo.txt', 'utf-8', (err, data) => {
     if(err) {
     console.log('error: ', err);
     } else {
      console.log(data);
     }
     });
  
    
  }else{
    console.log("El archivo NO EXISTE!");
    }
 // Function to get current filenames
    //in directory with specific extension
     
  }
  mdLinks(filePath);   

/* eslint-disable prefer-promise-reject-errors */
const path = require('node:path')
const fs = require('node:fs')

const { extractorLinks } = require('./extractorLinks.js')
const { validate } = require('./validateLinks.js')

const filePath = process.argv[2]
// Meter en terminal la ruta

// Función principal mdLinks
const mdLinks = (filePath, options) => {
  // console.log(filePath);
  const newPromise = new Promise((resolve, reject) => {
    if (path.isAbsolute(filePath) === false) {
      // console.log (filePath);
      filePath = path.resolve(filePath)

      if (fs.existsSync(filePath)) {
        const checkPath = fs.statSync(filePath)
        // early return
        if (checkPath.isDirectory()) {
          reject('Es una carpeta, por favor ingrese un archivo')
        }
        const extFile = path.extname(filePath)
        if (extFile !== '.md') {
          reject('El archivo no es md')
        } else {
        // se lee si es md y con utf 8 lo convierte en lenguaje de texto para depsues resolver la promesa ejecutando las funciones

          // eslint-disable-next-line n/handle-callback-err
          fs.readFile(filePath, 'utf-8', (error, data) => {
            if (options.validate) {
              resolve(validate(extractorLinks(data)))
            } else {
              resolve(extractorLinks(data))
            }
          })
        }
      } else {
        reject('El archivo NO EXISTE!')
      }
    }
  })
  // sólo se declara
  return newPromise
}

// consume promesa con then cuando resuelve y catch error
mdLinks(filePath, { validate: true }).then((result) => {
  console.log(result)
  // Excepción
}).catch((error) => {
  console.log(error)
})

// titulo y filename
// resuelva la promesa con los resultados, (se tiene que resolver la promesa) falta resolverla conlos datos necesarios
// solo se esta resolviendo ruta falta conjuntarvalidate (que es el que valida los links)
// se tiene que resolver en una promesa, tiene que retornar una promesa la función (return reject)
// ver donde insertar las promesas
// titulo del enlace +
// nombre del archivo +
// quitar console.log ./readme.md .md
// split y array
// metodo de array

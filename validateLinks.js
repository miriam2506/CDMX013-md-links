
/* eslint-disable no-lone-blocks */
// traer respuesta http request del servidor
const axios = require('axios')

// a la hora que cumple promesa retorna objeto.
const validate = (links) => {
  // promise all recibe un arreglo de promesas y nos devuelve un arreglo de respuesrA
  // itera con map en cada link para arrojar y devuelve el array de objetos con las propiedades
  return Promise.all(links.map((link) => {
    return axios.get(link)
      .then(response => {
        const linkValidate = {
          // obtener el titulo del enlace / file name (nombre del archivo)
          // CLI (lista de links)
          // [title](URL)
          // CLI modulo distinto
          // quitar console.log
          // CLI el usuario entrega un array process.argv
          // ['node', 'index.js', '--validate', '.'] (iterar)
          // title:
          href: link,
          statusCode: response.status,
          file: response.request.path,
          message: response.statusText

        }
        return linkValidate
      })
      .catch(error => {
        const linkInvalidate = {
          href: link,
          statusCode: error.status,
          statusText: error.message,
          message: 'fail'

        }
        return linkInvalidate
      })
  }))
}

{
  module.exports = {
    validate
  }
}

// petición https
// petición get
// validar o no
// regresar promesa de resultado por que es asincrona

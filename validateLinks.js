/* eslint-disable no-lone-blocks */
const axios = require('axios')

const validate = (links) => {
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

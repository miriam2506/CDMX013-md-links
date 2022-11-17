// importar md para leer el archivo en html
const md = require('markdown-it')()
// const { HttpStatusCode } = require('axios');
// JSDOM para extraer sólo los links
const jsdom = require('jsdom')
const { JSDOM } = jsdom
// const functionJsDom= jsdom.JSDOM

const extractorLinks = (text) => {
  // md trae texto en html
  const result = md.render(text)
  // nodos
  const dom = new JSDOM(result)
  // sólo seleccione a
  const query = dom.window.document.querySelectorAll('a')
  // con array apply  convierte lista en array
  const arrayLinks = Array.apply(null, query)

  // cómo obtener texto de link a partir de un nodo en js
  // se guarda un nuevo array apra poder iterar en el con map
  // devuelve todo lo de atributi href
  const newArray = arrayLinks.map((a) => {
    return a.getAttribute('href')
  })
  // ARRAY clean filtra los arrays obtenidos arriba y sólo trar los http
  const arrayClean = newArray.filter((href) => {
    if (href.startsWith('http')) {
      return true
    } else {
      return false
    }
  })

  return (arrayClean)
}

// eslint-disable-next-line no-lone-blocks
{ 
  module.exports = {
  extractorLinks
}
}

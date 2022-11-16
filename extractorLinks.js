const md = require('markdown-it')()
// const { HttpStatusCode } = require('axios');
const jsdom = require('jsdom')
const { JSDOM } = jsdom
// const functionJsDom= jsdom.JSDOM

const extractorLinks = (text) => {
  const result = md.render(text)
  //   console.log(result);

  const dom = new JSDOM(result)
  const query = dom.window.document.querySelectorAll('a')
  const arrayLinks = Array.apply(null, query)
  // cómo obtener texto de link a partir de un nodo en js
  const newArray = arrayLinks.map((a) => {
    return a.getAttribute('href')
  })

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
{ module.exports = {
  extractorLinks
}
}

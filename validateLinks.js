const axios = require('axios');

const validate = (links) => {
    return Promise.all(links.map((link) => {
        return axios.get(link)
            .then((response => {
                const linkValidate = {
                    href: link,
                    statusCode: response.status,
                    file: response.request.path,
                    message: response.statusText,


                }
                return linkValidate
            }))
            .catch(error => {
                const linkInvalidate = {
                    href: link,
                    statusText: error.message,
                    message: "fail",


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



//petición https
//petición get
//validar o no
//regresar promesa de resultado por que es asincrona



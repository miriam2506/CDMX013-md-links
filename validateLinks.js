const validate=(links)=>{
const newArray=links.map((link)=>{
    axios.get(linkPrueba)
    .then((response=>{
        const linkValidate={
            href:linkPrueba,
            statusCode: response.status,
            status: response.statusText,
            data:response.data,
        }
        console.log (linkValidate)
    }))
    .catch(error=>{
    const linkInvalidate={
        href:linkPrueba,
        statusCode: error.status,
        status: error.statusText,
        data:error.data,
    
    }
    console.log (linkInvalidate)
    })
    
    
    

})

}



{module.exports={
    validate
}
}



//petición https    
//petición get
//validar o no
//regresar promesa de resultado por que es asincrona



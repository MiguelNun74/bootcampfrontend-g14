//console.log("Hola JS")

/*const inputPeso = document.getElementById('peso'){
    console.log('click')
    const peso = inputPeso.value 
    const altura = inputPeso.value*/
    
    buttonCalcular.addEventListener('click', function (event) ){
        const peso = inputPeso.value
        const altura = inputPeso.value
        
        console.log(peso, altura)

        const indiceDeMasaCorporal = peso / ((altura / 100) ** 2)

        console.log(indiceDeMasaCorporal)

    }
}

//console.log(inputPeso)

//inputPeso.addEventListener('input', function (event) {
        //console.log("escribiendo en la caja de peso')

  //  })
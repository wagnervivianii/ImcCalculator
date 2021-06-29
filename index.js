function main(){
    const form = document.querySelector('.formulario');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        validation()

    })
}

// do the math
function calculator(){
    const nameEntry = document.querySelector('.nomeEntrada')
    const weightEntry = document.querySelector('.pesoEntrada');
    const heightEntry = document.querySelector('.alturaEntrada');
    const exitresult = document.querySelector('.resultado');
    let weight = +weightEntry.value;
    let height = +heightEntry.value;
    let name = nameEntry.value;

    result =  (weight / Math.pow(height, 2)).toFixed(2);

    if (result < 18.5) {
       exitresult.innerHTML = `${name}, your IMC is: ${result}, você está abaixo do Peso!`
       exitresult.setAttribute('style', 'background-color:red;  color: yellow;')
    }else if(result > 18.5 && result < 24.9){
        exitresult.innerHTML = `${name}, your IMC is: ${result}, you are at normal weight!`
        exitresult.setAttribute('style', 'background-color:green;  color: white;')       
    }else if(result >= 25 && result <= 29.9){
        exitresult.innerHTML = `${name}, your IMC is:  ${result}, you are overweight!`       
        exitresult.setAttribute('style', 'background-color:yellow;  color: blue;')
    }else if(result >= 30 && result <= 34.9){
        exitresult.innerHTML = `${name}, your IMC is: ${result}, you have grade 1 OBESITY!`
        exitresult.setAttribute('style', 'background-color: black;  color: white;')       
    }else if(result >= 35 && result <= 39.9 ){
        exitresult.innerHTML = `${name}, your IMC is: ${result}, you have grade 2 OBESITY!`
        exitresult.setAttribute('style', 'background-color: pink;  color: grey;')       
    }else if(result >= 40){
        exitresult.innerHTML = `${name}, your IMC is: ${result},you have grade 3 OBESITY!`       
        exitresult.setAttribute('style', 'background-color:purple;  color: yellow;')
    }
}

// validate if the data is true
function validation(){
    const nameEntry = document.querySelector('.nomeEntrada');
    const weightEntry = document.querySelector('.pesoEntrada');
    const heightEntry = document.querySelector('.alturaEntrada');

    const regexName  = /[A-Z]+/ig;
    const regexWeight = /\d\d?\d?\.?(\d?){2}/g;
    const regexHeight = /[1-2]\.?(\d{2})?/g;

    let name = nameEntry.value;
    let weight = weightEntry.value;
    let height = heightEntry.value;

    if ( name != name.match(regexName)){
        alert("Enter only Alpha characters, no spaces! ")
    }else if (weight != weight.match(regexWeight) && weight < 40 || weight > 250) {
        alert("Enter only characters numeric, as show in the example! the weight must be between 40 and 250 kilos")
    }else if (height != height.match(regexHeight) && height <1.10 || height > 3 ) {
        alert('Enter only characters numeric, as show in teh example!the height must be between 1.10 and 2.90 meters')        
    }else{
        calculator()
    }

}

onload  = main()

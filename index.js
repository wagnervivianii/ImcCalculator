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

    if (result < 18,5) {
       return exitresult.innerHTML = `${name}, seu IMC é: ${result}, você está abaixo do Peso!`
    }
}

// validate if the data is true
function validation(){
    const nameEntry = document.querySelector('.nomeEntrada');
    const weightEntry = document.querySelector('.pesoEntrada');
    const heightEntry = document.querySelector('.alturaEntrada');

    const regexName  = /[A-Z]+/ig;
    const regexWeight = /\d\d?\.?(\d{2})?/g;
    const regexHeight = /[1-2]\.?(\d{2})?/g;

    let name = nameEntry.value;
    let weight = weightEntry.value;
    let height = heightEntry.value;

    if ( name != name.match(regexName)){
        alert("Enter only Alpha characters, no spaces! ")
    }else if (weight != weight.match(regexWeight)) {
        alert("Enter only characters numeric, as show in the example! ")
    }else if (height != height.match(regexHeight)) {
        alert('Enter only characters numeric, as show in teh example! ')        
    }else{
        calculator()
    }

}

onload  = main()

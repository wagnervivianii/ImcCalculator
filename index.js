function main(){
    const form = document.querySelector('.formulario');
    
}




function validation(){
    const nameEntry = document.querySelector('.nomeEntrada');
    const weightEntry = document.querySelector('.pesoEntrada');
    const heightEntry = document.querySelector('.alturaEntrada');

    const regexName  = /[A-Z]+/ig;
    const regexWeight = /\d\d?\.?(\d{2})?/g;
    const regexHeight = /[1-2]\.?(\d{2})?/g;

    let name = nameEntry.nodeValue;
    let weight = weightEntry.nodeValue;
    let height = heightEntry.nodeValue;

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
//Requisito 1
function operadores(){
    //Adição
    console.log(a + b);
    //Subtração
    console.log(a - b);
    //Multiplicação
    console.log(a * b);
    //Divisão
    console.log(a / b);
    //Módulo
    console.log(a % b);
}

//Requisito 2
function doisValores(a, b) {
    if(a > b){
        console.log(`O maior valor entre ${a} e ${b} é igual a ${a}.`);
    }
    else if(a < b){
        console.log(`O maior valor entre ${a} e ${b} é igual a ${b}.`);
    }
    else{
        console.log(`Os dois valores são iguais!`);
    }
}
    
//Requisito 3
function tresValores (a, b, c){
    if(a > b && a > c){
        console.log(`O maior valor entre ${a}, ${b} e ${c} é igual a ${a}.`);
    }
    else if(b > a && b > c){
        console.log(`O maior valor entre ${a}, ${b} e ${c} é igual a  ${b}.`);
    }
    else if(c > a && c > b){
        console.log(`O maior valor entre ${a}, ${b} e ${c} é igual a  ${c}`);
    }
    else {
        console.log(`Os números são iguais!`);
    }
}

//Requisito 4
function positiveNegative(a) {
    if (a < 0){
        console.log(`${a} é um numero negativo.`);
    }
    else if (a > 0){
        console.log(`${a} é um numero positivo.`);
    }
    else{
        console.log(`Valor igual a zero!`);
    }
}

//Requisito 5
function triangulo(a, b, c){
    let somaTriangulo = a + b + c;

    if(somaTriangulo === 180){
        console.log(`Triangulo: ${true}`)
    }
    else{
        console.log(`Triangulo: ${false}`);
    }
}
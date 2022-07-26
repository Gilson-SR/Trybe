//Requisito 1

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


//Requisito 2

    if(a > b){
        console.log(`O maior valor entre ${a} e ${b} é igual a ${a}.`);
    }
    else if(a < b){
        console.log(`O maior valor entre ${a} e ${b} é igual a ${b}.`);
    }
    else{
        console.log(`Os dois valores são iguais!`);
    }

    
//Requisito 3

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


//Requisito 4

    if (a < 0){
        console.log(`${a} é um numero negativo.`);
    }
    else if (a > 0){
        console.log(`${a} é um numero positivo.`);
    }
    else{
        console.log(`Valor igual a zero!`);
    }


//Requisito 5

    let somaTriangulo = a + b + c;

    if(somaTriangulo === 180){
        console.log(`Triangulo: ${true}`)
    }
    else{
        console.log(`Triangulo: ${false}`);
    }

    
//Requisito 6

let pecaXadrez = 'joao';

if(pecaXadrez.toLowerCase() === 'peão'){
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
}
else if(pecaXadrez.toLowerCase() === 'cavalo'){
    console.log('Cavalo -> "L" pode pular sobre as peças.');
}
else if(pecaXadrez.toLowerCase() === 'torre'){
    console.log('Torre -> Horizontal e vertical.');
}
else if(pecaXadrez.toLowerCase() === 'bispo'){
    console.log('Bispo-> Diagonal.');
}
else if(pecaXadrez.toLowerCase() === 'rainha'){
    console.log('Rainha-> Diagonal, horizontal e vertical.');
}
else if(pecaXadrez.toLowerCase() === 'rei'){
    console.log('Rei-> Uma casa apenas para qualquer direção.');
}
else{
    console.log('Peça Inválida!');
}

//Requisito 7



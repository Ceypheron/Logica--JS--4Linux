//Logica de programação com JS -- 4Linux

// Math.floor (horas)   == pega valor inteiro apenas
//* 

// !    negação !false
// &&   conjunção true&&false
// ||   disjunção true||false
// ===  igualdade
// !==  diferença   9!==9
//
/*let idade = 18;
let maioridade = 21;
alert((idade >= maioridade ? 'maior' : 'menor') + ' de idade' ); */
/////////////////////////////////////////////////////////////////////////
/* WHILE 
nivelagua = 0;

while (nivelagua <=0) {
    console.log('nivel de baixo '+ nivelagua);
    nivelagua = 100;
}
////////////////////////////////////////////////////////////////
do {
    console.log('DO: nivel de agua restante: '+ nivelagua);
    nivelagua -= 1;
} while (nivelagua > 0);*/
////////////////////////////////////////////////////////////////////////
/*
for (let nivelagua = 10; nivelagua > 0; nivelagua -= 1) {
    console.log('nivel restante de agua: '+ nivelagua);
}*/
///////////////////////////////
/*let f = 1;
for (let n = 5; n > 0; n -= 1) {
    f *= n;
    console.log(f);
    f = 1;
}*/
///////////////////////////
/*let n = 0;
while (true) {
    n += 3;

    if (n % 2 === 0) {
        continue;
    }

    console.log(n);
    if (n % 11 === 0 ) {
        break;
    }
}*/
///////////////////////////////////
/*function divisivelPor(a, b) {
    if (a % b === 0) {
        console.log( a + ' e divisivel por' + b);
    }
    else {
        console.log(a + ' nao e divisivel por '+ b);
    }
}

function ehPar(n) {
    divisivelPor(n, 2);
}

ehPar(44)*/
/////////////////////////////////////
// FUNÇÃO SEM PARAMETRO
/*function mostrarMenu() {
    let entradas = ['entrar','cadastrar','fechar']
    for (let i = 0, o = 1; i < entradas.length; i +=1, o+=1) {
        console.log( o + ' - ' + entradas[i]);
    }
}
mostrarMenu()*/
///////////////////////////////////////
// FUNÇÃO COM PARAMETRO
/*
function mostrarMenu2(entradas) {
    for (let i = 0, o = 1; i < entradas.length; i +=1, o+=1) {
        console.log( o + ' - ' + entradas[i]);
    }
}
mostrarMenu2(["ver perfil", 'editar perfil', 'config', 'exit']);*/
////////////////////////////////////
// RETORNO
/*function multiplicar(a, b){
    let resultado = a * b;
    console.log(resultado);
}
multiplicar(2, 5)*/
////////////////////////
//VETORES
/*
let numeros = [10,20,30,40,50];
numeros.push(60); //adiciona 60 ao final
numeros.unshift(7);// adiciona 7 no inicio
numeros.shift();//remove o primeiro elemento do vetor
numeros.pop();//remove o ultimo elemento
numeros.splice(1,3);//remove 3 numeros a partir da posição 01

let funcionarios = ('Fabricio','Hector');
let funcionarios2 = ('Guilherme','Yago');
let todosFuncionarios = funcionarios.concat(funcionarios2);*/
////////////////////////////////////////////
//CRIACAO DE VETORAR A PARTIR DE EXISTENTES
let numeros = [10,20,30,40,50];
let numeros2 = [];
for (let i = 0; i < numeros.length; i+=1){
    numeros2.push(numeros[i] / 10);
}
//METODO MAP
/*function multiplicarPor10 (n) {
    return n * 10;
}
let numeros3 = numeros.map(multiplicarPor10);
console.log(numeros3);*/
// FILTRAGEM DE VETORES
/*function ehPar(n){
    return n % 2 === 0;
}
let numeros4 = numeros2.filter(ehPar);
console.log(numeros4);*/
////////////////////////////////////////
// OUTRAS OPs VETORES
//V.reverse() inverte o vetor
//V.includes(valor) = varifica se o valor existe em v
//V.indexOf(valor) = devolve o indice onde valor se encontra em V
//V.find(predicado) = encontra o primeiro valor que atende 'predicado'
//V.findIndex(predicado) = encontra o indice do primeiro valor que atende 'predicado'
//V.every(predicado) = verifica se todos os elementos de V atendem 'predicado'
//V.some(predicado) = verifica se pelo menos um elemento de V atende 'predicado'

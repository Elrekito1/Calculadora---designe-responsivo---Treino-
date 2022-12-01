// Implementando a lógica do cálculo



function calcular(tipo,valor){

console.log(tipo,valor)


if (tipo === 'acao'){

if (valor === 'c'){
//limpar o visor 
document.getElementById('resultado').value = ''


}

if(valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.'){



document.getElementById('resultado').value += valor 

}

if (valor === '='){

 var valor_campo =  eval(document.getElementById('resultado').value ) // o comando eval serve para o sistema reconhecer uma operação tal qual seria no javascript
document.getElementById('resultado').value = valor_campo


}



}else if (tipo === 'valor'){




document.getElementById('resultado').value +=  valor // definir que apareça no input, tudo que seja concernente a valor
// += faz com que o valor fique no campo



}

} 

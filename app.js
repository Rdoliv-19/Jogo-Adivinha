let tentativas = 10

function sorteiaNumero(){

    let valor = parseInt(document.querySelector('#valor').value);
    let resultado = document.querySelector('#resultado');
    let tentativasResultado = document.querySelector('#tentativas-resultado');

    let sorteio = parseInt(Math.round(Math.random() *10));

    if (tentativas > 0){

    if (valor === sorteio){
        resultado.innerHTML=("Acertou");        
    } else if(valor >10 || valor <0){
        alert('Digite um número de 0 a 10')
    } else if (sorteio > valor ) {
        resultado.innerHTML=("Você errou o número sorteado foi MAIOR que seu chute");
        tentativasResultado.innerHTML=(`Você tem mais ${tentativas} tentativas`)
    } else if ( sorteio < valor ){
        resultado.innerHTML=("Você errou o número sorteado foi MENOR que seu chute");
        tentativasResultado.innerHTML=(`Você tem mais ${tentativas} tentativas`)
    }

    tentativas = tentativas -1;
    console.log(tentativas)
    } else{
        alert("Acabaram suas tentativas recarregua e tente novamente")
    }
}

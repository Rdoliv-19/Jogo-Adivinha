function sorteiaNumero(){

    let valor = parseInt(document.querySelector('#valor').value);
    let resultado = document.querySelector('#resultado');


    let sorteio = parseInt(Math.round(Math.random() *10));


    if (valor === sorteio){
        resultado.innerHTML=("Acertou");
        
    } else {
        resultado.innerHTML=("Errou");
    } 
}

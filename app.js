let ListaDeNumerosEscolhidos = [];
let numeroMaximo = 10;
let tentativas  =1;
let numeroSecreo = gerarNumeroAleatorio(numeroMaximo);
function exibirTextoNaTela(tag,texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2})
}

exibirTextoNaTela('h1','Jogo do número Secreto') ;
exibirTextoNaTela('p',`Escolha um número entr 1 e ${numeroMaximo}`);

function  exibirMensagemInical(){
    exibirTextoNaTela('h1','Jogo do número Secreto') ;
     exibirTextoNaTela('p',`Escolha um número entr 1 e ${numeroMaximo}`);
}

exibirMensagemInical();

document.getElementById('reiniciar').setAttribute('disabled',true);

function verificarChute(){
    let chute =  document.querySelector('input').value;
    let numeros = [];
    numeros += chute;
        let palavraTentativa = tentativas >1? 'Tentativas':'Tentativa'
    let mensagensTentativas =`Você Descobriu o número Secreto com ${tentativas} ${palavraTentativa}`
    if ( chute ==  numeroSecreo){
        exibirTextoNaTela('h1','Arcertou !') ;
        exibirTextoNaTela('p',mensagensTentativas);
        habilitarCampo();
    }else{
        if(chute > numeroSecreo){
            exibirTextoNaTela('p',`O número Secreto é menor`);
    }
    else{
        exibirTextoNaTela('p',`O número secreto é maior`);
    }
    tentativas ++ ; 
    limparCampo();
    }

}

function gerarNumeroAleatorio(numeroMaximo){
  let numeroEscolhido = parseInt( Math.random() * numeroMaximo +1)
  let quantidadeDeNumerosEscolhidos = ListaDeNumerosEscolhidos.length;
  if( quantidadeDeNumerosEscolhidos == numeroMaximo){
    ListaDeNumerosEscolhidos = [];
  }
  if(ListaDeNumerosEscolhidos.includes(numeroEscolhido)){
return gerarNumeroAleatorio(numeroMaximo)
  }
  else{
ListaDeNumerosEscolhidos.push(numeroEscolhido);
    return numeroEscolhido
  }
}

function limparCampo(){
    chute= document.querySelector('input');
    chute.value ='';
}

limparCampo();
    
function habilitarCampo(){
    let reiniciar = document.getElementById('reiniciar')
    reiniciar.removeAttribute('disabled');
}

function reiniciarJogo(){
    
    exibirMensagemInical()
    limparCampo();
   numeroSecreo = gerarNumeroAleatorio(numeroMaximo);
    tentativas =1 ;
    document.getElementById('reiniciar').setAttribute('disabled',true);
   
}
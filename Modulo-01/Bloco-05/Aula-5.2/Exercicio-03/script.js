let removePrimeiro = document.getElementById('primeiroFilho');
let removeSegundo = document.getElementById('terceiroFilho');
let removeTerceiro = document.getElementById('quartoEUltimoFilho');
let removeQuarto = document.getElementById('segundoEUltimoFilhoDoFilho');

removePrimeiro.parentNode.removeChild(removePrimeiro);
removeSegundo.parentNode.removeChild(removeSegundo);
removeTerceiro.parentNode.removeChild(removeTerceiro);
removeQuarto.parentNode.removeChild(removeQuarto);
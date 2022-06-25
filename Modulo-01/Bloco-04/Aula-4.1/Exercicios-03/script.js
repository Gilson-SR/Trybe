const notaDesafioTecnico = 80;

if (notaDesafioTecnico >= 80 && notaDesafioTecnico <= 100) {
    console.log('Parabéns, você foi aprovada(o)!');
}
else if (notaDesafioTecnico >= 60 && notaDesafioTecnico < 80) {
    console.log('Você está na lista de espera');
}
else if (notaDesafioTecnico >= 0 && notaDesafioTecnico < 60) {
    console.log('Você foi reprovada(o)');
}
else {
    console.log('Valor inserido inválido');
}
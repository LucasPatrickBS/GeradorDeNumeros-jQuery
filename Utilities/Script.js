//JavaScipt
function geraNumeroAleatorio(min, max) {
    var valor = Math.random() * (max*min) + 1;
    // arredondar com 2 casas decimais
    return valor = parseFloat(valor.toFixed(2));
}

function colocaNumeros(){
    matriz = new Array(5); 
    i = 0;
    soma = 0;
   
    for (var linha = 0; linha < matriz.length; linha++) {
       for (var coluna = 0; coluna < matriz.length; coluna++) {
           matriz[linha] = new Array(
           geraNumeroAleatorio(1,99),
           geraNumeroAleatorio(1,99),
           geraNumeroAleatorio(1,99),
           geraNumeroAleatorio(1,99),
           geraNumeroAleatorio(1,99)
           );
           var numero = new Array(25);
           numero[i] = matriz[linha][coluna];
           soma += matriz[linha][coluna];
           $('#valor'+i).val(numero[i])
           i++;
       }
    }
}

Array.max = function(array) {
    return Math.max.apply(Math, array);
}

Array.min = function(array) {
    return Math.min.apply(Math, array);
}

//jquery
$(document).ready(function(){

    matriz = new Array(5); 
    i = 0;
    soma = 0;
   
    for (var linha = 0; linha < matriz.length; linha++) {
       for (var coluna = 0; coluna < matriz.length; coluna++) {
           matriz[linha] = new Array(
           geraNumeroAleatorio(1,99),
           geraNumeroAleatorio(1,99),
           geraNumeroAleatorio(1,99),
           geraNumeroAleatorio(1,99),
           geraNumeroAleatorio(1,99)
           );
           var numero = new Array(25);
           numero[i] = matriz[linha][coluna];
           soma += matriz[linha][coluna];
           $('#valor'+i).val(numero[i])
           i++;
       }
    }

    $("button[name=CE0]").click(function (){
            $('#visor').val('');
    });

    $("button[name=CE1]").click(function (){
        for(var cont = 0; cont < 25; cont++){
        $('#valor'+cont).val('');
        }
        colocaNumeros();
    });

    $("button[name=media]").click(function()
    {  
        media = soma/25;
        $('#visor').val('Média abreviado em 2 casas: '+media.toFixed(2)+'');
    });

    $("button[name=soma]").click(function()
    {  
        $('#visor').val('Soma abreviada em 2 casas: '+soma.toFixed(2)+'');
    });

    $("button[name=maior]").click(function()
    {
        for(i=0;i<25;i++){
            numero[i] = $('#valor'+i).val()
        }
        $('#visor').val('O maior número é: '+Array.max(numero)+'!');
    });

    $("button[name=menor]").click(function()
    {  
        for(i=0;i<25;i++){
            numero[i] = $('#valor'+i).val()
        }
        $('#visor').val('O menor número é: '+Array.min(numero)+'!');
    });
    alert('Você não viu, mas essa matriz gerou: '+i+' números aleatórios!');
});
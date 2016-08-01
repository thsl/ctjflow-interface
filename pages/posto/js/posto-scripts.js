$(document).ready(function () {

    // Mascaramento dos campos

    $('#telefone-posto').mask('(00) 000000000', {placeholder: "(___) ___________"});


    // Contador de caracteres

    $('#posto-observacao').simplyCountable({
        counter: '#posto-observacao-counter',
        countType: 'characters',
        strictMax: true,
        countDirection: 'down',
        maxCount: 150
    });



});
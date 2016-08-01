$(document).ready(function () {
    // inicia o popover
    $('[data-toggle="popover"]').popover();
    // popover fecha ao clicar em outro lugar
    $('.popover-dismiss').popover({
        trigger: 'focus'
    });


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
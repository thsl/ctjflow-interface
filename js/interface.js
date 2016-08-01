/**
 Elementos comuns
 */

$(document).ready(function () {
// Traduz o select2

    $(".select2").select2({
        "language": "pt-BR"
    });

    // inicia o popover
    $('[data-toggle="popover"]').popover();
    // popover fecha ao clicar em outro lugar
    $('.popover-dismiss').popover({
        trigger: 'focus'
    });


});
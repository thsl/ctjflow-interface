// Extensão que faz com que o datatable ordene corretamente nomas que começam com caracteres especiais (ex. Águas claras)
$(document).ready(function () {
    // Seletor de data
    $('#datetimepicker-inicial, #datetimepicker-final').datetimepicker({
        locale: 'pt-br',
        format: "DD/MM/YYYY"
    });
    // inicia o popover
    $('[data-toggle="popover"]').popover();
    // popover fecha ao clicar em outro lugar
    $('.popover-dismiss').popover({
        trigger: 'focus'
    });

    // Mascaramento dos campos
    $('.mask-number-000').mask('000');

    // Contador de caracteres

    $('#curso-objetivos').simplyCountable({
        counter: '#curso-objetivos-counter',
        countType: 'characters',
        strictMax: true,
        countDirection: 'down',
        maxCount: 150
    });
    $('#curso-observacao').simplyCountable({
        counter: '#curso-observacao-counter',
        countType: 'characters',
        strictMax: true,
        countDirection: 'down',
        maxCount: 150
    });


// alertas quando deletar
    $('.swal-btn-cancel').click(function (e) {
        e.preventDefault();
        swal({
                title: "Você tem certeza desta ação?",
                text: "Esta ação excuirá este registro",
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Sim, excluir",
                cancelButtonText: "Não, cancelar",
                closeOnConfirm: false,
                closeOnCancel: false
            },
            function (isConfirm) {
                if (isConfirm) {
                    swal({
                        title: "Excluído!",
                        text: "O registro foi excluído",
                        type: "success",
                        confirmButtonClass: "btn-success"
                    });
                } else {
                    swal({
                        title: "Cancelado",
                        text: "Ação cancelada",
                        type: "error",
                        confirmButtonClass: "btn-danger"
                    });
                }
            });
    });



});



// Extensão que faz com que o datatable ordene corretamente nomas que começam com caracteres especiais (ex. Águas claras)
$(document).ready(function () {

    // Contador de caracteres

    $('#grupodescricao').simplyCountable({
        counter: '#grupo-descricao-counter',
        countType: 'characters',
        strictMax: true,
        countDirection: 'down',
        maxCount: 150
    });

// Validador de campos
    $("#grupos-form").validate({
        rules: {
            gruponome: "required",
            grupodescricao: "required"
        },
        messages: {
            gruponome: "Preencha o nome do grupo",
            grupodescricao: "Descreva o grupo"
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            // Add the `help-block` class to the error element
            error.addClass("help-block");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }
        },
        errorPlacement: function (error, element) {
            if (element.hasClass('select2')) {
                error.insertAfter(element.next('span'));  // select2
            } else {
                error.insertAfter(element);               // default
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).parents(".form-group").addClass("has-danger").removeClass("has-success");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents(".form-group").addClass("has-success").removeClass("has-danger");
        }
    });

    // Adiciona o select2 na validação
    jQuery.validator.addMethod('selectcheck', function (value) {
        return (value != '0');
    }, "Selecione");


    $('.swal-btn-cancel').click(function (e) {
        e.preventDefault();
        swal({
                title: "Você tem certeza desta ação?",
                text: "Isto excluirá o grupo, mas não excluirá os cursos vinculados a ele.",
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Sim, deletar",
                cancelButtonText: "Não, cancelar",
                closeOnConfirm: false,
                closeOnCancel: false
            },
            function (isConfirm) {
                if (isConfirm) {
                    swal({
                        title: "Excluído!",
                        text: "O grupo foi excluído",
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
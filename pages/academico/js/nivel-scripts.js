$(document).ready(function () {
    // Mascaramento dos campos
    $('#qtd-uni-avaliativas').mask('0000');

    // Validador de campos
    $("#nivel-form").validate({
        rules: {
            cursonome: {
                selectcheck: true
            },
            nivelnome: "required"
        },
        messages: {
            nivelnome: "Este campo não pode ser em branco",
            cursonome: "Selecione pelo menos um grupo"
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
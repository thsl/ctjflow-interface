$(document).ready(function () {
    // Seletor de data
    $('#datetimepicker-inicial, #datetimepicker-final').datetimepicker({
        locale: 'pt-br',
        format: "DD/MM/YYYY"
    });

    // Mascaramento dos campos
    $('#idade-minima').mask('000');
    $('#curso-valor').mask('000.000.000.000.000,00', {reverse: true});
    $('.datas').mask("00/00/0000", {placeholder: "__/__/____"});

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

// Validador de campos


    $("#cursos-form").validate({
        rules: {
            cursotipo: {
                selectcheck: true
            },
            cursogrupo: {
                required: true
            },
            cursonome: "required"
        },
        messages: {
            cursonome: "Este campo não pode ser em branco",
            cursogrupo: "Selecione pelo menos um grupo"
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

});
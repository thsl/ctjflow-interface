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
    $('#idade-minima').mask('000');
    $('#curso-valor').mask('000.000.000.000.000,00', {reverse: true});
    $('.datas').mask("00/00/0000", {placeholder: "__/__/____"});
    $('#telefone-unidade').mask('(00) 0000-0000', {placeholder: "(___) ___-____"});

    // Contador de caracteres

    /*$('#curso-objetivos').simplyCountable({
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
    });*/

// Validador de campos


    $("#unidade-form").validate({
        rules: {
            selectunidade: {
                selectcheck: true
            },
            selectresponsavel: {
                selectcheck: true
            },
            cursogrupo: {
                required: true
            },
            cursonome: "required",
            lastname: "required",
            username: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            agree: "required"
        },
        messages: {
            cursonome: "Este campo não pode ser em branco",
            cursogrupo: "Selecione pelo menos um grupo",
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            email: "Please enter a valid email address",
            agree: "Please accept our policy"
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
    }, "Selecione ao menos uma opção");

});
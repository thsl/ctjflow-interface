$(document).ready(function () {
    // Mascaramento dos campos
    $('#cargahoraria').mask('0000');

    // Contador de caracteres
    $('#servicodescricao').simplyCountable({
        counter: '#servico-descricao-counter',
        countType: 'characters',
        strictMax: true,
        countDirection: 'down',
        maxCount: 150
    });

// Validador de campos
    $("#servicos-form").validate({
        rules: {
            tiposervico: {
                selectcheck: true
            },
            cursogrupo: {
                required: true
            },
            servicogrupos: {
                required: true
            },
            nomeservico: "required",
            servicodescricao: "required"
        },
        messages: {
            nomeservico: "Este campo não pode ser em branco",
            tiposervico: "Selecione pelo menos uma opção",
            servicogrupos: "Selecione pelo menos um grupo",
            servicodescricao: "A descrição não pode ser vazia"
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
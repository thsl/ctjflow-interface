$(document).ready(function() {
    $('#notie-success').on('click', function() {
        notie.alert(1, 'Sucesso!', 2);
    });

    $('#notie-warning').on('click', function() {
        notie.alert(2, 'Alerta!', 2);
    });

    $('#notie-error').on('click', function() {
        notie.alert(3, 'Erro.', 2);
    });

    $('#notie-info').on('click', function() {
        notie.alert(4, 'Informativo.', 2);
    });

    $('#notie-confirm').on('click', function() {
        notie.confirm('Você tem certeza?', 'Confirmar', 'Cancelar', function() {
            notie.alert(1, 'Boa escolha!', 2);
        });
    });

    $('#notie-input').on('click', function() {
        notie.input('Digite seu endereço de email:', 'Enviar', 'Cancelar', 'email', 'mail@mail.com', function(value_entered) {
            notie.alert(1, 'Você digitou: ' + value_entered, 2);
        });
    });
});

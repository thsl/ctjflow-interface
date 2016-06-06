$(document).ready(function() {
    $('#bn-basic').on('click', function() {
        $.notify("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    });

    $('#bn-passing-title').on('click', function() {
        $.notify({
            title: "Bem vindo:",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        });
    });

    $('#bn-passing-html').on('click', function() {
        $.notify({
            title: "<strong>Bem vindo:</strong> ",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
        });
    });

    $('#bn-url').on('click', function() {
        $.notify({
            message: "Acesse nosso site CTJ.",
            url: "https://www.thoma.org.br"
        });
    });

    $('#bn-font-icon').on('click', function() {
        $.notify({
            icon: 'font-icon font-icon-warning',
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        });
    });

    $('#bn-glyphicon').on('click', function() {
        $.notify({
            icon: 'glyphicon glyphicon-star',
            title: 'Titulo',
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
        });
    });

    $('#bn-center').on('click', function() {
        $.notify({
            icon: 'font-icon font-icon-warning',
            title: '<strong>Centro</strong>',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },{
            placement: {
                align: "center"
            }
        });
    });

    $('#bn-bottom').on('click', function() {
        $.notify({
            icon: 'font-icon font-icon-warning',
            title: '<strong>Rodapé</strong>',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
        },{
            placement: {
                from: "bottom"
            }
        });
    });

    $('#bn-success').on('click', function() {
        $.notify({
            icon: 'font-icon font-icon-check-circle',
            title: '<strong>Notificação!</strong>',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },{
            type: 'success'
        });
    });

    $('#bn-warning').on('click', function() {
        $.notify({
            icon: 'font-icon font-icon-warning',
            title: '<strong>Notificação!</strong>',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },{
            type: 'warning'
        });
    });

    $('#bn-danger').on('click', function() {
        $.notify({
            icon: 'font-icon font-icon-warning',
            title: '<strong>Notificação!</strong>',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },{
            type: 'danger'
        });
    });

    $('#bn-info').on('click', function() {
        $.notify({
            icon: 'font-icon font-icon-warning',
            title: '<strong>Notificação!</strong>',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },{
            type: 'purple'
        });
    });

    $('#bn-white').on('click', function() {
        $.notify({
            icon: 'font-icon font-icon-warning',
            title: '<strong>Notificação!</strong>',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },{
            type: 'white'
        });
    });

    $('#bn-grey').on('click', function() {
        $.notify({
            icon: 'font-icon font-icon-warning',
            title: '<strong>Notificação!</strong>',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },{
            type: 'grey'
        });
    });


});

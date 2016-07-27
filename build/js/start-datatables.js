// Extensão que faz com que o datatable ordene corretamente nomas que começam com caracteres especiais (ex. Águas claras)
jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "portugues-pre": function ( data ) {
        var a = 'a';
        var e = 'e';
        var i = 'i';
        var o = 'o';
        var u = 'u';
        var c = 'c';
        var special_letters = {
            "Á": a, "á": a, "Ã": a, "ã": a, "À": a, "à": a,
            "É": e, "é": e, "Ê": e, "ê": e,
            "Í": i, "í": i, "Î": i, "î": i,
            "Ó": o, "ó": o, "Õ": o, "õ": o, "Ô": o, "ô": o,
            "Ú": u, "ú": u, "Ü": u, "ü": u,
            "ç": c, "Ç": c
        };
        for (var val in special_letters)
            data = data.split(val).join(special_letters[val]).toLowerCase();
        return data;
    },
    "portugues-asc": function ( a, b ) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },
    "portugues-desc": function ( a, b ) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
} );

$(document).ready(function () {
    //inicia tabelas (datatable-net)
    $('.datatable-on').DataTable({
        "columnDefs": [{ type: 'portugues', targets: "_all" }],
        // Faz com que os elementos ganhem nomes de classes
        "dom": ' <"search"f><"top"l>rt<"bottom"ip><"clear">',
        // traduz o datatablenet
        "language": {
            "sEmptyTable": "Nenhum registro encontrado",
            "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
            "sInfoFiltered": "(Filtrados de _MAX_ registros)",
            "sInfoPostFix": "",
            "sInfoThousands": ".",
            "sLengthMenu": "_MENU_ resultados por página",
            "sLoadingRecords": "Carregando...",
            "sProcessing": "Processando...",
            "sZeroRecords": "Nenhum registro encontrado",
            "sSearch": "",
            searchPlaceholder: "Filtre nos resultados",
            "oPaginate": {
                "sNext": "Próximo",
                "sPrevious": "Anterior",
                "sFirst": "Primeiro",
                "sLast": "Último"
            },
            "oAria": {
                "sSortAscending": ": Ordenar colunas de forma ascendente",
                "sSortDescending": ": Ordenar colunas de forma descendente"
            }
        }
    });

    // Faz com que a busca fique fora do componente
    oTable = $('.table-custom .datatable-on').DataTable();
    $('.input-table-custom').keyup(function () {
        oTable.search($(this).val()).draw();
    });
});



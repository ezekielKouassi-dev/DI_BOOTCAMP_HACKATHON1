/**
* @author ezekiel kouassi
* @description : cette fonction va nous permettre de charger notre dataTable avec les données qui sont
* contenu dans notre json
*/

(function loadDatatable() {

    $('#data-table').DataTable({
        "serverSide" : false,
        "responsive" : true,
        "autoWidth" : false,
        "ajax" : {
            "url" : "../jsonFile/datatable.json",
            "dataSrc" : "data"
        },
        "language" : {
            url : "../jsonFile/datatableFr.json"
        },
        "columns" : [
            {"data" : "number"},
            {"data" : "type"},
            {"data" : "itineraire"},
            {"data" : "price"},
            {"data" : "option"}
        ]
    })
})()

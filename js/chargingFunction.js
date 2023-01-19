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
            {"data" : "depart"},
            {"data" : "terminus"},
            {"data" : "price"},
            {"data" : "option"}
        ]
    })
})();


/**
 * @description : none
 */



function getRow() {
    let obj = [];
    $('#data-table').on('click', '.btn', function(){
        let numero = $(this).closest('tr').find('td').eq(0).html();
        let type = $(this).closest('tr').find('td').eq(1).html();
        let depart = $(this).closest('tr').find('td').eq(2).html();
        let terminus = $(this).closest('tr').find('td').eq(3).html();
        let prix = $(this).closest('tr').find('td').eq(4).html();

        obj.push(numero);
        obj.push(type);
        obj.push(depart);
        obj.push(terminus);
        obj.push(prix);
    });
    
    return obj;
}


//let tab = getRow();

//console.log(tab);




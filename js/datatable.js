/**
 * @author ezekiel kouassi
 * @description Permet d'afficher des sweet alert au click des bouttons qui sont dans le dataTable
 * @param none
 */

function displaySweetAlert() {
    swal("entrer l'opérateur avec lequel vous souhaité fais l'opérations:", {
        content: "input",
    }).then((value) => {
        if(value.length == 0 || !isNaN(value)) {
            swal({
                title: "Erreur de saisi!",
                text: "recommencez s'il vous plaît.",
                icon: "warning",
                button: "retour",
              });
        }else {
            swal("entrer votre mobile money : ",{
                content : "input",
            }).then((value)=> {
                if(value.length == 0 || isNaN(value)) {
                    swal({
                        title: "Erreur de saisi!",
                        text: "recommencez s'il vous plaît.",
                        icon: "warning",
                        button: "retour",
                    });
                }else {
                    swal({
                        title: "Succès",
                        text: "Paiement éffectué.",
                        icon: "success"
                    }).then((value) => {
                        genQrCode();
                    });
                }
            });
        }
        
    });
}

function genQrCode(selectorId="qr-code", data="ezekiel") {

    renderQrCodeDiv();
    var qrcode = new QRCode(selectorId, {
        text: JSON.stringify(data),
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    return qrcode;
}

function renderQrCodeDiv() {
    let div = document.getElementById("qr-code");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";

    let numberTextNode = document.createElement('p');
    let txtNumber = document.createTextNode(`Numéro du bus : ${number}`);
    numberTextNode.appendChild(txtNumber);
    let departTextNode = document.createElement('p');
    let txtDepart = document.createTextNode(`Départ du bus : ${depart}`);
    departTextNode.appendChild(txtDepart);
    let terminusTextNode = document.createElement('p');
    let txtTerminus = document.createTextNode(`terminus : ${terminus}`);
    terminusTextNode.appendChild(txtTerminus);

    div.appendChild(numberTextNode);
    div.appendChild(departTextNode);
    div.appendChild(terminusTextNode);
}

(function getRow() {
    $('#data-table').on('click', '.btn', function(){
        number = $(this).closest('tr').find('td').eq(0).html();
        type = $(this).closest('tr').find('td').eq(1).html();
        depart = $(this).closest('tr').find('td').eq(2).html();
        terminus = $(this).closest('tr').find('td').eq(3).html();
        prix = $(this).closest('tr').find('td').eq(4).html();
    });
})();

let number;
let type;
let depart;
let terminus;
let prix;

let btns = document.getElementsByClassName("btn");
for(let btn of btns) {
    btn.addEventListener('click', displaySweetAlert);
}
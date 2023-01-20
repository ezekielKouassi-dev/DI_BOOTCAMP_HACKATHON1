/**
 * @author ezekiel kouassi
 * @description Permet d'afficher des sweet alert au click des bouttons qui sont dans le dataTable
 * @param none
 */

function displaySweetAlert() {
    swal("entrer l'opérateur avec lequel vous souhaité fais l'opérations:", {
        content: "input",
    }).then((value) => {
        operateur = value;
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
                numeroTel = value;
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
                        console.log(operateur);
                        console.log(numeroTel);
                    });
                }
            });
        }
        
    });
}

/**
 * @author ahmed, ezekilel kouassi
 * @description fonction mettant de générer le codeQr
 * @param {*} selectorId 
 * @param {*} data 
 * @returns 
 */

function genQrCode(selectorId="qr-code", data="ezekiel") {

    renderQrCodeDiv();
    var qrcode = new QRCode(selectorId, {
        text: data,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
      //printPdf();
      resolvePbDisplayQrCode();
    return qrcode;
}

function renderQrCodeDiv() {
    let div = document.getElementById("qr-code");
    if(div.innerHTML == '') {
        renderComponent(div);
    }else{
        renderComponent(div);
    }
    
}

/**
 * @author ezekiel kouassi
 * @description cette fonction fait la création des éléments du ticket de bus
 * @param {*} div 
 */

function renderComponent(div) {
    
    // dispositon de la vue du réçu en mode flex column
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";

    // création du texte à affiché
    let numberTextNode = document.createElement('p');
    let txtNumber = document.createTextNode(`Numéro du bus : ${number}`);
    numberTextNode.appendChild(txtNumber);
    let departTextNode = document.createElement('p');
    let txtDepart = document.createTextNode(`Départ du bus : ${depart}`);
    departTextNode.appendChild(txtDepart);
    let terminusTextNode = document.createElement('p');
    let txtTerminus = document.createTextNode(`terminus : ${terminus}`);
    terminusTextNode.appendChild(txtTerminus);

    // création du button d'impression
    let btnPrint = document.createElement("button");
    let btnTextNode = document.createTextNode("Imprimer");
    btnPrint.appendChild(btnTextNode);
    btnPrint.classList.add('btn');
    btnPrint.classList.add('btn-success');
    btnPrint.classList.add('mb-3');

    // ajout des différends noeuf crée au DOM
    div.appendChild(numberTextNode);
    div.appendChild(departTextNode);
    div.appendChild(terminusTextNode);
    div.appendChild(btnPrint);
}

/**
 * @author ezekiel kouassi
 * @description cette fonction est chargé de faire l'impression du ticket
 */

function printPdf() {

    // création d'un objet de type PDF
    let pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [80, 80]
    });

    // précision de la taille de police du texte qui suit
    pdf.setFontSize(20);

    // ajout d'un texte
    pdf.text("SOTRA", 28, 15);

    // selection du codeQr
    let base64Image = $(`#qr-code img`).attr("src");

    // ajout du qrCode au document pdf
    pdf.addImage(base64Image, 'png', 32, 50, 20, 20);

    // précision de la taille de police du texte qui suit
    pdf.setFontSize(12);

    // ajout d'un texte
    pdf.text("Ligne : " + number , 8, 25);

    // précision de la taille de police du texte qui suit
    pdf.setFontSize(10);

    // ajout d'un texte
    pdf.text("Itinéraire : " + itinéraire, 8, 30);

    // précision de la taille de police du texte qui suit
    pdf.setFontSize(10);

    // ajout d'un texte
    pdf.text("Prix : " + prix, 8, 35);

    pdf.save(`ticket${localStorage.getItem("ticketNumber")}.pdf`);
    localStorage.setItem("ticketNumber", localStorage.getItem("ticketNumber") + 1);
}

/**
 * @author ezekiel kouassi
 * @description cette fonction permet de récupérer les éléments du dataTable au click du btn
 */

(function getRow() {
    $('#data-table').on('click', '.btn', function(){
        number = $(this).closest('tr').find('td').eq(0).html();
        type = $(this).closest('tr').find('td').eq(1).html();
        depart = $(this).closest('tr').find('td').eq(2).html();
        terminus = $(this).closest('tr').find('td').eq(3).html();
        prix = $(this).closest('tr').find('td').eq(4).html();
    });
})();


function resolvePbDisplayQrCode(){
    let canvas = document.getElementsByClassName("canvas");
    console.log(canvas);
    //canvas[0].style.display = "block";
};

let number;
let type;
let depart;
let terminus;
let prix;
let operateur;
let numeroTel;
localStorage.setItem("ticketNumber", 1);

let btns = document.getElementsByClassName("btn");
for(let btn of btns) {
    btn.addEventListener('click', displaySweetAlert);
}
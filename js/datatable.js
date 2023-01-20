/**
 * @author ezekiel kouassi
 * @description Permet d'afficher des sweet alert au click des bouttons qui sont dans le dataTable
 * @param none
 */

function displaySweetAlert() {
    swal("entrer l'opérateur avec lequel vous souhaité fais l'opérations:", {
        content: "input",
    }).then((value) => {
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
                icon: "success",
                button: "ok"
              }).then((value) => {
                
              });
        }
        
    });
}

let btns = document.getElementsByClassName("btn");
for(let btn of btns) {
    btn.addEventListener('click', displaySweetAlert);
}
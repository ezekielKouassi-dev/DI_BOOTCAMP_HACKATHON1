/**
 * @description: Fonction pour vérifier les champs du formulaire
 * @param {*} inputId 
 * @param {*} errorMessageId 
 * @param {*} errorMessage 
 */
function checkInput(inputId, errorMessageId, errorMessage="Le champ est obligatoire." ) {

    if (!document.getElementById(inputId).value || document.getElementById(inputId).value ==''){
        
        document.getElementById(errorMessageId).innerHTML =''
        document.getElementById(errorMessageId).appendChild(document.createTextNode(errorMessage))
    }
}

/**
 * @description Fonction pour cacher les messages d'erreurs
 * @param {*} errorMessageId 
 */
function onFocusedElement(errorMessageId){
    document.getElementById(errorMessageId).style.display = 'none'
}


/**
 * @description: fonction executée flrs de la soumission du formulaire d'authentication
 */
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault()
    // console.log(event.target);
    
   checkInput('login','msgLogin')

   checkInput('password','msgPassword')

   let admin = JSON.parse(atob(localStorage.getItem('admin')));

   if(admin.login == document.getElementById('login').value && admin.password ==            document.getElementById('password').value) {

    localStorage.setItem('login', 'true')
   }else {
    document.getElementById('generalMessage').innerHTML ="";
    document.getElementById('generalMessage').appendChild(document.createTextNode('Information errorées'));
   }
    if(localStorage.getItem('login') == 'true')  {
        window.location.href = '../admin/dashboard.html';
    }

})

/**
 * @description: Cette fonction permet de vérifier si le champ login est bien renseigné
 */
document.getElementById('login').addEventListener('focus', function(event) {
    onFocusedElement('msgLogin');
});


/**
 * @description: Cette fonction permet de vérifier si le champ password est bien renseigné
 */
document.getElementById('password').addEventListener('password', function(event) {
    onFocusedElement('msgPassword');
});


/**
 * @description: Cette fonction permet execute lorsau'on quitte le champ login pour retirer le message d'eereur
 */
document.getElementById('login').addEventListener('blur', function(event) {
    checkInput('login','msgLogin')
});

/**
 * 
 * @description: Cette fonction permet execute lorsau'on quitte le champpassword pour retirer le message d'eereur
 */
document.getElementById('password').addEventListener('blur', function(event) {
    checkInput('password','msgPassword')
});


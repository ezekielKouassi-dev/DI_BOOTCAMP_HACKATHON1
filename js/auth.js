
function checkInput(inputId, errorMessageId, errorMessage="Le champ est obligatoire." ) {

    if (!document.getElementById(inputId).value || document.getElementById(inputId).value ==''){
        
        document.getElementById(errorMessageId).innerHTML =''
        document.getElementById(errorMessageId).appendChild(document.createTextNode(errorMessage))
    }
}


function onFocusedElement(errorMessageId){
    document.getElementById(errorMessageId).style.display = 'none'
}



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

document.getElementById('login').addEventListener('focus', function(event) {
    onFocusedElement('msgLogin');
});

document.getElementById('password').addEventListener('password', function(event) {
    onFocusedElement('msgPassword');
});

document.getElementById('login').addEventListener('blur', function(event) {
    checkInput('login','msgLogin')
});

document.getElementById('password').addEventListener('blur', function(event) {
    checkInput('password','msgPassword')
});


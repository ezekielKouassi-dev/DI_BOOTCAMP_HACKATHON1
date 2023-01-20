/**
 * @description: Verfication lors du chargement de la page de l'authentification
 */
document.addEventListener('DOMContentLoaded', () => {
    
    if(!localStorage.getItem('login') && localStorage.getItem('login') != 'true')  {
        // window.location.href = '../admin/dashboard.html';
        window.location.href = '../pages/login.html';
    }

});


/**
 * @description: Foncition pour la deconnexion
 */
document.getElementById('logout').onclick = function() {
    localStorage.setItem('login',false);
    window.location.href = '../pages/login.html';

};
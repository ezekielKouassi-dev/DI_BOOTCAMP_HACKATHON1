document.addEventListener('DOMContentLoaded', () => {
    
    if(localStorage.getItem('login') && localStorage.getItem('login') == 'true')  {
        window.location.href = '../admin/dashboard.html';
    }else{
        return false;
    }

});
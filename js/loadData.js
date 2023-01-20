/**
 * @description: cette fonction permet de charger les informations de base dans le localstorage
 */
async function checker(){
 
    localStorage.setItem('login', false);
    localStorage.setItem('checker', true);

    let adminAccount = {
        login: "admin",
        password: "123456"
    };
    
    localStorage.setItem('admin',btoa(JSON.stringify(adminAccount)))
    let response  = await fetch("./../jsonFile/data.json");
    const json = await response.json();

    localStorage.setItem('allData', JSON.stringify(json['data']));

    console.log(json['data']);
  
}


document.addEventListener('DOMContentLoaded', () => {
    
    
});
(function displayNoneLoader() {
    let loader = document.querySelector('.preloader');
    window.addEventListener("load", function() {
        this.setTimeout(function(){
            loader.style.display = "none";
        }, 3000);
    });
})()
window.onscroll = function show_nav() {

    var navbar = document.querySelector(".navbar");

    if (window.pageYOffset > 130){
        navbar.classList.add("nav_fixe");
    } else{
        navbar.classList.remove("nav_fixe")
    }
}

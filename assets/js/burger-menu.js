
// Ajoutez ce script à votre fichier JavaScript existant

// Fonction pour basculer la visibilité du menu
function toggleMenu() {
    var navbarLink = document.querySelector('.navbar-link');
    navbarLink.classList.toggle("navbar-none");
}

// Ajoutez un event listener pour déclencher la fonction lorsque le burger menu est cliqué
var burgerMenu = document.querySelector('.navbar-burger');
burgerMenu.addEventListener('click', toggleMenu);
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('nav-bar-links')[0]

var hideMain = document.getElementById("main");
var hideFooter = document.getElementById("footer");



toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')


} )


function openPage(pageUrl){
    window.open(pageUrl);
  }



/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
    //document.getElementById("main").style.marginLeft = "250px";
  }
  
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    //document.getElementById("main").style.marginLeft = "0";
}

var openBtn = document.querySelector('.openbtn');
var overlayCloseBtn = document.querySelector('.closebtn');

// Add event listener
openBtn.addEventListener("click", openNav);
overlayCloseBtn.addEventListener("click", closeNav);

// DATA OF STORIES

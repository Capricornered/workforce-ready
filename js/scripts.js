
// navigation scripts

let nav = document.getElementById("navs");
let hamburger = document.getElementById("hamburger");
hamburger.src = "images/hamburger.png";

hamburger.onclick = function() {
    if (nav.classList.contains("out")) {
        nav.classList.remove("out");
        hamburger.src = "images/hamburger.png"
    } else {
        nav.classList.add("out");
        hamburger.src = "images/x-out.png"
    }
}

let menuItems = document.getElementsByClassName("menu-item");

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].onclick = function() {
        nav.classList.remove("out");
        hamburger.src = "images/hamburger.png"
    }
}
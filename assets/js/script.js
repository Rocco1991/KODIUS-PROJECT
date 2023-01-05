/* JS FOR TOGGLE MENU */

var MenuItems = document.getElementById("MenuItams");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "Opx") {
        MenuItems.style.maxHeight == "200px";
    } else {
        MenuItems.style.maxHeight == "0px";
    }
}


/* JS FOR PRODUCT GALLERY*/
var ProductImg = documents.getElementById("ProductImg");
var Small = document.getElementById("small-img");

SmallImg[0].onclick = function() {
    ProductImg.src = SmallImg[0].src;
}

SmallImg[1].onclick = function() {
    ProductImg.src = SmallImg[1].src;
}

SmallImg[2].onclick = function() {
    ProductImg.src = SmallImg[2].src;
}

SmallImg[3].onclick = function() {
    ProductImg.src = SmallImg[3].src;
}


/* JS FOR TOGGLE FORM */

var LoginForm = document.getElementById(LoginForm);
var RegForm = document.getElementById(RegForm);
var Indicator = document.getElementById("Indicator");

function register() {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}

function login() {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}
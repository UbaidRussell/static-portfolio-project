let darkModeButton = document.getElementsByClassName("night-mode-button")[0];
let lightModeButton = document.getElementsByClassName("morning-mode-button")[0];
let buttons = document.querySelectorAll("button")
let body = document.getElementsByTagName("body")[0];
let links = document.getElementsByTagName("a");
let x;


 body.onload = function (){
    lightModeButton.style.visibility = "hidden";
     //Hides the dark mode button when the page is in dark mode
     if(body.style.backgroundColor === "black") {
        darkModeButton.style.visibility = "hidden"; 
    }
} 


darkModeButton.addEventListener("click", function (){
    darkModeButton.style.visibility = "hidden";
    lightModeButton.style.visibility = "visible";
    body.style.backgroundColor = "black";
    body.style.color = "white";
    links[0].style.color = "white";
    links[1].style.color = "white";
    links[2].style.color = "white";
    links[3].style.color = "white";
    links[4].style.color = "white";
});

lightModeButton.addEventListener("click", function (){
    lightModeButton.style.visibility = "hidden";
    darkModeButton.style.visibility = "visible"
    body.style.backgroundColor = "#f5f5f5";
    body.style.color = "black";
    links[0].style.color = "black";
    links[1].style.color = "black";
    links[2].style.color = "black";
    links[3].style.color = "black";
    links[4].style.color = "black";
});



function changelightMode() {
    window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

    if(scroll > 60){
        buttons.style.visibility = "hidden";      
    } else {
        buttons.style.visibility = "visible";
    }



    ///We left off here
    console.log(scroll);
    return scroll;
});
} 






console.log(changelightMode());
// Path: docs/main.js
    
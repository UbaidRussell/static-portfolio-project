let darkModeButton = document.getElementsByClassName("night-mode-button")[0];
let lightModeButton = document.getElementsByClassName("morning-mode-button")[0];
let body = document.getElementsByTagName("body")[0];
let links = document.getElementsByTagName("a");

body.onload = function (){
    lightModeButton.style.visibility = "hidden";
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
    darkModeButton.style.visibility = "visible";


    body.style.backgroundColor = "#f5f5f5";
    body.style.color = "black";
    links[0].style.color = "black";
    links[1].style.color = "black";
    links[2].style.color = "black";
    links[3].style.color = "black";
    links[4].style.color = "black";
});


/* function getScreenColor(){
    let color = body.style.backgroundColor;
    console.log(color.property);
}

getScreenColor();
 */


function getScrollLocation() {
    window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll > 60){
        darkModeButton.style.visibility = "hidden";
        lightModeButton.style.visibility = "hidden";
    } 
    console.log(scroll);
});
} 

console.log(getScrollLocation()); 

// Path: docs/main.js
    
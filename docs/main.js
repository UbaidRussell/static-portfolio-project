let darkModeButton = document.getElementsByClassName("night-mode-button")[0];
let lightModeButton = document.getElementsByClassName("morning-mode-button")[0];
let body = document.getElementsByTagName("body")[0];
let links = document.getElementsByTagName("a");

darkModeButton.addEventListener("click", function (){
    darkModeButton.style.display = "none";
    body.style.backgroundColor = "black";
    body.style.color = "white";
    links[0].style.color = "white";
    links[1].style.color = "white";
    links[2].style.color = "white";
    links[3].style.color = "white";
    links[4].style.color = "white";
    lightModeButton.style.visibility = "visible";
});

//lightModeButton.style.visibility = "visible";
    
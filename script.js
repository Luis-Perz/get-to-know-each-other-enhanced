// create light and dark mode functions
function lightMode () {
    var element = document.body; 
    element.className = "light-mode"
    document.getElementById("title1").style.color = "black"
    document.getElementById("title2").style.color = "black"
    document.getElementById("title3").style.color = "black"
    document.getElementById("title4").style.color = "black"
    document.getElementById("video").style.color = "black"
    document.getElementById("video2").style.color = "black"
}

function darkMode(){
    var element = document.body; 
    element.className = "dark-mode"
    document.getElementById("title1").style.color = "orange"
    document.getElementById("title2").style.color = "orange"
    document.getElementById("title3").style.color = "orange"
    document.getElementById("title4").style.color = "orange"
    document.getElementById("video").style.color = "red"
    document.getElementById("video2").style.color = "red"
}

//add function to light/dark buttons
document.getElementById("lightMode").addEventListener("click", () =>{
    lightMode();
});

document.getElementById("darkMode").addEventListener("click", () =>{
    darkMode();
});
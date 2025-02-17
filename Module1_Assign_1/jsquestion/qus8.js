
function qus8(){
    const imageElement = document.getElementById("imageQus8");

    if (imageElement.src.match("sun")){

        imageElement.src = "img/moon.gif";
    }else{
        imageElement.src = "img/sun.gif";
    }
}
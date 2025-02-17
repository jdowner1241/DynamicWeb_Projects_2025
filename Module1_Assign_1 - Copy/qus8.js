
function qus8(){
    const imageElement = document.getElementById("imageQus8");

    if (imageElement.src.match("simley")){

        imageElement.src = "images/mountain.jpg";
    }else{
        imageElement.src = "images/simley.gif";
    }
}
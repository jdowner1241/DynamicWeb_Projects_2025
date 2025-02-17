let toggle1 = false;

function qus5() {
    let result = document.getElementById("targetparagraph");


    if(toggle1 == false){
        result.style.color = "yellow";
        result.style.backgroundColor = "black";
        toggle1 = true;
    } else {
        result.style.color = "black";
        result.style.backgroundColor = "transparent";
        toggle1 = false;
   }

}
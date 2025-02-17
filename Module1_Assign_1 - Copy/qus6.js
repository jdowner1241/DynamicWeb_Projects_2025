let toggleQus6 = false;

function qus6(){

    let tutorialDivs = document.querySelectorAll(".tutorial");

    if(toggleQus6 == false){

        // add Color from the div
        tutorialDivs.forEach(div => {
            div.style.backgroundColor = "yellow";
        });
        
        // update toggle
        toggleQus6 = true;
        document.getElementById("btn1").innerHTML = "Reset background color for Div";
    } else {

        // add Color from the div
        tutorialDivs.forEach(div => {
            div.style.backgroundColor = "transparent";
        });

        // update toggle
        toggleQus6 = false;
        document.getElementById("btn1").innerHTML = "Change background color for Div";
    }

    
}

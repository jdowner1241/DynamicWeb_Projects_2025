let toggleQus10 = false;

function mouseOverHandlerQus10() {
    this.style.color = "red";
}

function mouseOutHandlerQus10() {
    this.style.color = "";
}


function qus10() {

    let paragraphList = document.getElementsByTagName("p");
    let button =  document.getElementById("bQus10");


    let items=document.querySelectorAll("p");

    if (toggleQus10 == false){
        //change button appearance 
        button.innerHTML = "Disable Color Change on Mouse Hover";
        toggleQus10 = true;

        // loop through the paragraphs and enable the hover style
        for(let i = 0; i < paragraphList.length; i++ ){
            paragraphList[i].addEventListener("mouseover", mouseOverHandlerQus10);
            paragraphList[i].addEventListener("mouseout", mouseOutHandlerQus10);
        }
    }else {
        //change button appearance 
        button.innerHTML = "Mouse hover Color Changer";
        toggleQus10 = false;

        // loop through the paragraphs and disable the hover style
        for(let j = 0; j < paragraphList.length; j++ ){
            paragraphList[j].removeEventListener("mouseover", mouseOverHandlerQus10);
            paragraphList[j].removeEventListener("mouseout", mouseOutHandlerQus10);
        }
    }

}
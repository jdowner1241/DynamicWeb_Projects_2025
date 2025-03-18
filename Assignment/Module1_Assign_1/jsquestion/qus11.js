

let toggleQus11 = false;

function mouseOverHandler() {
    this.style.color = "blue";
    this.style.fontWeight = "bold";
}

function mouseOutHandler() {
    this.style.color = "";
    this.style.fontWeight = "normal";
}


    let paragraphList = document.getElementsByTagName("p");
    let button =  document.getElementById("bQus11");

    if (toggleQus11 == false){
        //change button appearance 
        button.innerHTML = "Disable Color Change on Mouse Hover for Paragraph";
        toggleQus11 = true;

        // loop through the paragraphs and enable the hover style
        for(let i = 0; i < paragraphList.length; i++ ){
            paragraphList[i].addEventListener("mouseover", mouseOverHandler);
            paragraphList[i].addEventListener("mouseout", mouseOutHandler);
        }
    }else {
        //change button appearance 
        button.innerHTML = "Enable Color Change on Mouse Hover for Paragraph";
        toggleQus11 = false;

        // loop through the paragraphs and disable the hover style
        for(let j = 0; j < paragraphList.length; j++ ){
            paragraphList[j].removeEventListener("mouseover", mouseOverHandler);
            paragraphList[j].removeEventListener("mouseout", mouseOutHandler);
        }
    }


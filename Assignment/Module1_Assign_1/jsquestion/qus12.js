let toggleQus12 = false;

function qus12() {
    // Get the paragraph element by its ID
    let paragraph = document.getElementById("demoQus12");
    let button = document.getElementById("bQus12"); 

    if (toggleQus12 == false){
        //toggle button text and update bool
        button.innerHTML = "Restore Paragraph";
        toggleQus12 = true;

        paragraph.innerHTML = ""; // Remove the paragraph 
    }else {

        // toggle button text and update bool
        button.innerHTML = "Remove Paragraph";
        toggleQus12 = false;

        // Restore the paragraph 
        paragraph.innerHTML = "Click the button, and this paragraph will be removed from the DOM." ;
    }   
}
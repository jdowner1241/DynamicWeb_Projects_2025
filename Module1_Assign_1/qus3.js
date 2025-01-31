let toggle = false;

function qus3() {
    let p = document.getElementsByTagName("p");
    let textArea = document.getElementsByTagName("textarea");

    if(toggle == false){
        for (let i = 0; i < p.length; i++ ) {
            p[i].style.border = "3px solid red";
        }
    
        for (let i = 0; i < textArea.length; i++ ) {
            textArea[i].style.border = "3px solid red";
        }
        toggle = true;
    } else {
        for (let i = 0; i < p.length; i++ ) {
            p[i].style.border = "none";
        }
    
        for (let i = 0; i < textArea.length; i++ ) {
            textArea[i].style.border = "none";
        }
        toggle = false;
    }
}

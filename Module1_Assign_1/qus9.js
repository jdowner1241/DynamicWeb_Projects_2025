function qus9() {
    let display = document.getElementById("demoQus9");

    // Get all elements that have a style attribute
    let items = document.querySelectorAll("[style]");

    items.forEach((item) => { 
        let showAttribute = item.getAttribute("style");
        let showStyle = item.style.cssText;
        let showItem = "Element : " + item.tagName + "<br>" + " Styles : " + showAttribute;
        display.innerHTML += showItem + "<br> <br>";
    });


}

function qus9Clear() {
    let display = document.getElementById("demoQus9");

    display.innerHTML = "";
}

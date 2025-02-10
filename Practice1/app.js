function toggleLightSwitch() {
    const lightBulb = document.getElementById("lightBulb");

    if (lightBulb.src.match("bulboff")){
        lightBulb.src = "img/pic_bulbon.gif";
    }else {
        lightBulb.src = "img/pic_bulboff.gif";
    }

}


// Keyboard Event
document.getElementById("keyInput").addEventListener("keydown", (event) => {
    document.getElementById("keyDisplay").textContent = "You pressed : " + event.key;
})

// Animate Event 
document.getElementById("bAnimateList").addEventListener("click", () => {
    let items = document.querySelectorAll("#animateList li");
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.transform = "scale(1,2)";
            item.style.transition = "transform 0.5s";
        }, index * 300);
        setTimeout(() => {
            item.style.transform = "scale(1)";
        }, index * 300 + 500);
    });
});
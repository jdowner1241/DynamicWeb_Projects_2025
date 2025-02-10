function qus7(){
        
    let optionsElement = document.getElementById("optionsQus7").value;
    let messageElement = document.getElementById("messageQus7");
    let message = "";

    if (!optionsElement || !messageElement) {
        console.error("Required elements are missing from the DOM.");
        return;
    }
    

    switch (optionsElement) {
        case "":
            message = "Please select an option.";
            break;
        case "1":
            message = "You selected Option 1";
            break;
        case "2":
            message = "You selected Option 2";
            break;
        case "3":
            message = "You selected Option 3";
            break;
        default:
            message = "Please select an option.";
    }
    messageElement.textContent = message;

}
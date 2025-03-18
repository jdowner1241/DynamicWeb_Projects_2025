// caching our elements >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const btnChangeText = document.getElementById("changeText");
const btnChangeStyle = document.getElementById("changeStyle");
const btnAddElement = document.getElementById("addElement");
 
// update text event >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
btnChangeText.addEventListener("click", () => {
  document.getElementById("para1").textContent = `Text has been changed!`;
});
 
// update style >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
btnChangeStyle.addEventListener("click", () => {
  document.getElementById("para1").style.color = "#ff0000";
  document.getElementById("para1").style.fontSize = "22px";
});
 
// add element >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
btnAddElement.addEventListener("click", () => {
  let newPara = document.createElement("p");
  newPara.textContent = "New paragraph added dynamically!";
  document.getElementById("container").appendChild(newPara).style.color = "#b4b4b4";
  document.getElementById("container").style.fontStyle = "italic";
});


function toggleLightSwitch() {
    const lightBulb = document.getElementById("lightBulb");

    if (lightBulb.src.match("bulboff")){
        lightBulb.src = "img/pic_bulbon.gif";
    }else {
        lightBulb.src = "img/pic_bulboff.gif";
    }

}

// mouse hover event >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const hoverBox = document.getElementById("hoverBox");
 
hoverBox.addEventListener("mouseover", () => {
  hoverBox.classList.add("hovered");
});
 
hoverBox.addEventListener("mouseleave", () => {
  hoverBox.classList.remove("hovered");
});


// Keyboard Event >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
document.getElementById("keyInput").addEventListener("keydown", (event) => {
    document.getElementById("keyDisplay").textContent = "You pressed : " + event.key;
})

// Animate Event >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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

// Form Validation >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Save form in a variable
const userFormBtn = document.getElementById("submitForm");

//Attach event listener
userFormBtn.addEventListener("click", () => {
    const username = getElementById("username").value.trim();
    const email = getElementById("email").value.trim();
    const phone = getElementById("phone").value.trim();
    const dob = getElementById("dob").value.trim();
    const preferences = document.getElementById("preferences").value;
    const interests = Array.from(document.querySelectorAll("input[name='interest']:checked"))
                    .map(checkbox => checked.value)
                    .join(", ");

    // Clear previous errors
    document.querySelectorAll(".error")
            .forEach(error => error.textContent = "");
    
    // validation rules
    let isValid = true;

    // username validation 
    if (username === ""){
        document.getElementById("usernameError")
            .textContent = "Username is required.";
        isValid = false;
    }

    // email validation
    let emailRegexPattern = /^[a-zA-Z0-9 ._ %+-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,}$/;
    
    if (!emailRegexPattern.test(email)) {
            document.getElementById("emailError").textContent = "Enter a valid email address.";
        isValid = false;
    }

    // phone number validation
    let phoneRegexPattern = /^[0-9]{10,15}$/;

    if (!phoneRegexPattern.test(phone)){
            document.getElementById("phoneError").textContent = "Enter a valid phone number (10 - 15) digits";
        isValid = false;
    }

    // returns the form to the user without submitting the data
    if (!isValid) {
        return;
    }

    // output form value
    document.getElementById("formOutput").innerHTML 
    = `Hello ${username} <br> ${email} <br> ${phone} <br> ${dob} <br>
    Your interests are : ${interests}`;

});

// toggle enable/disable form fields
let radioBtn =  document.querySelectorAll("input[name='toggle']");
 
radioBtn.forEach(radio => {
  radio.addEventListener("change", () => {
    let radioTogglePreferences = document.getElementById("preferences");
    let radiotoggleInterest = document.getElementById("interestsField");

    radioTogglePreferences.disabled == true ? radioTogglePreferences.disabled = false : radioTogglePreferences.disabled = true;
    radiotoggleInterest.disabled == true ? radiotoggleInterest.disabled = false : radiotoggleInterest.disabled = true;
    // if (radioToggle.disabled == true) {
    //   // document.getElementById("preferences").disabled = true;
    //   radioToggle.disabled = false;
    // } else {
    //   radioToggle.disabled = true;
    // }
  });
});
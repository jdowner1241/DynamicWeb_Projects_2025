


document.querySelectorAll('input[name="payment"]').forEach(radio => {
    radio.addEventListener('change', function() {
        let isPayPal = document.getElementById('paypal').checked;
        document.getElementById('cardNumber').disabled = isPayPal;
        document.getElementById('expiryDate').disabled = isPayPal;
        document.getElementById('cardNumber').classList.toggle('disabled', isPayPal);
        document.getElementById('expiryDate').classList.toggle('disabled', isPayPal);
    });
});

document.getElementById('sameAsBilling').addEventListener('change', function() {
    document.getElementById('shippingFields').classList.toggle('hidden', this.checked);
});

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

let fname=document.getElementById('firstName').value;
let lname=document.getElementById('lastName').value;
let email=document.getElementById('email').value;

if(fname==""){
alert('Please Enter Firstname !');
document.getElementById('firstNameError').innerHTML='Firstname is required';
document.getElementById('firstName').focus();
exit();
}
else{
    document.getElementById('firstNameError').innerHTML='';

}

if(lname==""){
    alert('Please Enter Lastname !');
    document.getElementById('lastNameError').innerHTML='Lastname is required';
    document.getElementById('lastName').focus();
    exit();
    }
    else{
        document.getElementById('lastNameError').innerHTML='';

    }


    if(email==""){
        alert('Please Enter Email Address !');
        document.getElementById('emailError').innerHTML='Email is required';
        document.getElementById('email').focus();
        exit();
        }
        else{
            document.getElementById('emailError').innerHTML='';
    
        }


    const validateField = (id, errorId, message) => {
        let value = document.getElementById(id).value.trim();
        if (!value) {
            document.getElementById(errorId).textContent = message;
            valid = false;
           
        } else {
            document.getElementById(errorId).textContent = '';
        }
    };

   // validateField('firstName', 'firstNameError', 'First Name is required');
   // validateField('lastName', 'lastNameError', 'Last Name is required');
   // validateField('address', 'addressError', 'Address is required');

    if (document.getElementById('visa').checked || document.getElementById('mastercard').checked) {
        validateField('cardNumber', 'cardNumberError', 'Card number is required');
        validateField('expiryDate', 'expiryDateError', 'Expiration date is required');
    }

    if (valid) alert('Form submitted successfully!');
});

const xhr = new XMLHttpRequest();
    xhr.open('GET', './json/Country.json', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
          var arry = JSON.stringify(data, null, 2);

          let countryObj = JSON.parse(xhr.responseText);

        //  alert(data.length);
         let dropDown = document.getElementById("countrySelect");
          for (let i = 0; i < data.length; i++ ) {
              const optionItem = document.createElement("option");
              optionItem.textContent =  data[i].name;
              dropDown.appendChild(optionItem);
              //dropDown.append(data[i].name);
          }


         




//country(data);
          //alert(arry);
          //console.log(arry);
          //console.log(data);
          //console.log(data[1].name);
       
   // let dropDown = document.getElementById("countrySelect");

  
          /*
/*let obj = eval('(' + jsonStr + ')');

let res = [];

for (let i in obj)
    res.push(obj[i]);

console.log(res);
*/

            //container.innerHTML = JSON.stringify(data, null, 2);
        } else {
            console.error('Error fetching JSON:', xhr.statusText);
        }
    };
    xhr.onerror = function() {
        console.error('Request error...');
    };

xhr.send();

function country(){

    alert(data.length);
    let dropDown = document.getElementById("countrySelect");
    for (let i = 0; i < data.length; i++ ) {
        const optionItem = document.createElement("option");
        optionItem.textContent =  data[i].name;
        dropDown.appendChild(optionItem);
        //dropDown.append(data[i].name);
    }
    

}  

let timeout;

function myFunction() {

  timeout = setTimeout(country1, 3000);
}



function country1(){

    const xhr = new XMLHttpRequest();
    xhr.open('GET', './json/Country.json', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
          var arry = JSON.stringify(data, null, 2);

          let countryObj = JSON.parse(xhr.responseText);

         
         let dropDown = document.getElementById("countrySelect");
          for (let i = 0; i < data.length; i++ ) {
              const optionItem = document.createElement("option");
              optionItem.textContent =  data[i].name;
              dropDown.appendChild(optionItem);
             // alert(data[i].name);
          }


     





//country(data);
          //alert(arry);
          //console.log(arry);
          //console.log(data);
          //console.log(data[1].name);
       
   // let dropDown = document.getElementById("countrySelect");

  
          /*
/*let obj = eval('(' + jsonStr + ')');

let res = [];

for (let i in obj)
    res.push(obj[i]);

console.log(res);
*/

            //container.innerHTML = JSON.stringify(data, null, 2);
        } else {
            console.error('Error fetching JSON:', xhr.statusText);
        }
    };
    xhr.onerror = function() {
        console.error('Request error...');
    };

xhr.send();

}  

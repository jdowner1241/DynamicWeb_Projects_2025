function info2(){
    //alert('sas');
    
var address= document.getElementById('ship-address').value;
var address2= document.getElementById('ship-address2').value;

if(address==""){
    alert("Please Enter Origin Address");
    exit();
}
if(address2==""){
    alert("Please Enter Destination Address");
    exit();
}

var city = document.getElementById('locality').value;
var state = document.getElementById('state').value;

var city2 = document.getElementById('locality2').value;
var state2 = document.getElementById('state2').value;

var fulladdress=address+', '+city;
var fulladdress2=address2+', '+city2;

//alert(fulladdress);
var loc="https://www.google.com/maps/embed/v1/directions?key=AIzaSyCm0jrSXqBAEVvS6EGS5koM863cspmHuUI&origin="+fulladdress+"&destination="+fulladdress2+"&avoid=tolls|highways";
              
document.getElementById('newmap').src = loc;

$('#loginModal').modal('hide');

}		

function info(){
    //alert('sas');
    
    var address= document.getElementById('ship-address').value;
    if(address==""){
        alert("Please Enter Address");
        exit();
    }

    var city = document.getElementById('locality').value;
    var state = document.getElementById('state').value;

    var fulladdress=address+', '+city;
    //	alert(fulladdress);
    var loc="https://www.google.com/maps/embed/v1/place?key=AIzaSyCm0jrSXqBAEVvS6EGS5koM863cspmHuUI&q="+fulladdress;
    
    document.getElementById('newmap').src = loc;
}	

function getLocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function success(position) {
var x = document.getElementById("demo");

// alert(position.coords.longitude);

x.innerHTML = "Latitude: " + position.coords.latitude +"<br>Longitude: " + position.coords.longitude;

let lat=position.coords.latitude;
let long=position.coords.longitude

var address= document.getElementById('ship-address').value;

var city = document.getElementById('locality').value;
var state = document.getElementById('state').value;

var fulladdress=address+', '+city;

var loc="https://www.google.com/maps/embed/v1/place?key=AIzaSyDkKVNlOFlMXXsjz5gH-E2REYMVw5nP210&q="+lat+","+long;
//var loc="https://www.google.com/maps/embed/v1/directions?key=AIzaSyCm0jrSXqBAEVvS6EGS5koM863cspmHuUI&origin="+lat+","+long+"&destination="+fulladdress+"&avoid=tolls|highways";
                  
document.getElementById('newmap').src = loc;

// alert(x);
//var loc="https://www.google.com/maps/embed/v1/place?key=AIzaSyDkKVNlOFlMXXsjz5gH-E2REYMVw5nP210&q="+lat.long;                 
//  document.getElementById('newmap').src = loc;


// initialize(lat,long);
initMap(lat,long)

}



function initialize(lat,long){

    var myLatlng = new google.maps.LatLng(lat,long);
    var myOptions = {
        zoom: 4,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    map = new google.maps.Map(document.getElementById("newmap"), myOptions);
    var marker = new google.maps.Marker({
        position: myLatlng, 
        map: map,
        title:"Fast marker"
    });
} 


function error() {
    alert("Sorry, no position available.");
}


function showModal(){
    var address= document.getElementById('ship-address2').value="";
    var city = document.getElementById('locality2').value="";
    var state = document.getElementById('state2').value="";
    $('#loginModal').modal('show');
    
    $('#loginModal').on('shown', function(){
        alert('The modal is shown');
    });
    
    // Feature request:
    
    $('#loginModal').on('ajax:show', function(){
        alert('The ajax is about to be send');
    });
    
    $('#loginModal').on('ajax:shown', function(){
        alert('The ajax call finished and contents are loaded');
    });
    
}
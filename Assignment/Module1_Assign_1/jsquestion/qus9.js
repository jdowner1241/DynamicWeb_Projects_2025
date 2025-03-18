
function change() {
    document.getElementById("demo").innerHTML="";
    
    let display=document.getElementById("demo");
//Get all elements that have a style attribute

const para = document.querySelector("style");
//var x = document.getElementsByTagName("STYLE");



//alert(x);

let items=document.querySelectorAll("style");

//console.log(x);

//[0].childNodes[0].textContent
items.forEach((item, index)=>{ 


// display.innerHTML= items[index];
//console.log(item["innerText"]);
showStyle=item["innerText"];
console.log(showStyle);
display.append(showStyle);
});
}
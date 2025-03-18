let product = '{"name": "headphones", "brand": "beats", "price": "200"}';

let object = JSON.parse(product);

console.log(typeof product);

console.log(object.name);
console.log(object["brand"]);

document.querySelector("p").innerHTML = "Item name: " + object.name;

let customer = {
    name: "Forrest Gump",
    age: 35, 
    isMember: false, 
    cardsonfile: ["visa", "amex", "mastercard"]
};

console.log(typeof customer);

let customerString = JSON.stringify(customer);

console.log(typeof customerString);

//localStorage.setItem("Manager", "Janet Reid");

localStorage.clear();
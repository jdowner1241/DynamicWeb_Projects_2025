let toggleQus13 = false;

function qus13() {

    const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
    const lastFruit = fruits[fruits.length - 1];
    let resultQus13 = document.getElementById("demoQus13");
    let button = document.getElementById("bQus13");

    if (toggleQus13 == false){
        button.innerHTML = "Remove Fruit to Paragraph."
        toggleQus13 = true;

        resultQus13.innerHTML = `The last fruit is: ${lastFruit}`;
    }else{

        button.innerHTML = "Add Fruit to Paragraph. "
        toggleQus13 = false;

        resultQus13.innerHTML = "";
    }
    
    
}
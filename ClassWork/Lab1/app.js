function IsNullOrEmpty(value){
    if (value == null || value === "") {
        return true;
    } else if (typeof value === 'object' && value.value !== undefined) {
        return value.value == null || value.value === "";
    } else {
        return false;
    }
} 

function Calculate(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    if (IsNullOrEmpty(num1) || IsNullOrEmpty(num2)) 
    {
        alert("Value empty or null. Please enter a value and try again");
        return;
    }

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let operation = document.getElementById('operators').value;
    let result = document.getElementById('result');

    if (!IsNullOrEmpty(num1) || !IsNullOrEmpty(num2)) {
        
        switch (operation) {
            case 'add':
                result.value = num1 + num2;
                console.log("Sum: " + (num1 + num2));
                break;
            case 'subtract':
                result.value = num1 - num2;
                console.log("Difference: " + (num1 - num2));
                break;
            case 'multiple':
                result.value = num1 * num2;
                console.log("Product: " + (num1 * num2));
                break;
            case 'divide':
                result.value = num1 / num2;
                console.log("Quotient: " + (num1 / num2));
                break;
            default:
                console.log("Invalid Operation");
        }
    }else
    {
        alert("Value empty or null. Please enter a value and try again");
    }
}

function DisplayName() {
    let name = document.getElementById('name').value;
    
    if (!IsNullOrEmpty(name)) {
        alert(`Your ${name} is learning JavaScript!`);
    }
    else
    {
        alert("Name is empty or null. Please enter a name and try again");
    }
    
}

function CheckValue() {
        
    let num1 = document.getElementById('value1').value;
    let num2 = document.getElementById('value2').value;

    if (IsNullOrEmpty(num1)) {
        alert("Value empty or null. Please enter a value for at least value 1 and try again");
        return;
    } else if (IsNullOrEmpty(num1) && IsNullOrEmpty(num2)){
        alert("Value empty or null. Please enter any value and try again");
        return;
    }

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    const setnum = 10;
    result = document.getElementById('valueResult');

    if (IsNullOrEmpty(num1) || IsNullOrEmpty(num2)){
        if (num1 > num2) {
            result.value = `${num1} is greater than ${num2}`;
        }
        else if (num1 < num2){
            result.value = `${num1} is less than ${num2}`;
        }else {
            result.value = `${num1} is equal to ${num2}`;
        }
    }else {
        result.value = ("Missing value");
    }
        
        if (num1 > setnum) {
            console.log(`${num1} is greater then ${setnum}`);
        } 
        else {
            console.log(`${num1} is less than or equal to ${setnum}`);
        }
}

function IterateNumbers() {
    let start = document.getElementById('start').value;
    let end = document.getElementById('end').value;
    let result = document.getElementById('iterateResult');

    if (IsNullOrEmpty(start) || IsNullOrEmpty(end)) {
        alert("Value empty or null. Please enter a value and try again");
        return;
    }

    start = parseInt(start);
    end = parseInt(end);

    for (let i = start; i <= end; i++) {
        alert(i);
        result.innerHTML += i + "\n";
    }
}

let fruits = [];

function DisplayFruits() {
    let result = document.getElementById('fruitResult');

    if (fruits.length > 0) {
        result.innerHTML = "";
        for (let i = 0; i < fruits.length; i++) { 
            result.innerHTML += i+1 + " : " + fruits[i] + "\n";
        }
    } else {
        result.innerHTML = "No fruits added yet";
    }
}

function AddFruit() {
    let newFruit = document.getElementById('fruit').value;

    if (IsNullOrEmpty(newFruit)) {
        alert("Value empty or null. Please enter a value and try again");
        return;
    }

    fruits.push(newFruit);
    DisplayFruits();
}

function RemoveFruit() {
let index = document.getElementById('removeFruitIndex').value;

    if (IsNullOrEmpty(index)) {
        alert("Value empty or null. Please enter a value and try again");
        return;
    }

    index = parseInt(index);
    index = index - 1;

    if (index < 0 || index >= fruits.length) {
        alert("Invalid index. Please enter a valid index and try again");
        return;
    }

    fruits.splice(index, 1);
    DisplayFruits();
}

function ClearFruit() {
    fruits = [];
    DisplayFruits();
}

function UsePresetFruit() 
{
    ClearFruit();
    fruits = ["apple", "banana", "orange"];
    DisplayFruits();

    console.log(fruits[1]);
}

function SelectFruit() {
    let index = document.getElementById('selectFruitIndex').value;
    let result = document.getElementById('selectedFruit');

    if (IsNullOrEmpty(index)) {
        alert("Value empty or null. Please enter a value and try again");
        return;
    }

    index = parseInt(index);
    index = index - 1;

    if (index < 0 || index >= fruits.length) {
        alert("Invalid index. Please enter a valid index and try again");
        return;
    }

    result.value = fruits[index];

}

numberList = [];

function DisplayNumbers() {
    let result = document.getElementById('arrayNumberListResult');

    if (numberList.length > 0) {
        result.innerHTML = "";
        for (let i = 0; i < numberList.length; i++) { 
            result.innerHTML += numberList[i] + "\n";
        }
    } else {
        result.innerHTML = "No numbers added yet";
    }
}

function AddNumberToArray() {
    let newNumberList = [];
    let tempNumberList = document.getElementById('arrayNumberList').value;

    if (IsNullOrEmpty(tempNumberList)) {
        alert("Value empty or null. Please enter a value and try again");
        return;
    }

    newNumberList = tempNumberList.split(',');
    for (let i = 0 ; i < newNumberList.length; i++) {
        numberList.push(parseInt(newNumberList[i]));
    }
    DisplayNumbers();
}

function ClearNumberArray(){
    numberList = [];
    DisplayNumbers();
}

function UsePresetNumbers() {
    ClearNumberArray();
    numberList = [1, 3, 5, 7];
    console.log(numberList);
    DisplayNumbers();
}

function Greet() {
    let name = document.getElementById('greetingName').value;

    if (IsNullOrEmpty(name)) {
        alert("Value empty or null. Please enter a value and try again");
        return;
    }

    alert(`Hello ${name}! Welcome to "Dynamic Websites & Applications!"`);
    console.log(`Hello ${name}! Welcome to "Dynamic Websites & Applications!"`);
}

let initialCalToggle = true;

function ClearContinuesCalResults() {
    document.getElementById('x').value = "";
    document.getElementById('x').removeAttribute('readonly');
    document.getElementById('y').value = "";
    document.getElementById('continuesCalResults').innerHTML = "";
    document.getElementById('calButton').textContent = "Initial Calculate";
    document.getElementById('y').setAttribute('placeholder', 'Enter second number');
    initialCalToggle = true;
}

function ContinuesCalculate() {
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;
    let continuesResultValue = 0;
    let continuesOperators = document.getElementById('continuesOperators').value;
    let result = document.getElementById('continuesCalResults');
    let calButton = document.getElementById('calButton');

    if (IsNullOrEmpty(x) || IsNullOrEmpty(y)) {
        alert("Value empty or null. Please enter a value and try again");
        return;
    }

    x = parseInt(x);
    y = parseInt(y);

    if (initialCalToggle) {

        // Clear the result area
        continuesResultValue = 0;
        result.innerHTML = "";

        // Perform the initial calculation
        switch (continuesOperators) {
            case 'add':
                continuesResultValue = x + y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML = `${x} + ${y} = ${continuesResultValue}`;
                console.log(`${x} + ${y} = ${continuesResultValue}`);
                break;
            case 'subtract':
                continuesResultValue = x - y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML = `${x} - ${y} = ${continuesResultValue}`;
                console.log(`${x} - ${y} = ${continuesResultValue}`);
                break;
            case 'multiple':
                continuesResultValue = x * y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML = `${x} x ${y} = ${continuesResultValue}`;
                console.log(`${x} * ${y} = ${continuesResultValue}`);
                break;
            case 'divide':
                continuesResultValue = x / y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML = `${x} / ${y} = ${continuesResultValue}`;
                console.log(`${x} / ${y} = ${continuesResultValue}`);
                break;
            case 'equal':
                continuesResultValue = y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML = `x = ${x} and y = ${y}, then x = y : ${continuesResultValue}`;
                console.log(`x = ${x} and y = ${y}, then x = y : ${continuesResultValue}`);
                break;
            case 'remainder':
                continuesResultValue = x % y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML = `${x} % ${y} = ${continuesResultValue}`;
                console.log(`${x} % ${y} = ${continuesResultValue}`);
                break;
            case 'leftShift':
                continuesResultValue = x << y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML = `${x} << ${y} = ${continuesResultValue}`;
                console.log(`${x} << ${y} = ${continuesResultValue}`);
                break;
            case 'rightShift':
                continuesResultValue = x >> y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML = `${x} >> ${y} = ${continuesResultValue}`;
                console.log(`${x} >> ${y} = ${continuesResultValue}`);
                break;
            case 'zeroFillRightShift':
                continuesResultValue = x >>> y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML = `${x} >>> ${y} = ${continuesResultValue}`;
                console.log(`${x} >>> ${y} = ${continuesResultValue}`);
                break;
            case 'bitwiseAnd':
                continuesResultValue = x & y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML = `${x} & ${y} = ${continuesResultValue}`;
                console.log(`${x} & ${y} = ${continuesResultValue}`);
                break;
            case 'bitwiseOr':
                continuesResultValue = x | y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML = `${x} | ${y} = ${continuesResultValue}`;
                console.log(`${x} | ${y} = ${continuesResultValue}`);
                break;
            case 'bitwiseXor':
                continuesResultValue = x ^ y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML = `${x} ^ ${y} = ${continuesResultValue}`;
                console.log(`${x} ^ ${y} = ${continuesResultValue}`);
                break;
            case 'power':   
                continuesResultValue = x ** y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML = `${x} ** ${y} = ${continuesResultValue}`;
                console.log(`${x} ^ ${y} = ${Math.pow(continuesResultValue)}`);
                break;
            default:
                console.log("Invalid Operation");
        }

        // Set the result value to the first input field and clear the second input field
        document.getElementById('x').setAttribute('readonly', true);
        document.getElementById('y').value = "";
        document.getElementById('y').setAttribute('placeholder', 'Enter a new number');
        document.getElementById('x').value = continuesResultValue;
        
        // Change the button text to "Continue Calculation"
        calButton.textContent = "Continue Calculation";
        initialCalToggle = false; // Set the initial toggle to false
    } else {
        // Perform the continues calculation
        switch (continuesOperators) {
            case 'add':
                continuesResultValue = x + y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML += "<br>";
                result.innerHTML += `${x} + ${y} = ${continuesResultValue}`;
                console.log(`\n${x} + ${y} = ${continuesResultValue}`);
                break;
            case 'subtract':
                continuesResultValue = x - y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML += "<br>";
                result.innerHTML += `${x} - ${y} = ${continuesResultValue}`;
                console.log(`\n${x} - ${y} = ${continuesResultValue}`);
                break;
            case 'multiple':
                continuesResultValue = x * y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML += "<br>";
                result.innerHTML += `${x} x ${y} = ${continuesResultValue}`;
                console.log(`\n${x} * ${y} = ${continuesResultValue}`);
                break;
            case 'divide':
                continuesResultValue = x / y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML += "<br>";
                result.innerHTML += `${x} / ${y} = ${continuesResultValue}`;
                console.log(`\n${x} / ${y} = ${continuesResultValue}`);
                break;
            case 'equal':
                continuesResultValue = y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML += "<br>";
                result.innerHTML += `x = ${x} and y = ${y}, then x = y : ${continuesResultValue}`;
                console.log(`\nx = ${x} and y = ${y}, then x = y : ${continuesResultValue}`);
                break;
            case 'remainder':
                continuesResultValue = x % y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML += "<br>";
                result.innerHTML += `${x} % ${y} = ${continuesResultValue}`;
                console.log(`\n${x} % ${y} = ${continuesResultValue}`);
                break;
            case 'leftShift':
                continuesResultValue = x << y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML += "<br>";
                result.innerHTML += `${x} << ${y} = ${continuesResultValue}`;
                console.log(`\n${x} << ${y} = ${continuesResultValue}`);
                break;
            case 'rightShift':
                continuesResultValue = x >> y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML += "<br>";
                result.innerHTML += `${x} >> ${y} = ${continuesResultValue}`;
                console.log(`\n${x} >> ${y} = ${continuesResultValue}`);
                break;
            case 'zeroFillRightShift':
                continuesResultValue = x >>> y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML += "<br>";
                result.innerHTML += `${x} >>> ${y} = ${continuesResultValue}`;
                console.log(`\n${x} >>> ${y} = ${continuesResultValue}`);
                break;
            case 'bitwiseAnd':
                continuesResultValue = x & y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML += "<br>";
                result.innerHTML += `${x} & ${y} = ${continuesResultValue}`;
                console.log(`\n${x} & ${y} = ${continuesResultValue}`);
                break;
            case 'bitwiseOr':
                continuesResultValue = x | y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML += "<br>";
                result.innerHTML += `${x} | ${y} = ${continuesResultValue}`;
                console.log(`\n${x} | ${y} = ${continuesResultValue}`);
                break;
            case 'bitwiseXor':
                continuesResultValue = x ^ y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML += "<br>";
                result.innerHTML += `${x} ^ ${y} = ${continuesResultValue}`;
                console.log(`\n${x} ^ ${y} = ${continuesResultValue}`);
                break;
            case 'power':   
                continuesResultValue = x ** y;
                continuesResultValue = parseInt(continuesResultValue);
                result.innerHTML += "<br>";
                result.innerHTML += `${x} ** ${y} = ${continuesResultValue}`;
                console.log(`\n${x} ** ${y} = ${continuesResultValue}`);
                break;
            default:
                console.log("Invalid Operation");
        }

        document.getElementById('y').value = "";
        document.getElementById('y').setAttribute('placeholder', 'Enter a new number');
        document.getElementById('x').value = continuesResultValue;
    }
}
function qus1() {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;

    x = parseInt(x);
    y = parseInt(y);

    let sum = x + y;
    sum = parseInt(sum);

    let result = document.getElementById("ques1Result");
    result.innerHTML = `Result : ${sum}`; 
}


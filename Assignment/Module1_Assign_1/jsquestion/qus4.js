function qus4() {

    let newText = document.getElementById("newtext"),value;
    let result = document.getElementById("qus4Result");


    //result.append(newText.innerHTML);
    result.innerHTML += ` <br> ${newText.value}`;
    document.getElementById("newtext").value="";
}

function qus4_reset() {
    let result = document.getElementById("qus4Result");
    result.innerHTML = 'This is the initial paragraph. Append your text below; ';
}
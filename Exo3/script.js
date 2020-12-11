let form = document.getElementById("form");

let result = document.getElementById("result");

form.addEventListener("submit", e => {
    let number = Number(document.getElementById("numb").value);
    e.preventDefault();
    if(number>20){
        result.innerText = "Plus petit !";
    }
    else if(number<10){
        result.innerText = "Plus grand !";
    } else {
        result.innerText = "Bien joué !";
    }
})
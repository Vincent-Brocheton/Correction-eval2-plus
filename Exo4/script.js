let form = document.getElementById("form");

let result = document.getElementById("result");

form.addEventListener("submit", e => {
    let number = Number(document.getElementById("numb").value);
    e.preventDefault();
    let fact = 1;
    for(let i=1; i<=number; i++){
        fact = fact*i;
    }
    result.innerHTML = "La factorielle de "+ number+ " est " + fact;
})
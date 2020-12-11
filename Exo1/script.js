let form = document.getElementById("form");

let result = document.getElementById("result");

form.addEventListener("submit", e => {
    e.preventDefault();
    let LastName = document.getElementById("LastName").value;
    let FirstName = document.getElementById("FirstName").value;
    let age = document.getElementById("age").value;
    result.innerHTML = "Bonjour je m'appelle " + FirstName + " " + LastName + " et j'ai " + age + " ans.";
})
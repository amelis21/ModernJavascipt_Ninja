const form = document.querySelector("form");

//const username = document.querySelector("#username");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(form.username.value);
})
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){
    event.preventDefault();
    console.log(tomato);
}

loginForm.addEventListener("submit", onLoginSubmit);
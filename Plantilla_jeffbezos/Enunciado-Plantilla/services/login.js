//funciones de login

//se importan las url
import { get } from "../services/userService.js";
import { URL_USERS } from "./routes.js";

//se llaman las constantes del login
const formLogin = document.querySelector(".formLogin")
const emailInput = document.querySelector("#loginEmail")
const passwordInput = document.querySelector("#loginPassword")

//se agrega evento a submit de login
formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value;
    validation(email)
    const password = passwordInput.value;
    validation(password)
})
//Validación de las credenciales de usuario
async function validation(email){
    const data = await get(`${URL_USERS}?email=${email}`);
    
    if(data.length == 0){
        alert("Credenciales inválidas");
        return;
    }

    if (data[0]["password"] != passwordInput.value){
        alert("Credenciales inválidas");
        return;
    }

    localStorage.setItem("user", JSON.stringify(data[0]["name"]));
    window.location.href = "../login.html";
       
}




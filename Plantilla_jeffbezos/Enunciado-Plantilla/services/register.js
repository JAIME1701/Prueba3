//validación de credenciales
function insert(){
    if(empty(emailInput.value) || !isPassword(passwordInput.value)){
        return;
    }

    const data = {
        email: email,
        date: date,
        password:  password,
    }
    
}
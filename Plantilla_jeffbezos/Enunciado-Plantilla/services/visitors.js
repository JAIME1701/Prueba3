import { get } from "../services/userService.js";
import { URL_USERS } from "./routes.js";


//se llaman las constantes del visitante

const nombre = document.querySelector(".nombre")
const place = document.querySelector(".place")
const email = document.querySelector(".email")
const booking = document.querySelector(".booking")
const regreso = document.querySelector(".regreso")

document.addEventListener("DOMContentLoaded", paintUsers);

async function paintUsers() {

    //Se almacena información sensible en local Storage
    const visitor = [
        {
            id: 1,
            name: "Victor",
            email: "victor@example.com",
            dateBirth: "2000-8-6",
            password: "dawsada",
        },
        {
          id: 2,
          name: "Juana",
          email: "juana@example.com",
          dateBirth: "2005-2-11",
          password: "dhfghfg",
      },
      {
        id: 3,
        name: "Daniela",
        email: "daniela@example.com",
        dateBirth: "1999-4-6",
        password: "dfgdfwe",
    },
    ]
}
    
const visitors = await get(URL_USERS);
  
    visitors.forEach((visitor) => {
      alert(nombre+ "ha realizado una reserva a "+place+"el día "+booking+" y regresa el día "+regreso)
    });
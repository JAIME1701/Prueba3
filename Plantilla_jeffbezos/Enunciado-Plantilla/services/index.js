//Se importa el host
import { URL_USERS } from "../services/routes.js";
import { get, post, deleteById, putById } from "../services/userService.js";

const nameInput = document.getElementById("floatingName");
const vueloInput = document.getElementById("vuelo");
const form = document.querySelector("form");
const modalTitle = document.querySelector(".modal-title");

//Forma buscando desde el pader
const tableUser = document.querySelector(".tableUser");
const tableBody = tableUser.querySelector("tbody");

//Buscando desde un elemento en concreto
const contentTable = document.querySelector(".contentTable");

const btnAdd = document.querySelector(".btnAdd");

document.addEventListener("DOMContentLoaded", paintUsers);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  insert();
});

btnAdd.addEventListener("click", () => {
  form.reset()
  form.setAttribute("data-status", "add");
  modalTitle.textContent = "Agregando un nuevo usuario";
});

function insert() {

  if (empty(nameInput.value) ||!isVuelo(vueloInput.value)) {
    return;
  }
  const name = nameInput.value;
  const vuelo = vueloInput.value;

  if (empty(nameInput.value) || !isVuelo(vueloInput.value)) {
    return;
  }

  const data = {
    name,
    vuelo,
  };


  if (form.getAttribute("data-status") == "add") {
    post(URL_USERS, data);
  } else if (form.getAttribute("data-status") == "edit"){
    putById(URL_USERS, form.getAttribute("data-id"), data);
  }

  form.reset();
  paintUsers();
}

function empty(valor) {
  //La s es para buscar un espacio vacio o un enter
  if (/^\s/.test(valor)) {
    alert("El nombre no debe contener espacios");
    return true;
  }
  return false;
}


async function paintUsers() {

  const users = await get(URL_USERS);

  users.forEach((user) => {
    //eventos para los botones del administrador para editar las reservas
    const tr = document.createElement("tr");
    const tdID = document.createElement("td");
    const tdName = document.createElement("td");
    const tdVuelo = document.createElement("td");
    const tdActions = document.createElement("td");
    const btnDelete = document.createElement("button");
    const btnEdit = document.createElement("button");

    btnDelete.classList = "btn btn-danger me-3";
    btnEdit.classList = "btn btn-warning";

    btnEdit.setAttribute("data-bs-toggle", "modal");
    btnEdit.setAttribute("data-bs-target", "#exampleModal");

    btnDelete.textContent = "Delete";
    btnEdit.textContent = "Edit";
    tdID.textContent = user["id"];
    tdName.textContent = user["name"];
    tdVuelo.textContent = user["vuelo"];

    tdActions.append(btnDelete, btnEdit);
    tr.append(tdID, tdName, tdVuelo, tdActions);

    btnDelete.addEventListener("click", () => {
      deleteById(URL_USERS, user["id"]);
    });

    btnEdit.addEventListener("click", () => {
        form.setAttribute("data-status", "edit");
        form.setAttribute("data-id", user["id"]);
        modalTitle.textContent = "Editando usuario";
        nameInput.value = user["name"];
        vueloInput.value = user["vuelo"];
      });


    contentTable.appendChild(tr);
  });

}
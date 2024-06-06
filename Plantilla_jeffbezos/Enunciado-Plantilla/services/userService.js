//Funcion para obtener de un endpoint

export async function get(URL) {
    const response = await fetch(URL);
    const data = await response.json();

}

//Funcion para enviar a un endpoint para el admin

export async function post(URL, data) {
    await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })

}

//Funcion para eliminar un usuario

export async function deleteById(URL, id) {
    await fetch(`${URL}/${id}`, {
        method: "DELETE",
    })

}

//Funcion para actualizar un usuario

export async function putById(URL, id, data) {
    await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })

}




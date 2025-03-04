// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];

function addFriends() {
    const input = document.getElementById("amigo");
    const name = input.value.trim();
    const friendsList = document.getElementById("listaAmigos");

    if (name == "") {
        alert("Por favor, ingrese un nombre válido");
        return;
    }

    if (friends.includes(name)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    friends.push(name);

    const li = document.createElement("li");
    li.textContent = name;
    friendsList.appendChild(li);

    input.value = "";
    input.focus();
}

function randomFriend() {
    if (friends.length === 0) {
        alert("No tienes amigos");
        return;
    }

    const randomInd = Math.floor(Math.random() * friends.length);
    const secretFriend = friends[randomInd];

    const result = document.getElementById("resultado");
    result.innerHTML = `<li>El amigo secreto es: <strong>${secretFriend}</strong></li>`;
}
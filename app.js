// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let ListaAmigos = [];

function agregarAmigo() {
    let inputAmigo = document.querySelector('#amigo'); 
    let nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido.');
    }
    else {
        ListaAmigos.push(nombreAmigo) 
        let lista = document.querySelector('#listaAmigos');
            lista.innerHTML = ''; 

            ListaAmigos.forEach(amigo => {
                let li = document.createElement('li');
                li.textContent = amigo;
                lista.appendChild(li);
            });
    }
    
}

function sortearAmigo(){
    if (ListaAmigos.length === 0) {
        alert('La lista está vacía. Agrega nombres primero.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * ListaAmigos.length);
    let amigoElegido = ListaAmigos[indiceAleatorio];

    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ''; 

    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigoElegido}`;
}
const desplegable = document.getElementById("desplegable");
const boton = document.getElementById("boton");
const texto = document.getElementById("texto");
const lista = document.getElementById("lista");
const opciones = lista.querySelectorAll("li");

// Abrir o cerrar el menú.
function abrirCerrar() {
    const estaAbierta = lista.classList.toggle("abierta");

    boton.classList.toggle("abierto", estaAbierta);
    boton.setAttribute("aria-expanded", estaAbierta);
}

// Cerrar el menú.
function cerrar() {
    lista.classList.remove("abierta");
    boton.classList.remove("abierto");
    boton.setAttribute("aria-expanded", "false");
}

// Guardar y mostrar la opción seleccionada.
function seleccionar(opcion) {
    opciones.forEach(function (elemento) {
        elemento.classList.remove("seleccionado");
        elemento.setAttribute("aria-selected", "false");
    });

    opcion.classList.add("seleccionado");
    opcion.setAttribute("aria-selected", "true");
    texto.textContent = opcion.textContent;

    cerrar();
    boton.focus();
}

boton.addEventListener("click", abrirCerrar);

opciones.forEach(function (opcion) {
    opcion.addEventListener("click", function () {
        seleccionar(opcion);
    });

    opcion.addEventListener("keydown", function (evento) {
        if (evento.key === "Enter" || evento.key === " ") {
            evento.preventDefault();
            seleccionar(opcion);
        }
    });
});

// Cerrar cuando se hace clic fuera del menú.
document.addEventListener("click", function (evento) {
    if (!desplegable.contains(evento.target)) {
        cerrar();
    }
});

// Cerrar con la tecla Escape.
document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        cerrar();
    }
});

const PREGUNTAS = [
    {
        pregunta: "¿Cuál es el plato típico más representativo de Panamá?",
        opciones: ["Sancocho", "Tamal de olla", "Ropa Vieja", "Guacho"],
        respuesta: "Sancocho",
        imagen: "https://viaturi.com/wp-content/uploads/2017/07/comidas-tipicas-de-panama.jpg"
    },
    {
        pregunta: "¿Cuál es el ave nacional de Panamá?",
        opciones: ["Búho", "Quetzal", "Gavilán", "Águila harpía"],
        respuesta: "Águila harpía", 
        imagen: "https://verpanama.com/wp-content/uploads/2020/08/aves2.jpg"
    },
    {
        pregunta: "¿Cuál es la flor nacional de Panamá?",
        opciones: ["Orquídea morada", "Flor del Espíritu Santo", "Girasol", "Rosa blanca"],
        respuesta: "Flor del Espíritu Santo",
        imagen: "https://www.sgipanama.com/wp-content/uploads/2017/11/20140121134327_flores.jpg"
    },
    {
        pregunta: "¿En qué año se inauguró el Canal de Panamá?",
        opciones: ["1925", "1899", "1903", "1914"],
        respuesta: "1914",
        imagen: "https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/data/ports/panama-canal/overview/panama-canal-second-lock.jpg?$750x320$"
    },
    {
        pregunta: "¿Cuál es la provincia más grande de Panamá en territorio?",
        opciones: ["Veraguas", "Darién", "Chiriqui", "Coclé"],
        respuesta: "Darién",
        imagen: "https://images.myguide-cdn.com/content/1/large/panama-province-496233.jpg"
    },
    {
        pregunta: "¿Cuál es el baile más tradicional de Panamá?",
        opciones: ["Congo", "El Punto", "Cunbia", "Tamborito"],
        respuesta: "Tamborito",
        imagen: "https://media.telemetro.com/p/42b4d37e79bb3b2cc4a01d5ed345cb80/adjuntos/311/imagenes/002/786/0002786827/1200x675/smart/top-5-los-bailes-folcloricos-mas-conocidos.jpg"
    },
    {
        pregunta: "¿Qué tratado permitió la separación de Panamá de Colombia?",
        opciones: [
            "Tratado Hay Herrán",
            "Tratado Thomson Urrutia",
            "Tratado Hay Bunau Varilla",
            "Tratado Mallarino Bidlack"
        ],
        respuesta: "Tratado Hay Bunau Varilla",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2QIlIHkr__jUEqWbOcC4wLn70iJLHJE_t8w&s"
    },
    {
        pregunta: "¿Qué explorador cruzó el Istmo en 1513?",
        opciones: [
            "Rodrigo de Bastidas",
            "Vasco Nuñes de Balboa",
            "Américo Vespucio",
            "Francisco Pizarro"
        ],
        respuesta: "Vasco Nuñes de Balboa",
        imagen: "https://www.historiadehermosillo.com/htdocs/cdpanama/PANAMA/elcruce_archivos/image006.jpg"
    },
    {
        pregunta: "¿Quién fue el primer presidente de Panamá?",
        opciones: [
            "Belisario Porras",
            "Ricardo Martinelli",
            "Laurentino Cortizo",
            "Manuel Amador Guerrero"
        ],
        respuesta: "Manuel Amador Guerrero",
        imagen: "https://www.metrolibre.com/binrepository/734x550/0c0/0d0/none/83989904/GPDG/presidentes-1_101-6896848_20240502201531.jpg"
    },
    {
        pregunta: "¿Qué provincia es famosa por el Carnaval?",
        opciones: [
            "Herrera",
            "Los Santos",
            "Panamá Oeste",
            "Coclé"
        ],
        respuesta: "Los Santos",
        imagen: "https://archivo.prensa-latina.cu/wp-content/uploads/2022/01/Carnaval-Panama.jpeg"
    },
    {
        pregunta: "¿Qué grupo indígena produce las molas?",
        opciones: [
            "Guna",
            "Emberá",
            "Ngäbe-Buglé",
            "Wounaan"
        ],
        respuesta: "Guna",
        imagen: "https://cdn.forbescentroamerica.com/2021/08/las-molas-de-panama-uno-1024x577.jpg"
    },
    {
        pregunta: "¿Cuál es el deporte más popular en Panamá?",
        opciones: [
            "Fútbol",
            "Baloncesto",
            "Béisbol",
            "Boxeo"
        ],
        respuesta: "Béisbol",
        imagen: "https://www.prensa-latina.cu/wp-content/uploads/2024/02/BOLETIN-DEPORTES.jpg"
    },
    {
        pregunta: "¿Cuál es el punto más alto de Panamá?",
        opciones: [
            "Cerro Echandi",
            "Cerro Punta",
            "Cerro Santiago",
            "Volcán Barú"
        ],
        respuesta: "Volcán Barú",
        imagen: "https://panamaconventions.com/wp-content/uploads/2024/09/volcan_baru3-1.jpg"
    },
    {
        pregunta: "¿Cuál es el río más largo de Panamá?",
        opciones: [
            "Río Tuira",
            "Río Chagres",
            "Río Chucunaque",
            "Río Bayano"
        ],
        respuesta: "Río Chucunaque",
        imagen: "https://lacabanga.com/wp-content/uploads/2013/10/desembocadura_rio_chagres.jpg"
    }
];



let indiceActual = 0;
let puntaje = 0;
let tiempo = 10;
let timer;
let dificultad = "Facil";


const btnIniciar = document.getElementById("btn-iniciar");
const btnReiniciar = document.getElementById("btn-reiniciar");
const selectDificultad = document.getElementById("select-dificultad");

const juego = document.getElementById("juego");
const final = document.getElementById("final");

const textoPregunta = document.getElementById("texto-pregunta");
const opcionesLista = document.getElementById("opciones-lista");
const contadorPreguntas = document.getElementById("contador-preguntas");
const totalPreguntas = document.getElementById("total-preguntas");

const imgPreg = document.getElementById("preg-img");
const tiempoDOM = document.getElementById("tiempo-restante");
const barraProgreso = document.getElementById("barra-progreso");
const puntajeFinal = document.getElementById("puntaje-final");

totalPreguntas.textContent = PREGUNTAS.length;




btnIniciar.onclick = () => {
    dificultad = selectDificultad.value;

    tiempo = dificultad === "Facil" ? 10 : dificultad === "Medio" ? 6 : 4;

    final.classList.add("hidden");
    juego.classList.remove("hidden");

    iniciarJuego();
};


function iniciarJuego() {
    indiceActual = 0;
    puntaje = 0;
    mostrarPregunta();
}

function mostrarPregunta() {
    clearInterval(timer);

    const q = PREGUNTAS[indiceActual];

    textoPregunta.textContent = q.pregunta;
    opcionesLista.innerHTML = "";

    // Imagen
    if (q.imagen) {
        imgPreg.src = q.imagen;
        imgPreg.classList.remove("hidden");
    } else {
        imgPreg.classList.add("hidden");
    }

    // Opciones
    q.opciones.forEach(op => {
        const div = document.createElement("div");
        div.className = "option";
        div.textContent = op;
        div.onclick = () => seleccionar(div, op, q.respuesta);
        opcionesLista.appendChild(div);
    });

    contadorPreguntas.textContent = indiceActual + 1;

    iniciarTemporizador();
}


function iniciarTemporizador() {
    let total = tiempo;
    tiempoDOM.textContent = total;

    timer = setInterval(() => {
        total--;
        tiempoDOM.textContent = total;
        barraProgreso.style.width = ((tiempo - total) / tiempo) * 100 + "%";

        if (total <= 0) {
            clearInterval(timer);
            siguientePregunta();
        }
    }, 1000);
}



function seleccionar(div, seleccion, correcta) {
    clearInterval(timer);

    
    const opciones = document.querySelectorAll(".option");
    opciones.forEach(op => {
        op.style.pointerEvents = "none";
        if (op.textContent === correcta) op.classList.add("correct");
        if (op !== div && op.textContent !== correcta) op.classList.add("wrong");
    });

    if (seleccion === correcta) puntaje++;

    setTimeout(siguientePregunta, 1000);
}


// ------------------------ Avanzar preguntas ----------------------------
function siguientePregunta() {
    indiceActual++;

    if (indiceActual >= PREGUNTAS.length) {
        finalizarJuego();
    } else {
        mostrarPregunta();
    }
}


// ------------------------ Final del juego ----------------------------
function finalizarJuego() {
    juego.classList.add("hidden");
    final.classList.remove("hidden");

    puntajeFinal.textContent = puntaje;
}


// ------------------------ Reiniciar ----------------------------
btnReiniciar.onclick = () => {
    iniciarJuego();
    final.classList.add("hidden");
    juego.classList.remove("hidden");
};
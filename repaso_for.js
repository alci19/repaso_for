function mostrar(opcion) {

    switch(opcion) {

        case 1:
            ejercicio1();
        break;

        case 2:
            ejercicio2();
        break;

        case 3:
            ejercicio3();
        break;

        case 4:
            imprimirCentenas();
        break;

        case 5:
            imprimirCentenasRegresivo();
        break;

        case 6:
            mostrarMensaje1();
        break;

        case 7:
            mostrarMensaje2();
        break;

        case 8:
            mostrarMensaje3();
        break;

        case 9:
            mostrarMensaje4();
        break;

        case 10:
            tablaDel3();
        break;

        default:
            console.log("Opción no válida");
        break;

    }

}

// EJERCICIO 1
function ejercicio1() {

    for(let i = 1; i <= 5; i++) {

        console.log(i);

    }

}

// EJERCICIO 2
function ejercicio2() {

    for(let i = 10; i >= 1; i--) {

        console.log(i);

    }

}

// EJERCICIO 3
function ejercicio3() {

    for(let i = 1; i <= 10; i++) {

        console.log("Número: " + i);

    }

}
function imprimirCentenas() {

    for(let i = 100; i <= 1000; i += 100) {

        console.log(i);

    }

}
function imprimirCentenasRegresivo() {

    for(let i = 1000; i >= 800; i -= 100) {

        console.log(i);

    }

}

function mostrarMensaje1() {

    for(let i = 5; i < 8; i++) {

        console.log("Mensaje 1");

    }

}

function mostrarMensaje2() {

    for(let i = 10; i >= 8; i--) {

        console.log("Mensaje 2");

    }

}

function mostrarMensaje3() {

    for(let i = 0; i < 3; i++) {

        console.log("Mensaje 3");

    }

}

function mostrarMensaje4() {

    for(let i = 8; i > 5; i--) {

        console.log("Mensaje 4");

    }

}

function tablaDel3() {

    for(let i = 1; i <= 10; i++) {

        console.log("3x" + i + "=" + (3 * i));

    }

}
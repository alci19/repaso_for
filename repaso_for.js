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

function semaforo() {
    let boton = document.getElementById("btn");
    boton.style.display = "none";

    let semafo = document.getElementById("img");
    semafo.src = "./resources/semaforoGreen.jpg";

    setTimeout(function () { semafo.src = "./resources/semaforoOff.jpg" }, 2000);
    setTimeout(function () { semafo.src = "./resources/semaforoGreen.jpg" }, 3000);
    setTimeout(function () { semafo.src = "./resources/semaforoOff.jpg" }, 4000);
    setTimeout(function () { semafo.src = "./resources/semaforoGreen.jpg" }, 5000);
    setTimeout(function () { semafo.src = "./resources/semaforoOff.jpg" }, 6000);
    setTimeout(function () { semafo.src = "./resources/semaforoGreen.jpg" }, 7000);
    setTimeout(function () { semafo.src = "./resources/semaforoYellow.jpg" }, 8000);
    setTimeout(function () { semafo.src = "./resources/semaforoRed.jpg" }, 9000);

    setTimeout(function () { semafo.src = "./resources/semaforoGreen.jpg"; semaforo(); }, 12000);
}
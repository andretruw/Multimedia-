const audio = document.getElementById("musicaFondo");
const boton = document.getElementById("botonMusica");

boton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        boton.textContent = "⏸ Pausar música";
    } else {
        audio.pause();
        boton.textContent = "▶ Reproducir música";
    }
});

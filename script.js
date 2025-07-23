// Fecha de lanzamiento (cámbiala: año, mes-1, día, hora, minutos, segundos)
const launchDate = new Date(2025, 6, 25, 0, 0, 0).getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = launchDate - now;

    // Cálculo de días, horas, minutos, segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar contador
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Cuando el contador llegue a cero
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown-section").style.display = "none";
        document.getElementById("reveal-section").style.display = "flex";
    }
}, 1000);

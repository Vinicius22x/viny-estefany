
const counterEl = document.getElementById("counter");
const startTime = new Date(1672531200000);

function updateCounter() {
    const now = new Date();
    const diff = now - startTime;

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    counterEl.innerHTML = `Estamos juntos há <strong>${days}</strong> dias, <strong>${hours}</strong> horas, <strong>${minutes}</strong> minutos e <strong>${seconds}</strong> segundos 💑`;
}

setInterval(updateCounter, 1000);
updateCounter();

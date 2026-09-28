const enterBtn = document.getElementById("enterBtn");
const welcome = document.getElementById("welcome");
const mainContent = document.getElementById("mainContent");

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("backgroundMusic");

const video = document.getElementById("heroVideo");


/* =========================
   ABRIR INVITACIÓN
========================= */

enterBtn.addEventListener("click", async () => {

    welcome.classList.add("hide");

    mainContent.classList.remove("hidden");

    musicBtn.classList.remove("hidden");

    try {
        await music.play();
    } catch (error) {
        console.log("El navegador bloqueó el audio.");
    }

    video.play().catch(() => {});

});


/* =========================
   MÚSICA
========================= */

let musicPlaying = true;

musicBtn.addEventListener("click", async () => {

    if (musicPlaying) {

        music.pause();

        musicBtn.innerHTML = "🔇";

        musicPlaying = false;

    } else {

        try {
            await music.play();
        } catch (error) {
            console.log(error);
        }

        musicBtn.innerHTML = "♪";

        musicPlaying = true;
    }

});


/* =========================
   CUENTA REGRESIVA
========================= */

/*
    CAMBIA ESTA FECHA
    por la fecha real del evento.
*/

const eventDate = new Date("2026-09-15T18:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        return;
    }


    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );


    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);
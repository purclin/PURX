document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const titles = document.querySelectorAll("h1, h2");
    const videos = document.querySelectorAll("video");

    function revealOnScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("fade-in");
            }
        });
        
        titles.forEach((title) => {
            const titleTop = title.getBoundingClientRect().top;
            if (titleTop < window.innerHeight - 50) {
                title.classList.add("fade-in");
            }
        });
    }

    function checkVideoPlayback() {
        videos.forEach(video => {
            video.addEventListener("mouseover", () => video.play());
            video.addEventListener("mouseout", () => video.pause());
        });
    }

    // Música de fondo con botón de activación
    const musicButton = document.getElementById("play-music");
    const backgroundMusic = document.getElementById("background-music");

    musicButton.addEventListener("click", function () {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicButton.textContent = "⏸ Pausar Música";
        } else {
            backgroundMusic.pause();
            musicButton.textContent = "🎵 Activar Música";
        }
    });

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    checkVideoPlayback();
});

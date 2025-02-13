document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const titles = document.querySelectorAll("h1, h2");

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

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});

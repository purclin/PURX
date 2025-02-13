async function consultarIA() {
    const pregunta = document.getElementById("pregunta").value;
    if (!pregunta) {
        alert("Por favor, ingresa una pregunta.");
        return;
    }
    const respuestaElemento = document.getElementById("respuesta");
    respuestaElemento.textContent = "Cargando...";

    try {
        const response = await fetch("http://127.0.0.1:5000/consultar_ia", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pregunta })
        });
        const data = await response.json();
        respuestaElemento.textContent = data.respuesta;
    } catch (error) {
        respuestaElemento.textContent = "Error al comunicarse con la IA.";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("h1, h2");

    function revealOnScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});

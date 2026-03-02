const greeting = "Hola, bienvenido a mi portafolio";
const form = document.getElementById("contact-form");
const faders = document.querySelectorAll(".fade-in");

console.log(greeting);

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    });
});

faders.forEach(article => {
    appearOnScroll.observe(article);
});


//configurar evento del formulario de contacto
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

//verifica los campos del formulario
    if (!name || !email || !message) {
        alert("Por favor, completa todos los campos antes de enviar el formulario.");
        return;
    }

    //valida el formato del correo electónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, escribe un correo válido.");
        return;
    }

    alert("Gracias por su mensaje, " + name + "! Me pondré en contacto contigo pronto.");
    form.reset();
});
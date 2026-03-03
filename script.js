const buttons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        pages.forEach(page => page.classList.remove("active"));
        buttons.forEach(btn => btn.classList.remove("active"));

        document.getElementById(button.dataset.page).classList.add("active");
        button.classList.add("active");
    });
});

const form = document.getElementById("registerForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const field = document.getElementById("field").value;
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || field === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    formMessage.style.color = "lightgreen";
    formMessage.textContent = "Votre inscription a été envoyée avec succès !";

    form.reset();
});

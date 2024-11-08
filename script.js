// Funcionalide do carrossel

let currentGroupIndex = 0;

function nextImages() {
  const groups = document.querySelectorAll(".grupo-imagens");
  groups[currentGroupIndex].classList.remove("active");

  currentGroupIndex = (currentGroupIndex + 1) % groups.length;

  groups[currentGroupIndex].classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".grupo-imagens").classList.add("active");
});

// Funcionalidade do Accordion

document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    button.classList.toggle("active");

    if (button.classList.contains("active")) {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
});

// Formulário de Consulta

document
  .getElementById("marqueConsultaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    formData.append("service_id", "service_uzn43eo");
    formData.append("template_id", "template_kunf0ql");
    formData.append("user_id", "VQp7Ykno-i_7s8CvC");

    fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Seu e-mail foi enviado com sucesso!");
          document.getElementById("marqueConsultaForm").reset();
        } else {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
      })
      .catch((error) => {
        alert("Erro ao enviar o e-mail: " + error.message);
      });
    event.preventDefault();
  });

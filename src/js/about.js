const skillsSection = document.getElementById("skills_section");
const skillItems = document.querySelectorAll(".skill-item");
let isAnimated = false;
// Función para verificar si la sección está visible en la ventana
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleAnimation() {
    if (isElementInViewport(skillsSection) && !isAnimated) {
        isAnimated = true;

        skillItems.forEach(function (item, index) {
                setTimeout(function () {
                item.classList.add("show");
                }, index * 70);
        });

        setTimeout(function () {
            skillItems.forEach(function (item, index) {
                item.classList.remove("show");
            });
            isAnimated = false;
        }, skillItems.length * 70 + 2000); 
    }
};

// Agrega un listener de scroll para ejecutar la animación
window.addEventListener("scroll", handleAnimation);

// Ejecuta la animación cuando la página se carga
document.addEventListener("DOMContentLoaded", handleAnimation);

// Espera a que el DOM se cargue completamente antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
  // Agrega un evento al botón de modo oscuro
  document.getElementById("dark-mode").addEventListener("click", () => {
    // Alterna la clase 'dark-mode' en el body para activar o desactivar el modo oscuro
    document.body.classList.toggle("dark-mode");

    // Cambia el icono del botón dependiendo de si el modo oscuro está activado o no
    const isDarkMode = document.body.classList.contains("dark-mode");
    const iconButton = document.getElementById("btn");

    if (isDarkMode) {
      // Si está en modo oscuro, cambia el icono al de la luna
      iconButton.classList.replace("fa-sun", "fa-moon");
    } else {
      // Si no está en modo oscuro, cambia el icono al del sol
      iconButton.classList.replace("fa-moon", "fa-sun");
    }
  });
});

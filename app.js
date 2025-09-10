// Selección de elementos
const valor = document.getElementById("valor");
const btnDisminuir = document.getElementById("disminuir");
const btnResetear = document.getElementById("resetear");
const btnAumentar = document.getElementById("aumentar");

// Estado inicial
let contador = 0;

// Eventos
btnAumentar.addEventListener("click", () => {
  contador++;
  actualizarContador();
});

btnDisminuir.addEventListener("click", () => {
  contador--;
  actualizarContador();
});

btnResetear.addEventListener("click", () => {
  contador = 0;
  actualizarContador();
});

// Función para actualizar
function actualizarContador() {
  valor.textContent = contador;

  // Colores dinámicos según valor
  if (contador > 0) {
    valor.style.color = "#00CC88"; // verde
  } else if (contador < 0) {
    valor.style.color = "#FF5570"; // rojo
  } else {
    valor.style.color = "#f0f0f0"; // gris
  }
}

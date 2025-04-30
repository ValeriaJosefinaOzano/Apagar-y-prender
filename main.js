const boton = document.getElementById("interruptor");

boton.addEventListener("click", () => {
  document.body.classList.toggle("luz-apagada");
  document.body.classList.toggle("luz-encendida");

  boton.textContent = document.body.classList.contains("luz-apagada")
    ? "PRENDER LUZ"
    : "APAGAR LUZ";
});

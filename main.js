document.getElementById("miFormulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe

  
  document.getElementById("ventanaEmergente").style.display = "flex";
}); // Mostrar la ventana emergente

document.getElementById("cerrarVentanaEmergente").addEventListener("click", function() {
  // Cerrar la ventana emergente
  document.getElementById("ventanaEmergente").style.display = "none";
});


document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe tradicionalmente
  
    // Obtener valores de los inputs
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
  
    // Hacer algo con los datos (ej: mostrar en consola)
    console.log("Nombre:", nombre);
    console.log("Email:", email);
  });
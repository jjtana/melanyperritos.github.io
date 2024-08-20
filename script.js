document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que se envíe el formulario

    // Verificar si se ha seleccionado un archivo
    var fileInput = document.getElementById("dogImage");
    if (fileInput.files.length > 0) {
        // Mostrar mensaje de confirmación
        document.getElementById("confirmationMessage").innerText = "¡Tu imagen se ha subido exitosamente!";
        document.getElementById("confirmationMessage").style.display = "block";
    } else {
        // Mostrar mensaje de error si no se seleccionó un archivo
        document.getElementById("confirmationMessage").innerText = "Por favor, selecciona una imagen antes de subir.";
        document.getElementById("confirmationMessage").style.color = "red";
        document.getElementById("confirmationMessage").style.display = "block";
    }
});
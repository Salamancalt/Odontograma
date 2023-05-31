 function cambiarColor() {
    var elemento = document.getElementById("miElemento");
    elemento.style.backgroundColor = "red";
 

function activarColor(elementId, colorClass) {
    var elemento = document.getElementById(elementId);
    elemento.classList.add(colorClass);
  }
  
  function desactivarColor(elementId) {
    var elemento = document.getElementById(elementId);
    elemento.classList.remove("cariado", "extraido", "sano");
  }
  
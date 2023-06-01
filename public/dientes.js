function mostrarMenu(event) {
    console.log("🚀 ~ file: dientes.js:2 ~ mostrarMenu ~ event:", event)
    var menuProcedimientos = document.getElementById('menuProcedimientos');

    menuProcedimientoshtml = menuProcedimientos.innerHTML;

    var idTarget = event.target.id;
    console.log("🚀 ~ file: dientes.js:8 ~ mostrarMenu ~ idTarget:", idTarget)

    menuProcedimientos.innerHTML = menuProcedimientoshtml.replace(/DDDD/g, idTarget);

     // Crear el menú contextual personalizado
    var menuPersonalizado = document.createElement("div");
    menuPersonalizado.style.position = "absolute";
    menuPersonalizado.style.left = event.clientX + "px";
    menuPersonalizado.style.top = event.clientY + "px";
    menuPersonalizado.style.background = "#fff";
    menuPersonalizado.style.border = "1px solid #ccc";
    menuPersonalizado.style.padding = "10px";
    menuPersonalizado.innerHTML = menuProcedimientos.innerHTML;
    document.body.appendChild(menuPersonalizado);
}

function asignacionColor(idParte, claseColor){
    var divParte = document.getElementById(idParte);
    divParte.className = divParte.className +' '+ claseColor;
}
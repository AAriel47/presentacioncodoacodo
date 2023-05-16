var form =document.getElementById("form");
form.addEventListener("submit", e=>{
    e.preventDefault();
    let nombre = document.getElementById("validationCustom01").value;
    let apellido = document.getElementById("validationCustom02").value;
    let correo = document.getElementById("validationCustom03").value;
    let cantidad = document.getElementById("validationCustom04").value;
    let categoria = document.getElementById("validationCustom05").value;
    let importe=0;
    switch(categoria){
        case "Estudiante":
            importe = (Number(cantidad)*200)-((Number(cantidad)*200)*0.8);
            break;
        case "Trainee":
            importe = (Number(cantidad)*200)-((Number(cantidad)*200)*0.5);
            break;
        case "Junior":
            importe = (Number(cantidad)*200)-((Number(cantidad)*200)*0.15);
            break;
    }
    document.getElementById("importe").innerHTML=importe;

})

function mostrar(){
    document.getElementById("oculto").style.display = "block";
}

function ocultar(){
    document.getElementById("oculto").style.display = "none";
}
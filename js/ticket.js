var form =document.getElementById("form");

form.addEventListener("reset",e=>{
    document.getElementById("importe").innerHTML="";})

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

function mostrar(para){
    if (para == "ventas"){ 
        var disertantes = document.getElementById("orador");
        disertantes.classList.remove("active");
       var confe = document.getElementById("conferen");
       confe.classList.remove("active");
       var sitio = document.getElementById("lugar");
       sitio.classList.remove("active");
       var trans = document.getElementById("convierte");
       trans.classList.remove("active");
    }
    document.getElementById("oculto").style.display = "block";
}

function ocultar(para){
    if (para == "orador"){ 
        var disertantes = document.getElementById("orador");
        disertantes.classList.add("active");
       var confe = document.getElementById("conferen");
       confe.classList.remove("active");
       var sitio = document.getElementById("lugar");
       sitio.classList.remove("active");
       var trans = document.getElementById("convierte");
       trans.classList.remove("active");
       var tickets = document.getElementById("ventas");
       tickets.classList.remove("active");
    }

    if (para == "conferen"){ 
        var disertantes = document.getElementById("orador");
        disertantes.classList.remove("active");
       var confe = document.getElementById("conferen");
       confe.classList.add("active");
       var sitio = document.getElementById("lugar");
       sitio.classList.remove("active");
       var trans = document.getElementById("convierte");
       trans.classList.remove("active");
       var tickets = document.getElementById("ventas");
       tickets.classList.remove("active");
    }

    if (para == "lugar"){ 
        var disertantes = document.getElementById("orador");
        disertantes.classList.remove("active");
       var confe = document.getElementById("conferen");
       confe.classList.remove("active");
       var sitio = document.getElementById("lugar");
       sitio.classList.add("active");
       var trans = document.getElementById("convierte");
       trans.classList.remove("active");
       var tickets = document.getElementById("ventas");
       tickets.classList.remove("active");
    }

    if (para == "convierte"){ 
        var disertantes = document.getElementById("orador");
        disertantes.classList.remove("active");
       var confe = document.getElementById("conferen");
       confe.classList.remove("active");
       var sitio = document.getElementById("lugar");
       sitio.classList.remove("active");
       var trans = document.getElementById("convierte");
       trans.classList.add("active");
       var tickets = document.getElementById("ventas");
       tickets.classList.remove("active");
    }

    document.getElementById("oculto").style.display = "none";
}

function encuesta(){
    var form2 = document.getElementById("form2");
    form2.addEventListener("submit",e=>{
        let nombre = document.getElementById("validationCustom01").value;
        let apellido = document.getElementById("validationCustom02").value;
        let descripcion = document.getElementById("validationCustom03").value;
       // alert("datos cargados: "+" "+nombre+"  "+apellido+"  "+descripcion);
    }
)}
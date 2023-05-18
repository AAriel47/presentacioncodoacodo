function borrar(){
var form =document.getElementById("form");
form.addEventListener("reset",e=>{
    document.getElementById("importe").innerHTML="";})
}

function controlmail(){
    let email1 = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    var email = document.getElementById("validationCustom03").value;
    var errores = document.getElementById("validationCustom03");
    var correo = email1.test(email);
    if (correo){
        errores.classList.remove("error");
    }else{
        errores.classList.add("error");
    }

}

function controlerror(){
    var cantidad1 = document.getElementById("validationCustom04").value;
    var errore1 = document.getElementById("validationCustom04");
    if (isNaN(Number(cantidad1))){
        errore1.classList.add("error");
        alert("Valor no númerico");
    }else{
        errore1.classList.remove("error");
    }
}

function  enviar(){
    var form=document.getElementById("form");
    form.addEventListener("submit", e=>{
        e.preventDefault();
        var nombre = document.getElementById("validationCustom01").value;
        var apellido = document.getElementById("validationCustom02").value;
        var correo = document.getElementById("validationCustom03").value;
        var cantidad = document.getElementById("validationCustom04").value;
        var errore = document.getElementById("validationCustom04");
        if (isNaN(cantidad)){
           errore.classList.add("error");
            var importe = 0;
        }else{
           errore.classList.remove("error");
            var categoria = document.getElementById("validationCustom05").value;
            alert(categoria);
            var importe=0;
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
                default: 
            }
            document.getElementById("importe").innerHTML=importe;
        }
    })
   // form.submit();
}

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
        let nombre = document.getElementById("validationCustom1").value;
        let apellido = document.getElementById("validationCustom2").value;
        let descripcion = document.getElementById("validationCustom3").value;
       alert("datos cargados: "+" "+nombre+"  "+apellido+"  "+descripcion);
    }
)}


window.onload = function(){
    var monto = document.getElementById("monto");
    debugger
    monto.addEventListener("keyup", function(event){
        if (event.keyCode === 13){
            event.preventDefault();
            apretarBoton()
        }
    })

}


function apretarBoton(){
   
    
    var respuesta = confirm("¿Está seguro? X__X");
    if(respuesta===true){

    
    var monto = document.getElementById("monto");
    
    
   
    var montoNumber= parseInt(monto.value);

    var montoIva= montoNumber * 0.21;

    var totalIva= montoNumber * 1.21;
    
    var impuestoPais = montoNumber * 0.65;


    var sinIva= montoNumber;
    

    var inputIva = document.getElementById("IVA");

    inputIva.value = montoIva;

    var inputTotal= document.getElementById("conIVA");

    inputTotal.value = totalIva;

    var inputSiniva= document.getElementById("sinIVA");

    inputSiniva.value= sinIva;

    var inputPais= document.getElementById("pais")
    inputPais.value = impuestoPais

    var inputPaisiva = document.getElementById("ivaPais")
    inputPaisiva.value = totalIva + impuestoPais

}


    



}
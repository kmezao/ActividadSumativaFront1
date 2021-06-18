var arreglo = new Array();
arreglo[0]="errorNombre";
arreglo[1]="errorApellido";
arreglo[2]="errorNickname";
arreglo[3]="errorEmail";
arreglo[4]="errorPass";
arreglo[5]="errorDireccion";

function validar(){
    var entrada = new Array();
    entrada[0]=document.getElementById('nombre').value;
    entrada[1]=document.getElementById('apellido').value;
    entrada[2]=document.getElementById('nickname').value;
    entrada[3]=document.getElementById('email').value;
    entrada[4]=document.getElementById('password').value;
    entrada[5]=document.getElementById('direccion').value;
    

    var error = new Array();
    error[0] = "<span style='color: red'>Ingrese nombre</span>";
    error[1] = "<span style='color: red'>Ingrese apellido</span>";
    error[2] = "<span style='color: red'>Ingrese nickname</span>";
    error[3] = "<span style='color: red'>Ingrese email</span>";
    error[4] = "<span style='color: red'>Ingrese password</span>";
    error[5] = "<span style='color: red'>Ingrese direccion</span>";

    
    
    for(i in entrada){
        var mensajeError = error[i];
        var valorArreglo = arreglo[i];


        if(entrada[i]==""){
            document.getElementById(valorArreglo).innerHTML = mensajeError;
        } else if (i==3){
            var arroba = entrada[i].indexOf("@");
            var punto = entrada[i].lastIndexOf(".");

            if(arroba<1 || punto < arroba + 2 || entrada[i].length<punto+2){
                document.getElementById('errorEmail').innerHTML =
                "<span style='color: red'>Ingrese un email válido!!</span>";
            }
            else {
                document.getElementById('errorEmail').innerHTML =
                "Campo válido!!";
            }
        } 
        else {
            document.getElementById(valorArreglo).innerHTML =
                "Campo válido!!";
        }
    }
}
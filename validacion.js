var arreglo = new Array();
arreglo[0]="errorEmail";
arreglo[1]="errorPass";

function validar(){
    var entrada = new Array();
    entrada[0]=document.getElementById('exampleInputEmail1').value;
    entrada[1]=document.getElementById('exampleInputPassword1').value;
    

    var error = new Array();
    error[0] = "<span style='color: red'>Ingrese email</span>";
    error[1] = "<span style='color: red'>Ingrese password</span>";
    
    
    for(i in entrada){
        var mensajeError = error[i];
        var valorArreglo = arreglo[i];


        if(entrada[i]==""){
            document.getElementById(valorArreglo).innerHTML = mensajeError;
        } else if (i==0){
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
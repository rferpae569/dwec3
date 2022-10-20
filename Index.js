
function multiplicar(){
    let numero=parseInt(document.getElementById('numero').value);
    let resultado;

    if(numero>=0 && numero<=9){
        setTimeout(() => {
            let list=`<th colspan="5"><h1>Tabla de multiplicar</h1></th>`;
            for(let i=0;i<=10;i++){
                resultado=numero*i;
                list+=`<tr><td>${numero}</td><td>*</td><td>${i}</td><td>=</td><td>${resultado}</td>`;
            }
            document.querySelector("table").innerHTML=list;
        }, 3000);
    }else{
        document.getElementById('error').innerHTML="<h1>Lo siento, fallo en el programa</h1>";
        document.getElementById('numero').value="";
    }
}



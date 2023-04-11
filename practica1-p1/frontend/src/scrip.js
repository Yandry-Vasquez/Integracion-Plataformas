const formElement=document.getElementById("guardarTransaccion");
 
formElement.addEventListener("submit", (event)=>{
    //event.preventDefault();

    let id = document.getElementById("idDiseñador").value;
    let nombre= document.getElementById("nombreDiseñador").value;
    let experiencia= document.getElementById("experienciaDi").value;
    let transaccion= {id,nombre,experiencia };
    let transaccionjson= JSON.stringify(transaccion);
    console.log(transaccionjson);

    //mandar los datos al backend y guardarlos ahi

    fetch('http://localhost:3000/transaccion',{
        method:'Post',
        body: transaccionjson
    })

  //  localStorage

})

fetch('http://localhost:3000/transaccion').then(x=>x.json()).then(console.log)
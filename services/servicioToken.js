//Pasos para consumir con JS

//1. Saber pa donde voy
//URI del servicio a consumir

//2. Que vas a hacer
//Configurar metodo http, cabeceras y body (Si es necesario) de la peticion
import { URI } from "../helpers/uris.js";
//Si hay body lo armo antes de llevarlo a la peticion

export async function tokenRequest(grant_type,client_id,client_secret) {
    let data= `grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}`;
    let request = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data
      };

    //3. Ejecutar
    //Consumir el servicio utilizando asincronismo (FETCH)

      try{
        let serverResponse=await fetch(URI,request);
        let tokenResponse= await serverResponse.json();
        return tokenResponse;
      }catch(error){
        console.log(error);
      }
      

}






  
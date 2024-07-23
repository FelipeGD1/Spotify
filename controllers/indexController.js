import { tokenRequest } from "../services/servicioToken.js";
import { consultarTopTracks } from "../services/servicioTopTracks.js";

tokenRequest("client_credentials","0b3d187653ac49d69791bdab14c5e14a","38230343c69948218edfbe05f90edaa8")
.then((respuestaApi)=>{
    let tokenOK= respuestaApi.token_type+" "+respuestaApi.access_token
    consultarTopTracks("0du5cEVh5yTK9QJze8zA0C","US",tokenOK).then(function(canciones){
        console.log(canciones.tracks)
        canciones.tracks.forEach(cancion=>{
            console.log(cancion)
            console.log(cancion.name)
            console.log(cancion.preview_url)
            console.log(cancion.album.images[0].url)

        })
    })
})


export async function consultarTopTracks(idArtista, mercado, token) {
  let URI_CANCIONES = `https://api.spotify.com/v1/artists/${idArtista}/top-tracks?market=${mercado}`;
  let peticionCanciones = {
    method: "GET",
    headers: { "Authorization": token }
  };
  try {
    let respuesta = await fetch(URI_CANCIONES, peticionCanciones);
    let canciones = await respuesta.json();
    return(canciones);
  } catch (error) {
    console.log(error);
  }
}

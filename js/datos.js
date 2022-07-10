
// funcion que trae los datos
export function buscarDatos(data) {

    const nombre = data.name,
          imagen = data.image.url,
          peso = data.appearance.weight,
          altura = data.appearance.height,
          ocupacion = data.work.occupation,
          alianzas = data.biography.aliases,
          conecciones = data.connections.relativ;

    $("#infoHero").html(`
    <div class="card mb-3 div-cards" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${imagen}" class="img-fluid rounded-start" alt="super">
      </div>
      <div class="col-md-8">
        <div class="card-body">
        <h4 class="card-title">SuperHero Encontrado</h4>
        <h5>Nombre: <span>${nombre}</span></h5>
        <p>Conexiones: <span>${conecciones}</span></p>
        <p>Publicado Por: <span></span></p>
        <p>Ocupacion: <span>${ocupacion}</span></p>
        <p>Primera Aparicion: <span></span></p>
        <p>Altura: <span>${altura}</span></p>
        <p>Peso: <span>${peso}</span></p>
        <p>Alianzas: <span>${alianzas}</span></p>
        </div>
      </div>
    </div>
  </div>
           

`)
}
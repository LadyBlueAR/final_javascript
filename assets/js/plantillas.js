const mostrarCard = (contenido)=> {
    const {title, imagen, desc} = contenido
    return `<div class="row">
    <div class="col" style="width: 300px; height: 300px;">
      <div class="card">
        <div class="card-image">
          <img src="./assets/img/${imagen}">
          <span class="card-title black-text">${title}</span>
        </div>
        <div class="card-content">
          <p>${desc}</p>
        </div>
      </div>
    </div>
  </div>  
  `
}
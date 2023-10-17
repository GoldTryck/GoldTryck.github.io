function crearNavbar() {
    var nav = document.createElement("nav");
    nav.className = "navbar navbar-expand-md navbar-light";
    nav.innerHTML = `
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-toggler">
          <a class="navbar-brand" href="#">
            <img class="img-logo" src="images/logo.svg" alt="logo pagina web">
          </a>
          <ul class="navbar-nav d-flex justify-content-center align-items-center">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="products.html">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    `;
  
    return nav;
  }
  function agregarScriptAlBody() {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
    script.integrity = "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
  }
  
  var navbar = crearNavbar();
  document.body.appendChild(navbar);
  agregarScriptAlBody();
// Crear elementos meta
var metaCharset = document.createElement("meta");
metaCharset.setAttribute("charset", "utf-8");

var metaAuthor = document.createElement("meta");
metaAuthor.setAttribute("name", "author");
metaAuthor.setAttribute("content", "Hector Larios");

var metaDescription = document.createElement("meta");
metaDescription.setAttribute("name", "description");
metaDescription.setAttribute("content", "Proyecto Front end curso desarrollo web PRTOECO");

var metaViewport = document.createElement("meta");
metaViewport.setAttribute("name", "viewport");
metaViewport.setAttribute("content", "width=device-width, initial-scale=1");

// Agregar elementos meta al head
var head = document.head;

head.appendChild(metaCharset);
head.appendChild(metaAuthor);
head.appendChild(metaDescription);
head.appendChild(metaViewport);

// Configurar el título
document.title = "MONHE CO. RESTAURANT & COFFEE";

// Crear elementos link para las hojas de estilo
var linkBootstrap = document.createElement("link");
linkBootstrap.setAttribute("rel", "stylesheet");
linkBootstrap.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
linkBootstrap.setAttribute("integrity", "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC");
linkBootstrap.setAttribute("crossorigin", "anonymous");

var linkCustomStyle = document.createElement("link");
linkCustomStyle.setAttribute("rel", "stylesheet");
linkCustomStyle.setAttribute("href", "style.css");

// Agregar elementos link al head
head.appendChild(linkBootstrap);
head.appendChild(linkCustomStyle);

// Crear elemento link para el favicon
var linkFavicon = document.createElement("link");
linkFavicon.setAttribute("rel", "icon");
linkFavicon.setAttribute("type", "image/x-icon");
linkFavicon.setAttribute("href", "images/logo.svg");

// Agregar elemento link al head
head.appendChild(linkFavicon);

// Crear elementos link para preconexión
var preconnect1 = document.createElement("link");
preconnect1.setAttribute("rel", "preconnect");
preconnect1.setAttribute("href", "https://fonts.googleapis.com");

var preconnect2 = document.createElement("link");
preconnect2.setAttribute("rel", "preconnect");
preconnect2.setAttribute("href", "https://fonts.gstatic.com");
preconnect2.setAttribute("crossorigin", "");

// Agregar elementos link al head
head.appendChild(preconnect1);
head.appendChild(preconnect2);

// Crear elemento link para la fuente de Google Fonts
var linkGoogleFonts = document.createElement("link");
linkGoogleFonts.setAttribute("rel", "stylesheet");
linkGoogleFonts.setAttribute("href", "https://fonts.googleapis.com/css2?family=Rubik+Dirt&display=swap");

// Agregar elemento link al head
head.appendChild(linkGoogleFonts);

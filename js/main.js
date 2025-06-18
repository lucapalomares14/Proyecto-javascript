// Catálogo de vehículos (nombres y precios)
let vehiculos = ["Volkswagen Tiguan Allspace", "Volkswagen Virtus", "Volkswagen Vento GLI"];
let precios = [5000, 13500, 32000];

// Función que muestra el catálogo
function mostrarCatalogo() {
  let lista = "Catálogo de vehículos disponibles:\n";
  for (let i = 0; i < vehiculos.length; i++) {
    lista += (i + 1) + ". " + vehiculos[i] + " - U$S " + precios[i] + "\n";
  }
  return lista;
}

// Función para la selección del vehículo
function seleccionarVehiculo() {
  let opcion = prompt(mostrarCatalogo() + "\nIngresá el número del vehículo que te interesa:");
  let indice = parseInt(opcion) - 1;

  if (indice >= 0 && indice < vehiculos.length) {
    alert("Elegiste: " + vehiculos[indice] + "\nPrecio final: U$S " + precios[indice]);
    alert("¡Compra exitosa! Gracias por tu compra")
  } else {
    alert("Opción no válida. Volvé a intentarlo.");
  }
}

// Función para comprar
function iniciarConcesionario() {
  alert("Bienvenido a Catorce Automotores.");
  seleccionarVehiculo();
  alert("Gracias por visitarnos. ¡Te esperamos pronto!");
}

document.getElementById ("BtnCatalogo") .addEventListener("click", iniciarConcesionario)

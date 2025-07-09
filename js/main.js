let carrito = [];

if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
}

function agregarAlCarrito(modelo, precio) {
  carrito.push({ modelo: modelo, precio: precio });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function mostrarCarrito() {
  let contenedor = document.getElementById("carrito");
  contenedor.innerHTML = "";

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>No agregaste ningún auto todavía.</p>";
    return;
  }

  let total = 0;

  for (let i = 0; i < carrito.length; i++) {
    let auto = carrito[i];
    let p = document.createElement("p");
    p.innerText = auto.modelo + " - $" + auto.precio;
    contenedor.appendChild(p);
    total += auto.precio;
  }

  let totalFinal = document.createElement("p");
  totalFinal.innerHTML = "<strong>Total: $" + total + "</strong>";
  contenedor.appendChild(totalFinal);
}

mostrarCarrito();

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("finalizarCompra");
  if (btn) {
    btn.addEventListener("click", finalizarCompra);
  }
});

function finalizarCompra() {
  carrito = [];
  localStorage.removeItem("carrito");
  let contenedor = document.getElementById("carrito");
  contenedor.innerHTML = "<p><strong>¡Gracias por tu compra!</strong></p>";
}
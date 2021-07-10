let listaBebidas = [
    {
      id: 1,
      nombre: "Cerveza normal",
      descripcion:
        "Cerveza normal Erdinger ",
      precio: 10,
      stock: 9,
      imagen:
        "./img/sinAlcohol.jpg",
    },
    {
        id: 2,
        nombre: "Cerveza light",
        descripcion:
          "Cerveza normal de botella ",
        precio: 12.0,
        stock: 10,
        imagen:
          "./img/pilsenerlight.png",
      },

      {
        id: 3,
        nombre: "Vino Blanco",
        descripcion:
          "Vino Blanco Tacama",
        precio: 25.0,
        stock: 10,
        imagen:
          "./img/vinoBlanco.jpg",
      },
      {
        id: 4,
        nombre: "Champagne",
        descripcion:
          "Marca GhMumm",
        precio: 25.0,
        stock: 10,
        imagen:
          "./img/champagne.jpg",
      },
      {
        id: 5,
        nombre: "Vodka",
        descripcion:
          "Vodka marca Smirnoff Botella 750ml",
        precio: 29.90,
        stock: 10,
        imagen:
          "./img/bodka.jpg",
      },
      {
        id: 6,
        nombre: "Bebida Geseosa ",
        descripcion:
          "Geseosa Marca Coca Cola 3Lts",
        precio: 10.00,
        stock: 15,
        imagen:
          "./img/gaseosa.jpg",
}]


 
let divContenido = document.getElementById("contenido");
  
let tbodyCarrito = document.getElementById("tbody-carrito")

let carrito = [];

let dibujarTarjetas = () => {
  let htmlTarjetas = "";

  listaBebidas.forEach((bebida) => {
    htmlTarjetas =
      htmlTarjetas +
      `<div class="tarjeta">
      <div class="imagen">
        <img src="${bebida.imagen}">
      </div>
      <div class="texto">
        <h4>${bebida.nombre}</h4>
        <p>${bebida.descripcion}</p>
        <div class="precio">
          <span>S/ ${bebida.precio}</span>
          <button class="btn-agregar" data-idbebida="${bebida.id}">
            Agregar
          </button>
        </div>
      </div>
    </div>`;
  });

  divContenido.innerHTML = htmlTarjetas;
};

dibujarTarjetas();


 let btnsAgregar = document.getElementsByClassName("btn-agregar");

 let arregloBtnsAgregar = Array.from(btnsAgregar);


arregloBtnsAgregar.forEach((boton) => {
  
  boton.addEventListener("click", () => {
    
    let idObtenido = +boton.getAttribute("data-idbebida");
    
    
    let bebidaObtenido = buscarbebidaPorId(idObtenido);
    
    agregarACarrito(bebidaObtenido);
  });
});

let buscarbebidaPorId = (id) => {
  for (let i = 0; i < listaBebidas.length; i++) {
    if (id === listaBebidas[i].id) {
      return listaBebidas[i];
    }
  }
};


let agregarACarrito = (bebidaAPedir) => {
  let indiceBebida = carrito.findIndex((Pedido) => {
    if (Pedido.bebida.id === bebidaAPedir.id) {
      return Pedido;
    }
  });

 
  if (indiceBebida === -1) {
   
    let pedido = {
      bebida: bebidaAPedir,
      cantidad: 1,
    };
    carrito.push(pedido);
  }else{
   
    carrito[indiceBebida].cantidad++
  }
console.table(carrito)
  dibujarCarrito()
};

let dibujarCarrito = () => {
  let htmlCarrito = ""

    carrito.forEach((Listbebida) => {
    
    htmlCarrito = htmlCarrito + 
    `<tr>
      <td>${Listbebida.bebida.nombre}</td>
      <td>${Listbebida.cantidad}</td>
      <td>${Listbebida.bebida.precio}</td>
      <td>${Listbebida.cantidad * Listbebida.bebida.precio}</td>
    </tr>`
  })

  tbodyCarrito.innerHTML = htmlCarrito
}




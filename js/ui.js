import cargarDatos from "./storage.js";

const productos_para_ti = document.getElementById("productos-para-ti")
const productos_popular = document.getElementById("productos-popular")

export const pintarProductos = (pagina) => {
    
    cargarDatos(pagina)
        .then(productos=>{productos.forEach(producto => {
            console.log(producto)
        
        pagina=="para ti"?
        productos_para_ti.innerHTML+=`
        <div class="producto">
            <div class="div-img-producto">
            <img
                src=${producto.image}
                alt=${producto.title}
            />
            </div>
            <h3 class="titulo-producto">${producto.title}</h3>
            <p class="descripcion-producto">${producto.description}</p>
            <div class="div-precio-boton">
            <h2 class="precio">${producto.price} €</h2>

            <button class="boton">Comprar</button>
            </div>
        </div>
            `:productos_popular.innerHTML+=`
        <div class="producto">
            <div class="div-img-producto">
            <img
                src=${producto.image}
                alt=${producto.title}
            />
            </div>
            <h3 class="titulo-producto">${producto.title}</h3>
            <p class="descripcion-producto">${producto.description}</p>
            <div class="div-precio-boton">
            <h2 class="precio">${producto.price} €</h2>

            <button class="boton">Comprar</button>
            </div>
        </div>`
        });

        })

}
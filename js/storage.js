const cargarDatos=async (pagina)=>{
    const respuesta= await fetch("https://fakestoreapi.com/products")
    const datos=await respuesta.json()
    const productos=pagina=="para ti"?datos.slice(0,9):datos.slice(10,21)
    return productos
}

export default cargarDatos
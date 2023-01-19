export default (gastos, {texto,ordenarPor, fechaInicio, fechaFin})=>{
    return gastos.filter((gasto)=>{

        //AQUI SE HARA LA VALIDACIÓN SI EN LA STORE HAY ALGUN FILTRO APLICADO, POR FECHA O POR TEXTO
        const comprobarFechaInicio= typeof fechaInicio !== 'number' || gasto.creado >= fechaInicio;
        const comprobarFechaFin= typeof fechaFin !== 'number' || gasto.creado <= fechaFin;
        const comprobarTexto= gasto.descripcion.toLowerCase().includes(texto.toLowerCase());
        
        return comprobarFechaInicio && comprobarFechaFin && comprobarTexto;
    }).sort((a,b)=>{
        if(ordenarPor==='fecha'){
            return a.creado < b.creado ? 1 : -1;
        }else if (ordenarPor === 'cantidad'){
            return a.cantidad < b.cantidad ? 1: -1;
        }
    });
}
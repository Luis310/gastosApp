const EstadoDefaultReducerGastos=[];

const reducerGastos=(state=EstadoDefaultReducerGastos,action)=>{
    switch(action.type){
        case 'AGREGAR_GASTO':
            //SE USO "concat" YA QUE ESTE REGRESA UN NUEVO ARREGLO
            // POR QUE SI SE HUBIERA USADO PUSH SE HUBIERA MODIFICADO
            //EL ESTADO, Y EL ESTADO NO DEBE CAMBIARSE
           //return state.concat(action.expense);
           //LOS 3 PUNTOS ... ES UNA FORMA DE EXPANDIR UN ARREGLO
           //ES UN OPERADOR DE EXPASION
           //ES IMPORTANTE RECORDAR QUE NO ESTAMOS CAMBIANDO EL STATE
           //SOLO ESTAMOS REGRESANDO UN ARREGLO PERO LO HACEMOS AL LEER EL "STATE"
           return [...state,action.gasto]
        case 'QUITAR_GASTO':
            //filter NO CAMBIA EL ARREGLO, ESTE DEVUELVE UNO NUEVO, POR ESO SE UTILIZA
            //AQUI TAMBIEN SE HIZO UN "DESTRUCTURING" PARA RECIBIR EL ID EN LA FUNCION 
            //DEL FILTER
            return state.filter(({id})=> id !== action.id);
        case 'EDITAR_GASTO':
            //MAP ES OTRA FUNCION QUE REGRESA UN NUEVO ARREGLO
            return state.map((gasto)=>{
                if(gasto.id===action.id){
                    //SI HAY UN GASTO IGUAL AL QUE QUEREMOS CAMBIAR, SE REGRESA UN NUEVO OBJETO
                    //AQUI UTILIZAMOS EL OPERADOR DE EXPANSION "..." PARA OBJETOS
                    return{
                        ...gasto,
                        ...action.actualizaciones
                    }
                }else{
                    return gasto;
                }
            })
        case 'SET_GASTOS':
            return action.gastos;
        default:
            return state;
    }
};

export default reducerGastos;
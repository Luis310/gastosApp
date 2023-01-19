const estadoDefaultReducerFiltros = {
    texto: '',
    ordenarPor: 'fecha',
    fechaInicio: undefined,
    fechaFin: undefined
  };
  
  export default (state = estadoDefaultReducerFiltros, action) => {
    switch (action.type) {
      case 'FILTRO_POR_TEXTO':
        return {
          ...state,
          texto: action.texto
        };
      case 'ORDENAR_POR_CANTIDAD':
        return {
          ...state,
          ordenarPor: 'cantidad'
        };
      case 'ORDENAR_POR_FECHA':
        return {
          ...state,
          ordenarPor: 'fecha'
        };
      case 'FIJAR_FECHA_INICIO':
        return {
          ...state,
          fechaInicio: action.fechaInicio
        };
      case 'FIJAR_FECHA_FIN':
        return {
          ...state,
          fechaFin: action.fechaFin
        };
      default:
        return state;
    }
  };
  
// FILTRO_POR_TEXTO
export const filtroPorTexto = (texto = '') => ({
    type: 'FILTRO_POR_TEXTO',
    texto
  });
  
  // ORDENAR_POR_FECHA
  export const ordenarPorFecha = () => ({
    type: 'ORDENAR_POR_FECHA'
  });
  
  // ORDENAR_POR_CANTIDAD
  export const ordenarPorCantidad = () => ({
    type: 'ORDENAR_POR_CANTIDAD'
  });
  
  // FIJAR_FECHA_INICIO
  export const fijarFechaInicio = (startDate) => ({
    type: 'FIJAR_FECHA_INICIO',
    startDate
  });
  
  // FIJAR_FECHA_FIN
  export const fijarFechaFin = (endDate) => ({
    type: 'FIJAR_FECHA_FIN',
    endDate
  });
  
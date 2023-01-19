import { child, get, push, ref, remove, update } from 'firebase/database';
import database from '../firebase/firebase';

export const agregarGasto = (gasto) => ({
    type: 'AGREGAR_GASTO',
    gasto
});

export const inicioAgregarGasto = (dataGasto = {}) => {
    return (dispatch,getState) => {
        const uid= getState().aut.uid;
        const {
            descripcion = '',
            nota = '',
            cantidad = 0,
            creado = 0
        } = dataGasto;

        const gasto = { descripcion, nota, cantidad, creado };

        //ESTE ES EL LLAMADO A FIREBASE PARA ESCRIBIR A LA BD
        return push(ref(database, `usuarios/${uid}/gastos`), gasto).then((ref) => {
            dispatch(agregarGasto({
                id: ref.key,
                ...gasto
            }));
        })

    };
};

export const inicioQuitarGasto = ({ id } = {}) => {
    console.log(id);
    return (dispatch, getState) => {
        const uid= getState().aut.uid;
        return remove(ref(database, `usuarios/${uid}/gastos/${id}`)).then(
            () => {
                dispatch(quitarGasto({ id }));
            }
        )
    };
};

export const quitarGasto = ({ id } = {}) => ({
    type: 'QUITAR_GASTO',
    id
});


export const inicioEditarGasto = (id = {}, actualizaciones = {}) => {
    return (dispatch, getState) => {
        const uid= getState().aut.uid;
        return update(ref(database, `usuarios/${uid}/gastos/${id}`), actualizaciones).then(
            () => {
                dispatch(editarGasto(id, actualizaciones))
            }
        )
    };
};

//EDIT_EXPENSE
export const editarGasto = (id, actualizaciones) => ({
    type: 'EDITAR_GASTO',
    id,
    actualizaciones
});



export const inicioSetGastos = () => {
    return (dispatch,getState) => {
        const uid= getState().aut.uid;

        const dbRef = ref(database);
        return get(child(dbRef,`usuarios/${uid}/gastos`)).then((snapshot) => {
            if (snapshot.exists()) {
                const gastos = [];
                snapshot.forEach((childSnapshot) => {
                    gastos.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
                dispatch(setGastos(gastos));
            } else {
                console.log("No hay data disponible");
            }
        }).catch((error) => {
            console.error(error);
        });

    };
};


export const setGastos = (gastos) => ({
    type: 'SET_GASTOS',
    gastos
});
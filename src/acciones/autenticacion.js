import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import {proveedorGoogle} from '../firebase/firebase';


export const login= (uid)=>({
    type:'LOGIN',
    uid
});

export const inicioLogin=()=>{
    const auth= getAuth();
    return()=>{
        signInWithPopup(auth,proveedorGoogle);
    };
};

export const logout=()=>({
    type:'LOGOUT'
});

export const inicioLogout=()=>{
    const auth= getAuth();
    return()=>{
        signOut(auth);
    };
};


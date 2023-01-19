import React from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



export default class FormularioGasto extends React.Component {

    constructor(props) {
        super(props);

        //AQUI VAMOS A DEFINIR EL ESTADO
        this.state = {
            //LO QUE HAREMOS PARA CADA PROPIEDAD SERA USAR UN OPERADOR TERNARIO
            //SI LA PROPIEDAD EXISTE DESDE EL PADRE "EditarGasto", TOMAREMOS DICHA PROPIEDAD
            //DE LO CONTRARIO TENDRA UN VALOR POR DEFECTO, EL CUAL SABEMOS SERAN VACIOS
            //YA QUE ESTOS SON UTILIZADOS POR "AgregarGasto"
            descripcion: props.gasto? props.gasto.descripcion:'',
            nota: props.gasto? props.gasto.nota:'',
            cantidad: props.gasto? (props.gasto.cantidad/100).toString():'',
            fecha: props.gasto? new Date(props.gasto.creado) :new Date(),
            error: ''
        }
    }

        verificadorDescripcion = (e) => {
            const descripcion = e.target.value;
            this.setState(() => ({
                descripcion
            }))
        };

    verificadorNota = (e) => {
        const nota = e.target.value;
        this.setState(() => ({
            nota
        }));
    };

    verificadorCantidad = (e) => {
        const cantidad = e.target.value;
        //AQUI VALIDAMOS POR MEDIO DE UNA EXPRESIÓN REGULAR
        //QUE SOLO PUEDAN VENIR NUMEROS CON CIERTA CANTIDAD DE
        //NUMEROS DECIMALES (0-2)
        if (!cantidad || cantidad.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({
                cantidad
            }))
        }
    };

    verificadorFecha = (fecha) => {
        if (fecha) {
            this.setState(() => ({
                fecha
            }));
        }
    };

    agregarGasto = (e) => {
        //PREVIENE QUE EL NAVEGADOR SE REFRESQUE AL MOMENTO DE PRESIONAR EL BOTÓN
        e.preventDefault();
        if (!this.state.cantidad || !this.state.descripcion) {
            //SI NO SE HA INGRESADO UNA CANTIDAD O DESCRIPCIÓN, SE MOSTRARA EL ERROR
            this.setState(() => ({ error: 'Favor agregar cantidad y descripción' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.agregarGasto({
                descripcion: this.state.descripcion,
                cantidad: parseFloat(this.state.cantidad, 10) * 100,
                creado: this.state.fecha.valueOf(),
                nota: this.state.nota
            })
        }
    }


    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.agregarGasto}>
                    <input
                        type='text'
                        placeholder='Descripción'
                        autoFocus
                        value={this.state.descripcion}
                        onChange={this.verificadorDescripcion}
                    />
                    <input
                        type='text'
                        placeholder='Cantidad'
                        value={this.state.cantidad}
                        onChange={this.verificadorCantidad}
                    />
                    <DatePicker
                        selected={this.state.fecha}
                        onChange={this.verificadorFecha}
                    />
                    <textarea
                        placeholder='Agrega una nota para el gasto (opcional)'
                        value={this.state.nota}
                        onChange={this.verificadorNota}
                    >
                    </textarea>
                    <button>Agregar gasto</button>
                </form>
            </div>
        )
    }
}
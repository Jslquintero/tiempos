import {createSlice}  from '@reduxjs/toolkit';

export const jugoSlice= createSlice({
    name: 'carrito',
    initialState: {
        value:{
            jugos: [],
            subTotal: 0,
            cliente: null,   
        }
    },
    reducers: {

        addJugo: {
            reducer: (state, action ) => {
                return {...state, values: {...state.value, jugos: action.payload}}
            }
        },

        eliminarJugo:{
            
            reducer: (state, action ) => {

                let index = action.payload;
                let listJugos = state.value.jugos;

                listJugos.filter(function(ele){
                    return ele.id !== index;
                })

                return {...state, values: {...state.value, jugos: listJugos}}
            }

           
        },

        addCliente:  {
           
            reducer: (state, action ) => {
                return {...state, values: {...state.value, cliente: action.payload}}
            }
        },

        eliminarCliente: {
            
            reducer: (state, action ) => {
                return {...state, values: {...state.value, cliente: action.payload}}
            }

        },
        sacarSubtotal: {
           
            reducer: (state, action ) => {
                return {...state, values: {...state.value, subTotal: action.payload}}
            }
        }
    }
});

export const {addJugo, eliminarJugo, addCliente, eliminarCliente} = jugoSlice.actions;

export const selectCarrito = (state) => state.carrito.value;

export default jugoSlice.reducer;
import {configureStore} from '@reduxjs/toolkit';
import jugoSlice from './jugoSlice';

export default configureStore({
    reducer: {
        carrito : jugoSlice
    }
});
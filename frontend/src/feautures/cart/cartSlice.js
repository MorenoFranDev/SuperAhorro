import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productos: JSON.parse(localStorage.getItem('productos')) || []
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add_cart: (state, action) => {
      const productoExistente = state.productos.find(producto => producto.id === action.payload.id);
      let productosActualizados;
      if (productoExistente) {
        productosActualizados = state.productos.map(producto =>
          producto.id === action.payload.id ? { ...producto, quantity: producto.quantity + 1 } : producto
        );
      } else {
        productosActualizados = [...state.productos, action.payload];
      }
      const newState = {
        ...state,
        productos: productosActualizados
      };
      localStorage.setItem('productos', JSON.stringify(productosActualizados));
      return newState;
    },
    remove_cart: (state, action) => {
      const productoAEliminar = state.productos.find(producto => producto.id === action.payload.id);
      let productosActualizados;
      if (parseInt(productoAEliminar.quantity) > 1) {
        productosActualizados = state.productos.map(producto =>
          producto.id === action.payload.id ? { ...producto, quantity: producto.quantity - 1 } : producto
        );
      } else {
        productosActualizados = state.productos.filter(producto => producto.id !== action.payload.id);
      }
      const newState = {
        ...state,
        productos: productosActualizados
      };
      localStorage.setItem('productos', JSON.stringify(productosActualizados));
      return newState;
    },
    delet_all: () => {
      localStorage.removeItem('productos');
      return { productos: [] }
    },
    get_quantity : (state, action)=>{
      const product = state.productos.find(producto => producto.id === action.payload.id);
      if(product) return {quantity: product.quantity}
    }
  },

})

export const { add_cart, delet_all, remove_cart,get_quantity } = cartSlice.actions

export default cartSlice.reducer



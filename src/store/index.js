import { createStore } from "vuex";
import { products } from "@/producs";

export default createStore({
  state: {
    cart: products,
  },
  getters: {
    cartTotal(state) {
      let summ = 0;
      state.cart.forEach((item) => {
        summ += item.price * item.quantity;
      });
      return Number(summ.toFixed(2));
    },
  },
  mutations: {
    removeFromCart(state, id) {
      state.cart = state.cart.filter((i) => i.id !== id);
    },
    changeQuantity(state, { id, quantity }) {
      const item = state.cart.find((i) => i.id === id);
      item.quantity = quantity;
    },
  },
  actions: {},
  modules: {},
});

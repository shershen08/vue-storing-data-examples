import { defineStore } from "pinia";
import { products } from "@/producs";

const TAX_VALUE = 1.05;
const DELIVERY_COST = 15;

export const useCartStore = defineStore("counter", {
  state: () => ({
    cart: products,
  }),
  actions: {
    removeFromCart(id) {
      this.cart = this.cart.filter((i) => i.id !== id);
    },
  },
  getters: {
    cartTotal() {
      let summ = 0;
      this.cart.forEach((item) => {
        summ += item.price * item.quantity;
      });
      return Number(summ.toFixed(2));
    },
    cartTotalPlusTax() {
      return Number(this.cartTotal * TAX_VALUE).toFixed(2);
    },
    cartGrandTotalPlusTax() {
      return Number(this.cartTotalPlusTax + DELIVERY_COST).toFixed(2);
    },
  },
});

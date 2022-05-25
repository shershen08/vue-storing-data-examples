import { defineStore } from "pinia";
import { products, product3 } from "@/producs";

const TAX_VALUE = 1.05;
const DELIVERY_COST = 15;

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: products,
  }),
  actions: {
    removeFromCart(id) {
      this.cart = this.cart.filter((i) => i.id !== id);
    },
    addProduct() {
      this.cart = [...this.cart, product3];
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
    cartTotalNumPlusTax() {
      return Number(this.cartTotal * TAX_VALUE).toFixed(2);
    },
    cartGrandTotalPlusTax() {
      return Number(this.cartTotalPlusTax + DELIVERY_COST).toFixed(2);
    },
  },
});

// export function myPiniaPlugin(context) {
//   console.log('Pinia store chaged: ', context.store)
// }

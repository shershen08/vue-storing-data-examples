import { defineStore } from "pinia";
import { products, product3 } from "@/producs";

import { useUserStore } from "@/pinia/user";

const TAX_VALUE = 1.05;
const DELIVERY_COST = 15;
export const DISCOUNT = {
  BASIC: {
    label: "0",
    math: 1,
  },
  PREMIUM: {
    label: "10%",
    math: 0.9,
  },
};

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
    refillCart() {
      this.$reset();
    },
    clearCart() {
      this.$patch({
        cart: [],
      });
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
    cartGrandTotalPlusTaxSubstractDiscount() {
      const user = useUserStore();
      let value = this.cartTotalNumPlusTax;
      if (user.userStatus) {
        const discount = DISCOUNT[user.userStatus].math;
        value = value * discount;
      }
      return Number(value + DELIVERY_COST).toFixed(2);
    },
  },
});

export function myPiniaPlugin(context) {
  console.log("Pinia store chaged: ", context.store);
}

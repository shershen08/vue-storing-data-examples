<template>
  <h1>Shopping Cart</h1>
  <div class="shopping-cart">
    <div class="column-labels">
      <label class="product-image">Image</label>
      <label class="product-details">Product</label>
      <label class="product-price">Price</label>
      <label class="product-quantity">Quantity</label>
      <label class="product-removal">Remove</label>
      <label class="product-line-price">Total</label>
    </div>

    <div class="product" v-for="p in store.cart" :key="p.id">
      <div class="product-image">
        <img :src="p.image" />
      </div>
      <div class="product-details">
        <div class="product-title">{{ p.title }}</div>
      </div>
      <div class="product-price">{{ p.price.toFixed(2) }}</div>
      <div class="product-quantity">
        <input
          type="number"
          min="1"
          v-model="p.quantity"
          @change="changeQuantity(p.id)"
        />
      </div>
      <div class="product-removal">
        <button class="remove-product" @click="remove(p.id)">Remove</button>
      </div>
      <div class="product-line-price">{{ p.price * p.quantity }}</div>
    </div>

    <div class="totals" v-if="store.cartTotal > 0">
      <div class="totals-item">
        <label>Subtotal</label>
        <div class="totals-value" id="cart-subtotal">{{ store.cartTotal }}</div>
      </div>
      <div class="totals-item">
        <label>Tax (5%)</label>
        <div class="totals-value" id="cart-tax">
          {{ store.cartTotal * TAX_VALUE }}
        </div>
        <!-- <div class="totals-value" id="cart-tax">{{ store.cartTotalPlusTax }}</div> -->
      </div>
      <div class="totals-item">
        <label>Shipping</label>
        <div class="totals-value" id="cart-shipping">{{ DELIVERY_COST }}</div>
      </div>
      <div class="totals-item totals-item-total">
        <label>Grand Total</label>
        <div class="totals-value" id="cart-total">
          {{ store.cartTotal * TAX_VALUE + DELIVERY_COST }}
        </div>
        <!-- <div class="totals-value" id="cart-total">
          {{ store.cartGrandTotalPlusTax }}
        </div> -->
      </div>
    </div>

    <button class="checkout" v-if="store.cartTotal > 0">Checkout</button>
  </div>
</template>

<script>
import { useCartStore } from "@/pinia/cart";

export default {
  setup() {
    const store = useCartStore();
    const TAX_VALUE = 1.05;
    const DELIVERY_COST = 15;

    // const cartTotal = computed(() => store.getters.cartTotal);
    // const products = computed(() => store.state.cart);

    const remove = (id) => {
      store.removeFromCart(id);
    };

    const changeQuantity = (id) => {
      console.log(id);
    };

    return {
      store,
      TAX_VALUE,
      // products,
      // cartTotal,
      remove,
      // cartTotalPlusTax,
      changeQuantity,
      // cartGrandTotalPlusTax,
      DELIVERY_COST,
    };
  },
};
</script>

<style></style>

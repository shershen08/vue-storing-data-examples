<template>
  <UserProfile />
  <button class="checkout" @click="store.addProduct">Add 3rd product</button>

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

    <ProductItem
      :p="p"
      v-for="p in store.cart"
      :key="p.id"
      @remove="store.removeFromCart"
    />

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
      <div class="totals-item" v-if="user.userStatus">
        <label>Customer dicsount</label>
        <div>{{ DISCOUNT[user.userStatus].label }}</div>
      </div>
      <div class="totals-item client">
        <label>Shipping</label>
        <div class="totals-value" id="cart-shipping">{{ DELIVERY_COST }}</div>
      </div>
      <div class="totals-item totals-item-total">
        <label>Grand Total</label>
        <div class="totals-value" id="cart-total" v-if="user.userStatus">
          local:
          {{
            DISCOUNT[user.userStatus].math * store.cartTotal * TAX_VALUE +
            DELIVERY_COST
          }}
          getter: {{ store.cartGrandTotalPlusTaxSubstractDiscount }}
        </div>
        <!-- <div class="totals-value" id="cart-total">
          {{ store.cartTotal * TAX_VALUE + DELIVERY_COST }}
        </div> -->
        <div class="totals-value" id="cart-total">
          {{ store.cartGrandTotalPlusTax }}
        </div>
      </div>
    </div>
    <div class="totals" v-else>Cart is empty</div>

    <button @click="store.clearCart">clear cart</button>
    <button @click="store.refillCart">refil cart</button>
    <button class="checkout" v-if="store.cartTotal > 0">Checkout</button>
  </div>
</template>

<script>
import { useCartStore, DISCOUNT } from "@/pinia/cart";
import { useUserStore } from "@/pinia/user";
import UserProfile from "./UserProfile.vue";
import ProductItem from "./ProductItem.vue";
// import { useUserStore } from "@/pinia/user";
// import {mapStores, mapActions} from 'pinia'

export default {
  setup() {
    const store = useCartStore();
    const user = useUserStore();
    // const user = useUserStore();
    const TAX_VALUE = 1.05;
    const DELIVERY_COST = 15;

    const changeQuantity = (id) => {
      console.log(id);
    };

    return {
      store,
      TAX_VALUE,
      changeQuantity,
      DELIVERY_COST,

      // discount
      user,
      DISCOUNT,
    };
  },
  components: {
    UserProfile,
    ProductItem,
  },
  //
  // Vue2 style
  //
  // methods: {
  //   ...mapState(storename, ['cart'])
  // },
  // computed: {
  //   ...mapActions(storename, ['actionname']),
  // }
};
</script>

<style></style>

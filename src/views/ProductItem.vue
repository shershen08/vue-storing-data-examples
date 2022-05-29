<template>
  <div class="product">
    <div class="product-image">
      <img :src="p.image" />
    </div>
    <div class="product-details">
      <div class="product-title">{{ p.title }}</div>
    </div>
    <div class="product-price">{{ p.price.toFixed(2) }}</div>
    <div class="product-quantity">
      <input type="number" min="1" v-model="p.quantity" />
      <!-- @update
          @change="$emit('update:modelValue')" -->
    </div>
    <div class="product-removal">
      <button class="remove-product" @click="$emit('remove', p.id)">
        Remove
      </button>
    </div>
    <div class="product-line-price">{{ p.price * p.quantity }}</div>
  </div>
</template>

<script>
export default {
  props: ["p"],
};
</script>

<style></style>

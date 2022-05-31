<template>
  <h2>Products</h2>
  {{ products }}
</template>

<script>
import { onMounted, reactive } from "vue-demi";
import { getProducts } from "@/services/product";

export default {
  setup() {
    const products = reactive({
      loading: false,
      data: [],
      error: false,
    });

    onMounted(() => {
      products.loading = true;
      getProducts().then((data) => {
        products.data = data;
        products.loading = false;
      });
    });

    return {
      products,
    };
  },
};
</script>

<style></style>

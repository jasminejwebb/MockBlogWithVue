<template>
<div>
  <ProductList :products="products" />
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Browse',
  components: {
    ProductList
  },
  computed: {
    products() {
      return this.$root.$data.cart;
    }
  },
}
</script>
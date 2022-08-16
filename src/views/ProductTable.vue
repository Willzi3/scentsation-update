<template>
      <div v-if="products" class="prods">
   
  <ProductCard class="card"
   v-for="product in products" 
   :key="product.product_id" 
   :product="product"/>

  </div>
</template>
<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  computed: {
    products() {
      return this.$store.state.products
    },
  },
  components: { ProductCard },
  mounted() {
    this.$store.dispatch("getProducts");
  }
};
</script>
<style scoped>
.container{
  height: 86vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>

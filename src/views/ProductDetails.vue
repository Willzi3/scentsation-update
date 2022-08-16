<template>
<div class="container">
    <div v-if="products" class="prod">
       <img :src="products.image">
       <p>Name:{{ products.name}}</p>
       <p>Price:R{{ products.price}}</p>
       <p>{{ products.category}}</p>
       <button>Buy</button>
    </div>
</div>
</template>
<script>
export default {
   props: ["id"],
   computed: {
    products() {
        return this.$store.state.product;
    },
   },
   mounted() {
    this.$store.dispatch("getProduct", this.$route.params.id)
   }
}
</script>
<style scoped>
.container{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.prod{
box-shadow: 5px 5px 5px 5px lightsalmon;
width: 500px;
height: 600px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

}
.prod img{
    width: 400px;
    height: 400px;
}
.prod p {
    font-size: 2rem;
    color: salmon;
   font-family: 'Rubik Distressed';
}
.prod button{
    width: 200px;
    height: 30px;
    border: none;
    border-radius: 10px;
}
.prod button:hover{
    background: salmon;
    color: white;
    cursor: pointer;
}

    
</style>
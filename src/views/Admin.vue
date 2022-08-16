<template>
  <div class="container">
    <div class="select">
        <router-link to="/user-table"><div class="box1">Users</div></router-link>
        <router-link to="/product-table"><div class="box2">Products</div></router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    height: 86vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.select {
    display: flex;
    gap: 20px;
}
.select a {
    text-decoration: none;
    color: black;
}

.box1{
    width: 200px;
    height: 200px;
    box-shadow: 5px 5px 5px 5px lightsalmon;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Rubik Distressed';
    letter-spacing: 2px;

}
.box1:hover{
    box-shadow: 5px 5px 5px 5px salmon;
    background: lightsalmon;
    font-size: 2rem;
    font-weight: bold;
    color: white;
}
.box2{
    width: 200px;
    height: 200px;
    box-shadow: 5px 5px 5px 5px salmon;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Rubik Distressed';
    letter-spacing: 2px;
}
.box2:hover{
    box-shadow: 5px 5px 5px 5px lightsalmon;
    background: salmon;
    font-size: 2rem;
    font-weight: bold;
    color: white;
}
</style>
<template>
  
   <div class="container">
     <table>
        <thead>
            <th>Name</th>
             <th>Product_id</th>
              <th>name</th>
               <th>price</th>
               <th>descriptions</th>
               <th>image</th>
               <th>category</th>
               <th>create_date</th>
               <th>stock</th>
        </thead>
        <tbody>
            <tr>
                <td><p>{{ product.product_id}}</p></td>
                <td>{{product.name}}</td>
                <td>{{product.name}}</td>
                <td>{{product.name}}</td>
                <td><img :src="product.image" /></td>
                <td>{{product.category}}</td>
                <td>{{product.create_date}}</td>
                <td>{{product.stock}}</td>
                <td>edit</td>
                <td>delete</td>
            </tr>
        </tbody>
    </table>
   </div>

</template>
<script>
export default {
  props: ["product"],
};
</script>
<style>


table td img{
    height: 50px;
    width: 50px;
}
.product_price{
  margin: none;
}

table{
    border: 1px solid black;
}
td{
    border: 1px solid black;
}


</style>

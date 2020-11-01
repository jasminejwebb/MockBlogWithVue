<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
        <p>{{product.country}}</p>
      </div>
      <div class="image">
        <img :src="'/images/products/'+product.image">
      </div>
      <div class="price">
        <h2>${{product.price}}</h2>
        <button @click="addToCart(product)" class="auto">Add to Cart</button>
      </div>
      <div class = "quantity">
        <h3>Quantity in cart: {{product.quantity}}</h3>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CartList',
  props: {
    products: Array
  },
  methods: {
    addToCart(product) {
      let temp = false; 
      for(let item of this.$root.$data.cart)
      {
        if(product.id == item.id)
        {
          item.quantity = item.quantity + 1; 
          temp = true; 
        }
      }
      if(!temp)
      {
        this.$root.$data.cart.push(product);
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product{
  margin: 10px;
  margin-top: 25;
  width: 200px;
  object-fit: cover;
}
.quantity{
    text-align: center;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
<template>
<div>
  <CartList :products="products" />
  <h1 class = "empty">{{getCart}}</h1>
</div>
</template>

<script>
import CartList from "../components/CartList.vue"
export default {
  name: 'Cart',
  components: {
    CartList
  },
  computed: {
    products() {
      return this.$root.$data.cart;
    },
    getCart() {
      let message = "Test"; 
      let total = Number(0); 

      if(this.$root.$data.cart.length == 0)
      {
        message = "The cart is empty."
      }
      else{
        for(let item of this.$root.$data.cart)
        {
          total = (total + item.price*item.quantity).toFixed(2); 
        }
        message = total; 
      }
      return message; 
    }
  },
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

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
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

.empty{
  text-align: center;
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
<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="recipe in recipes" :key="recipe.name">
      <div class="info">
        <h1>{{recipe.title}}</h1>
      </div>
      <div class="post">
        <h3>{{recipe.tldr}}</h3>
      </div>
      <div class = "post">
        <ul>
          <div v-for="ingredient in recipe.ingredients" :key="ingredient" class = "ingredients"><li>{{ingredient}}</li></div>
        </ul>
        <ol>
          <div v-for="instructions in recipe.instructions" :key="instructions" class = "ingredients"><li>{{instructions}}</li></div>
        </ol>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'RecipeList',
  props: {
    recipes: Array
  },

}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: left;
  justify-content: left;
  margin: 50px 100px;
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
  background: #06174e;
  color: #ffffff;
  padding: 10px 30px;
}

.info h1 {
  font-size: 2em;
  text-align: center;
}

.info h2 {
  font-size: 1em;
  text-align: center;
}
.post h3 {
  font-size: 1em;
  text-align: left;
  font-style: italic;
  padding: 1em;
}
.post ul, 
.post ol {
  margin: 5%;
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
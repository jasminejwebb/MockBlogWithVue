<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="post in posts" :key="post.title">
      <div class="info">
        <h1>{{post.title}}</h1>
        <h2>{{post.author}}</h2>
      </div>
      <div class="post">
        <h3>{{post.tldr}}</h3>
      </div>
      <div class = "post">
        <p>{{post.post}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'BlogList',
  props: {
    posts: Array
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
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
  height: 5em;
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
  text-align: center;
  font-style: italic;
  padding: 1em;
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
<template>
<div id="app">
  <app-header>
  <div id="menu">
    <div id="brand">
      <router-link to="/">
      <p>JASMINE'S RECIPES</p>
      </router-link>
    </div>
  </div>
  <div id = "menu">
    <div id="side">
      <router-link to="/">
        <div class="menu-item browse">
          <p>Home</p>
        </div>
      </router-link>
      <router-link to="/blog">
        <div class="menu-item browse">
          <p>Blog</p>
        </div>
      </router-link>
      <router-link to="/recipes">
        <div class="menu-item">
          <p>Recipes</p>
        </div>
      </router-link>
    </div>
  </div>
  </app-header>
  <router-view></router-view>
  <app-footer>
    
    <footer class = "footer">
        <div>Created By: Jasmine Webb</div>
        <div>
          <a class="source-link" href="https://github.com/jasminejwebb/MockBlogWithVue">GitHub Repository</a>
        </div>
    </footer>
  </app-footer>
</div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    numberOfItems() {
      let numItems = 0; 
      for(let item of this.$root.$data.cart)
      {
        numItems += item.quantity;  
      }
      return numItems;
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

#menu {
  display: flex;
  align-items: left;
  padding-left: 5em; 
  background-color: #06174e;
}

#menu a {
  color: #f7f9fd;
  text-decoration: none;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: left;
  font-size: 2em;
  text-transform: capitalize;
  font-weight: bolder;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-front;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
  padding-bottom: 1em;
}

.footer {
    background-color: #bbbbbb;
    border-top: 1px black;
    margin: 0px 0px;
    margin-bottom: 0;
    display: flex; 
    justify-content: space-between;
}
.footer > div {
  margin: .5em; 
  padding: auto; 
}

body {
    color: #06174e;
    background-color: #ffffff;
    font-size: 18px;
    font-family: "Segoe UI", "Arial Regular", sans-serif;
}

.bg-dark {
    background-color: #3f3f3f !important;
}

.bg-light {
    background-color: #89b0ae !important;
}

</style>

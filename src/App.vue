<template>
<div id="app">
  <app-header>
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="/images/logo.png">
      </router-link>
    </div>
    <div id="side">
      <router-link to="/browse">
        <div class="menu-item browse">
          <img src="/images/globe.png">
          <p>Browse</p>
        </div>
      </router-link>
      <router-link to="/cart">
        <div class="menu-item">
          <img src="/images/love.png">
          <p>{{numberOfItems}} items</p>
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
          <a class="source-link" href="https://github.com/BYU-CS-260-Winter-2020/lab-3b-grocery-store-jasminejwebb">GitHub Repository</a>
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

.footer {
    background-color: #F2921D;
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
</style>

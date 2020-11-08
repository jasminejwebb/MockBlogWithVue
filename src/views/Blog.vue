<template>
<div>
  <div class="wrapper">
    <div class="circle">Blog</div>
  </div>
  <BlogList :posts="posts" />
</div>
</template>

<script>
import BlogList from "../components/BlogList.vue"
export default {
  name: 'Blog',
  components: {
    BlogList
  },
  computed: {
    posts() {
      return this.$root.$data.posts;
    }
  },

}
</script>
<style scoped>
.wrapper {
  margin: 50px 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
  
}
.circle {
  width: 7em;
  height: 7em;
  line-height: 7em;
  border-radius: 50%;
  font-size: 2em;
  color: #fff;
  text-align: center;
  background: #06174e;
  font-style: italic;
}
</style>
<template>
  <nav class="navbar">
    <router-link
      tag="a"
      :to='url'
    >
      <h1>Monitoring tools</h1>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    url: '/'
  })


}
</script>

<style scoped>
.navbar{
  background: #790e8b;
  height: 50px;
  text-align: center;

}
h1{
  margin: 0;
  line-height: 50px;
  color: #fff;
  text-transform: uppercase;
}
a{
  text-decoration: none;
}
</style>
<template>
  <div class="all-wrap">
    <div class="link-wrap">
      <router-link
          class="link"
          v-for="link in links"
          :key="link.url"
          active-class="active"
          :to="link.url"
          :exact="link.exact"
      >
        <i :class="link.img"></i>
        <a href="#" class="link-tool">{{link.title}}</a>
      </router-link>
    </div>
  </div>


</template>

<script>
export default {
  name: "Link",
  data: () => ({
    links: [
      {img: 'fi-rr-dollar', title: 'Salary', url: '/salary'},
      {img: 'fi-rr-dashboard', title: 'Over speed', url: '/overSpeed'},
      {img: 'fi-rr-time-forward-ten', title: 'Converting time', url: '/convertingTime'},
    ]
  })
}
</script>

<style scoped>
.all-wrap{
  display: flex;
  justify-content: center;
}
.link-wrap{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 650px;
}
.link{
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 300px;
  height: 150px;
  border-radius: 15px;
  margin: 5px;
  justify-content: center;
  font-size: 2vw;
  transition: .1s;
}
.link:hover{
  border: 3px solid #790e8b;
  box-shadow: 0 0 20px rgba(193,88,220,0.5);
}
a{
  text-decoration: none;
  color: black;
}
</style>
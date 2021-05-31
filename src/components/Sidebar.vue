<template>
  <div class="sidebar">
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
      </router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: "Sidebar",
  data: () => ({
    links: [
      // {img: 'fi-rr-home', url: '/'},
      {img: 'fi-rr-dollar', url: '/salary'},
      {img: 'fi-rr-dashboard', url: '/overSpeed'},
      {img: 'fi-rr-time-forward-ten', url: '/convertingTime'},
      // {img: 'fi-rr-time-add', url: '/plusTime'},
      {img: 'fi-rr-text', url: '/phrasesPage'},

    ]
  })
}
</script>

<style scoped>
.sidebar{
  position: absolute;
  width: 50px;
  display: flex;
  flex-direction: column;
}
.link{
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 0 15px 15px 0;
  margin: 10px 0 10px 0;
  font-size: 2vw;
  height: 50px;
  transition: .1s;
}
.link:hover{
  border-right: 3px solid #c158dc;
  box-shadow: 0 0 20px rgba(193, 88, 220,0.5);
}
a{
  text-decoration: none;
  color: #790e8b;
}
a:active{
  color: #c158dc;
}
i{
  margin-bottom: -5px;
}
.active{
  border-right: 3px solid  #c158dc;
  box-shadow: 0 0 20px rgba(193,88,220,0.5);
  color: #c158dc;
}
</style>
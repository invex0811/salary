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
        <div class="wrap-toogl">
          <i :class="link.img"></i>
<!--          <span v-if="showToogl" class="title">{{link.title}}</span>-->
        </div>

      </router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: "Sidebar",
  data: () => ({
    // links: [
    //   // {img: 'fi-rr-home', url: '/'},
    //   {img: 'fi-rr-dollar', url: '/salary'},
    //   {img: 'fi-rr-dashboard', url: '/overSpeed'},
    //   {img: 'fi-rr-time-forward-ten', url: '/convertingTime'},
    //   {img: 'fi-rr-time-add', url: '/plusTime'},
    //   {img: 'fi-rr-text', url: '/phrasesPage'},
    //
    //
    // ]
    showToogl: false,
    links: [
      {img: 'fi-rr-dollar', title: 'Salary', url: '/salary'},
      {img: 'fi-rr-dashboard', title: 'Over speed', url: '/overSpeed'},
      {img: 'fi-rr-time-forward-ten', title: 'Converting time', url: '/convertingTime'},
      {img: 'fi-rr-time-add', title: 'Plus time' , url: '/plusTime'},
     // {img: 'fi-rr-text',title: 'Phrases', url: '/phrasesPage'},
      {img: 'fi-rr-marker',title: 'Map USA', url: '/mapUSA'},
    ]
  })
}
</script>

<style scoped>
.sidebar{
  position: absolute;
  width: 50px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.link{
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 0 10px 10px 0;
  margin: 10px 0 10px 0;
  font-size: 2vw;
  height: 50px;
  padding: 0 5px;
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
.wrap-toogl{
  display: flex;
  align-items: center;
}
.title{
  position: absolute;
  font-size: 1vw;
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
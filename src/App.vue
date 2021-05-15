<template>
  <component :is="layout">

    <router-view/>
  </component>

</template>

<script>
import LayoutWithNavbar from "@/Layout/LayoutWithNavbar";
import MainLayout from "@/Layout/MainLayout";
export default {
  components:{
    LayoutWithNavbar,MainLayout
  },
  computed:{
    layout(){
      return (this.$route.meta.layout || 'LayoutWithNavbar')
    }
  }
}
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
*{
  font-family: 'Roboto', sans-serif;
}
body{
  box-sizing: border-box;
  margin: 0;
  background: #e0e0e0;
}
h2{
  font-size: 40px;
  text-transform: uppercase;
}
input[type="number"]{
  height: 46px;
  border: none;
  background: #FFFFFF;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 23px;
  font-size: 24px;
  padding-left: 20px;
  margin: 5px;
  outline: none;
}
input:focus{
  box-shadow: 0 0 5px #000;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
button{
  width: 286px;
  height: 46px;
  font-size: 18px;
  line-height: 46px;
  cursor: pointer;
  border: none;
  background: #c7c7c7;
  border-radius: 23px;
  margin: 5px 0;
  outline: none;
}
button:hover{
  background-color:  #c158dc;
  transition: .5s;
  color: #fff;
}
button:focus{
  box-shadow: 0 0 5px #000;
}
</style>

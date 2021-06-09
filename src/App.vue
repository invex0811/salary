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
  overflow: hidden;
}
h2{
  font-size: 40px;
  text-transform: uppercase;
}
input[type="number"], input[type="text"]{
  height: 46px;
  border: none;
  background: #FFFFFF;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
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
  width: 280px;
  height: 46px;
  font-size: 18px;
  line-height: 46px;
  cursor: pointer;
  border: none;
  background: #c7c7c7;
  border-radius: 10px;
  margin: 10px 0;
  outline: none;
}
button:hover{
  background-color: #c158dc;
  transition: .3s;
  color: #fff;
}
button:focus{
  box-shadow: 0 0 5px #c158dc;
}

/*toggle checkbox*/

.label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.label-text {
  margin-left: 5px;
}

.toggle {
  position: relative;
  height: 20px;
  width: 40px;
  border-radius: 5px;
  overflow: hidden;
  background: rgba(167, 103, 198, .4);
}

.toggle-state {
  display: none;
}

.indicator {
  height: 100%;
  width: 200%;
  background: #c7c7c7;
  border-radius: 5px;
  transform: translate3d(-75%, 0, 0);
  transition: transform 0.3s cubic-bezier(0.85, 0.05, 0.18, 1.35);
}

.toggle-state:checked ~ .indicator {
  transform: translate3d(25%, 0, 0);
  background-color: #c158dc;
}

/*end*/
</style>

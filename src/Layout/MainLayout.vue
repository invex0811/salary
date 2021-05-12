<template>
  <Navbar/>
  <Sidebar/>


  <router-view/>
</template>

<script>
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default {
  name: "MainLayout",
  components: {Sidebar, Navbar},
}
</script>

<style >

</style>
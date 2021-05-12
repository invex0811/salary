<template>
  <Navbar/>
  <router-view/>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "LayoutWithNavbar",
  components: {Navbar}
}
</script>

<style scoped>

</style>
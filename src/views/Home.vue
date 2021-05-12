<template>
  <div class="home">
    <h2>Choose a tools</h2>
  <Link/>
  </div>
  <router-view/>
</template>

<script>
import Link from "@/components/Link";
export default {
  name: 'Home',
  components: {Link}
  }
</script>

<style scoped>
.home{
  padding-top: 50px;
  text-align: center;
}


</style>

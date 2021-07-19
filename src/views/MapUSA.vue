<template>
  <div class="wrap-page__mapUSA">
    <h2>Map USA</h2>
    <div id="map">

    </div>
  </div>
</template>

<script>
export default {
  name: "MapUSA",
  data(){
    return{

    }
},
  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', '../MapUSAJS/mapdata.js')
    document.head.appendChild(recaptchaScript)
    recaptchaScript.setAttribute('src', '../MapUSAJS/usmap.js')
    document.head.appendChild(recaptchaScript)
  }
}
</script>

<style scoped>
.wrap-page__mapUSA{
  display: flex;
  flex-direction: column;
  align-items: center;

}
</style>
<template>
  <div class="phrases-wrap">
    <h2>Phrases</h2>
    <div class="frame-wrap">
      <iframe  src="https://docs.google.com/document/d/13uRnmEr3e5_itPvrjIN4eZXV261LpUNfFIuDL4H4Fto/edit" name="iframe" scrolling="auto"> </iframe>
      <p>Taken from: <a target="_blank" href="https://docs.google.com/document/d/13uRnmEr3e5_itPvrjIN4eZXV261LpUNfFIuDL4H4Fto/edit">Phrases monitoring</a></p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "PhrasesPage"
}
</script>

<style scoped>
h2 {
  margin: 10px;
}
.phrases-wrap{
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.frame-wrap{
  width: 80%;
  height: 90%;
}
iframe{
  width: 100%;
  height: 100%;
}

</style>
<template>
  <div class="timeToTenth">
    <h3>Time to tenth</h3>
    <div class="wrapperInput">
      <input @keyup.enter='convertToTime' type="number" v-model.number="hours" placeholder="Hours"/>
      <b style="font-size: 30px;">:</b>
      <input @keyup.enter='convertToTime' type="number" v-model.number="minutes" placeholder="Minutes"/>
    </div>
    <button @click='convertToTime'>OK</button>
    <span>{{ answer }}</span>
  </div>
</template>

<script>
export default {
  name: "TimeToTenth",
  data() {
    return {
      hours: '',
      minutes: '',
      answer: ''
    }
  },
  methods:{
    convertToTime(){
      let minuteTime = this.minutes / 60;
      return this.answer = this.hours + minuteTime
    }
  }
}
</script>

<style scoped>
span{
  font-size: 30px;
}
.timeToTenth{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h3{
  font-size: 30px;
}
</style>
<template>
  <div class="over-speed">
    <h2>Over speed</h2>
    <div class="time">
      <input type="number" v-model.number="timeHours" placeholder="Hours"><b style="font-size: 30px;">:</b>
      <input type="number" v-model.number="timeMinutes" placeholder="Minutes">
    </div>
    <div class="mile">
      <input type="number" id="mile" v-model.number="miles" placeholder="Miles">
    </div>
    <button @click="calcSpeed()">
      OK
    </button>
    <div class="speed">
     <span v-if="timeHours > 0" :class="{'redSpeed' : overSpeed > 95}">{{'Speed: ' + speed}}</span>
    </div>
  </div>
  <router-link
      tag="div"
      class="speedList"
      :to="url"
      title='Coming soon'

  >

    <i  class="fi-rr-document"></i>
 </router-link>
  <router-view/>
</template>

<script>
export default {
  name: "OverSpeed",
  data: () => ({
    url: '/speedList',
    timeHours: '',
    timeMinutes: '',
    miles: '',
    totalTime: '',
    overSpeed: '',

  }),
  methods:{
    calcSpeed() {
      this.totalTime = this.timeHours + (this.timeMinutes / 60)
      this.speed = this.miles / this.totalTime
      this.overSpeed = Number(this.speed)
      this.speed = this.speed.toFixed(2) + ' mph'
    }
  },

}
</script>

<style scoped>

.over-speed{
  display: flex;
  flex-direction: column;
  align-items: center;
}
input[type="number"]{
  width: 100px;
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
span{
  font-size: 30px;
}
.redSpeed{
  color: red;
}
.speedList{
  position: absolute;
  right: 10px;
  top: 60px;
  font-size: 30px;
  text-decoration: none;
}
.speed{
  margin-top: 20px;
}
</style>
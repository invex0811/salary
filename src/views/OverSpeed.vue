<template>
  <div class="over-speed">
    <h2>Over speed</h2>
    <div class="time">
      <input type="number" v-model.number="timeHours" placeholder="Hours"><b style="font-size: 30px;">:</b>
      <input type="number" v-model.number="timeMinutes" placeholder="Minutes">
    </div>
    <div class="mile">
      <input type="number" id="mile" v-model.number="miles" placeholder="Miles">
      <span v-if="checkSecondMiles"> - <input  type="number" id="secondMile" v-model.number="secondMiles" placeholder="Miles"></span>
    </div>
    <div class="wrap-checkbox">
      <label for="checkSecondMiles"><input id="checkSecondMiles" type="checkbox" v-model="checkSecondMiles">2 miles</label>
    </div>
    <button @click="calcSpeed">
      OK
    </button>
    <div class="speed">
     <span :class="{'redSpeed' : redSpeed > 95}">{{  inputValue }}</span>
    </div>
  </div>
  <div class="speedList">

    <i class="fi-rr-document" @click="showModal" title="Speed list" ></i>
  </div>

  <SpeedList ref="modal"/>
  <router-view/>
</template>

<script>
import SpeedList from "@/views/SpeedList";

export default {
  name: "OverSpeed",
  components: {SpeedList},
  data() {
    return{
      timeHours: '',
      timeMinutes: '',
      miles: '',
      secondMiles:'',
      timeToTenth: '',
      overSpeed: '',
      inputValue: '',
      redSpeed: '',
      checkSecondMiles: false,
    }
  },
  methods:{
    calcSpeed() {
      this.timeToTenth = this.timeHours + (this.timeMinutes / 60)
      if (this.timeHours || this.timeMinutes ? 0 : 1 === 0)
        this.inputValue = "Input all values"
      else if (this.miles <= 0)
        this.inputValue = "Input all values"
      else
      if (this.checkSecondMiles === false)
        this.inputValue = this.miles / this.timeToTenth
      else
        this.inputValue = (this.miles - this.secondMiles ) / this.timeToTenth
      this.redSpeed = this.inputValue
      this.inputValue = 'Speed: ' + this.inputValue.toFixed(2)
    },
    showModal(){
      return this.$refs.modal.show = true
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
  right: 20px;
  top: 70px;
  font-size: 30px;
  text-decoration: none;
  cursor: pointer;
  color: #790e8b;
  text-align: center;
}
.speedList:hover{
  color: #c158dc;
  transition: .3s;
}
.speed{
  margin-top: 20px;
}
.span-speed-list{
  display: block;
  font-size: 20px;
  text-align: center;
}

</style>
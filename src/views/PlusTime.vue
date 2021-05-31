<template>
  <div class="wrap-plusTime">
    <h2>Plus time</h2>
    <div class="wrap-navigation">
      <input type="number" v-model.number="hours" placeholder="Hours"> :
      <input type="number" v-model.number="minutes" placeholder="Minutes">
      <button class="wrap-button" @click="addTime">
        +
      </button>
    </div>
    <div class="wrap-list">
      <ul>
      <li
        v-for="view in viewList"
        :key="view"
      >
        {{view}}</li>
      </ul>
    </div>
    <div class="result">
      {{totalTime}}
    </div>
  </div>
</template>

  <router-view/>
<script>
export default {
  name: "PlusTime",

  data() {
    return {
      hours: '',
      minutes:'',
      time: '',
      listTime:[],
      totalTime: '',
      viewList: [],
      viewTime: ''
    }
  },
  methods:{
    addTime() {
      // this.viewListTime.listHours = this.hours
      // this.viewListTime.listMinutes = this.minutes
      this.minutes = this.minutes / 60
      this.viewTime = this.hours + (this.minutes *  60)
      this.viewList.push(this.viewTime)
      this.time = this.hours + this.minutes
      this.listTime.push(this.time)

      this.totalTime = this.listTime.reduce( (a,b) => a +b )
      return  this.time = ''
    }
  }

}

</script>

<style scoped>
  .wrap-plusTime{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .wrap-navigation{
    display: flex;
    align-items: center;
  }
  .wrap-button{
    width: 46px;
    font-size: 20px;
  }

</style>
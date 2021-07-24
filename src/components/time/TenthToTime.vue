<template>
  <div class="tenthToTime">
      <h3>Tenth to time</h3>
      <input @keyup.enter='plusDec' type="number" v-model.number="a" placeholder="Number"/>
      <v-btn
        class="btn"
        color="primary"
        @click='plusDec'
      >
        OK
      </v-btn>
      <span>{{ answer }}</span>
  </div>
</template>

<script>
export default {
  name: "TenthToTime",
  data() {
    return {
      a:'',
      answer: '',
    }
  },
  methods:{
    plusDec(){
      let ostatoc;
      ostatoc = this.a % 1
      console.log('ostatoc:'+ostatoc);
      let hours = this.a - ostatoc
      console.log('hours:'+hours);
      let convertMinute = Math.round(ostatoc * 60)
      console.log('convertMinute:'+convertMinute);
      return this.answer = hours +':'+ convertMinute
    }
  }
}
</script>

<style scoped>
  span{
    font-size: 30px;
  }
  .tenthToTime{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h3{
    font-size: 30px;
  }
</style>
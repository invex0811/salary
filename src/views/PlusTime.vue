<template>
  <div class="wrap-plusTime">
    <h2>Plus time</h2>
    <div class="wrap-input">
      <input @keyup.enter="calculateTime" type="number" v-model.number='hours' placeholder="Hours">
      <b style="font-size: 30px;">:</b>
      <input @keyup.enter="calculateTime" type="number" v-model.number='minutes' placeholder="Minutes" >
    </div>

    <button @click='calculateTime'>OK</button>
    <div class="wrap-result">
      <ol >
        <li v-for='(time,id) in timelistView' :key='time.time'>{{time}}
          <button
              class="closeBTN"
              @click="timelistView.splice(id,1),
              timelist.splice(id,1) "
          >
            Delete
          </button>
        </li>
      </ol>
      <span v-if="times > 0">Total hours: {{calcTotal}}</span>
    </div>

  </div>
  <router-view/>
</template>


<script>
export default {
  name: "PlusTime",
  data() {
    return {
      hours: '',
      minutes: '',
      tenthMinute: '',
      times: '',
      timelist: [],
      timelistView: [],
      timesView: '',
      result: '',
      total: ''
    }
  },
  methods:{
    calculateTime(){
      if (this.minutes <= 0){
        this.timesView = this.hours + 'h'
        this.times  = this.hours
      }else if (this.hours <= 0){
        this.timesView = '0h : '+ this.minutes + 'm'
        this.times  = this.minutes / 60
      }else {
        this.timesView = this.hours + 'h' + ' : ' + this.minutes + 'm'
        this.times  = this.hours + (this.minutes / 60)
      }
      this.timelistView.push(this.timesView)
      this.timelist.push(this.times)

      // this.total = this.timelist.reduce(function (a, b) {
      //   return a + b
      // }, 0)
      // this.total = this.timelist.reduce((a,b) => a + b)
      // console.log(this.total)
      // this.result = Math.trunc(this.total) + ':' + Math.trunc(((this.total % 1) * 60))
    },
  },
  computed:{
    calcList(){
      return this.timelist.reduce((a,b) => a + b)
    },
    calcTotal(){
      return Math.trunc(this.calcList) + ':' + Math.trunc(((this.calcList % 1) * 60))
    }
  },

}

</script>

<style scoped>
  .wrap-plusTime{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input{
    width: 100px;
  }
  .closeBTN{
    width: 80px;
    height: 40px;
    line-height: 40px;
  }
  .closeBTN:hover{
    background: #9e0101;
  }
  .wrap-result{
    font-size: 1vw;
  }
  ol {
    list-style-type: none; /* Убираем исходные маркеры */
    counter-reset:  item; /* Обнуляем счетчик списка */
  }
  li:before {
    content: counter(item) ') '; /* Добавляем к числам скобку */
    counter-increment: item; /* Задаём имя счетчика */
  }
</style>
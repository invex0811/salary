<template>
  <div class="wrap-plusTime">
    <h2><span v-if="checkStatus">Minus</span><span v-else>Plus</span> time</h2>
    <div class="wrap-input">
      <input @keyup.enter="calculateTime" type="number" v-model.number='hours' placeholder="Hours">
      <b style="font-size: 30px;">:</b>
      <input @keyup.enter="calculateTime" type="number" v-model.number='minutes' placeholder="Minutes" >
    </div>
    <label class="label">
      <div class="label-text">Minus time:</div>
      <div class="toggle">
        <input class="toggle-state" type="checkbox" v-model="checkStatus">
        <div class="indicator"></div>
      </div>

    </label>
    <div class="wrap-btn">
      <v-btn
          class="btn"
          color="primary"
          @click='calculateTime'
      >
        OK
      </v-btn>
      <v-btn
          class="btn"
          color="secondary"
          @click="cleanForms"
      >
        Clean
      </v-btn>
    </div>

    <div class="wrap-result">
      <ol >
        <li v-for='(time,id) in timelistView' :key='time.time'>
          {{time}}
          <v-btn
              class="btn"
              color="error"
              size="small"
              @click="timelistView.splice(id,1),
                      timelist.splice(id,1) "
          >
            <v-icon>
              fas fa-minus
            </v-icon>
          </v-btn>
        </li>
      </ol>
      <span v-if="times > 0">Total hours: {{calcTotal}}</span>
    </div>
    {{calcGap}}
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
      timelist: [0],
      timelistView: [0],
      timesView: '',
      result: '',
      total: '',
      checkStatus: false,
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
    },
    cleanForms(){
      this.hours = ''
      this.minutes = ''
    },

  },
  computed:{
    calcList(){
      return this.checkStatus === false ? this.timelist.reduce((a,b) => a + b) : this.timelist.reduce((a,b) => a - b)
    },
    calcTotal(){
      return Math.trunc(this.calcList) + ':' + Math.trunc(((this.calcList % 1) * 60))
    },


  },

}

</script>

<style scoped>
  .wrap-plusTime{
    display: flex;
    flex-direction: column;
    align-items: center;
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
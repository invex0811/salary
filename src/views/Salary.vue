<template>
  <h2 class="main-heading">Salary calculator</h2>
  <div id="wrapApp" class="page">
    <div class="input-wrap">
      <input type="number" v-model.number='time' placeholder="Time">
      <input type="number" v-model.number='rate' placeholder="Rate">
      <input type="number" v-model.number='bonus' placeholder="Bonus" v-if="bonusCheck">
      <input type="number" v-model.number="dollarRate" placeholder="Dollar rate" v-if="taxFivePercentCheck">
    </div>
    <div class="checkbox-wrap">
      <label for="vacation" title="Отпуск 4%">Vacation:<input id="vacation" type="checkbox" v-model="vacation" ></label><div class="vertical-line"></div>
      <label for="tax" title="Налог +45$">Tax:<input id="tax" type="checkbox" v-model="tax" ></label><div class="vertical-line"></div>
      <label for="bonusCheck" title="Премия">Bonus:<input id="bonusCheck" type="checkbox" v-model="bonusCheck"></label><div class="vertical-line"></div>
      <label for="tax5" title="Налог 5%">Tax 5%:<input  id="tax5" type="checkbox" v-model="taxFivePercentCheck"></label>
    </div>

    <button v-on:click='calcMoney()'>OK</button>

    <div class="output-wrap" v-if="totalCalc > 0">
      <span>Time: {{ time }}</span>
      <span>Over time: {{ overTime }}</span>
      <span>Rate: {{ rate }}</span>
      <span>Over rate: {{ overRate }}</span>
      <span v-if="bonusCheck">Bonus: {{ bonus }}</span>
      <span>Money: {{ '$ ' + totalCalc }}</span>
      <span v-if="taxFivePercentCheck">Tax 5%: {{taxFivePercentCalc.toFixed(2)}}</span>
    </div>
    <div class="message" v-else>
      <span>Введите данные :)</span>
    </div>

  </div>
  <router-view/>
</template>

<script>
export default {
  name: "Salary",
  data(){
    return{
      time: '',
      rate: '',
      totalMoney: '',
      overRate: '',
      overTime:'',
      vacation: '',
      bonus: '',
      bonusCheck: '',
      tax: '',
      taxFivePercentCheck: '',
      dollarRate: '',
    }
  },
  methods:{
    calcMoney(){

      if (this.time <= 160) {

        this.totalMoney = this.time * this.rate;

      }else if (this.rate == 2) {


        this.overRate = 2;
        this.totalMoney = this.time * this.rate;
        this.overTime = this.time - 160;

      }
      else {
        this.overRate = this.rate / 2 + this.rate;
        this.overTime = this.time - 160;
        this.totalMoney = this.overTime * this.overRate + this.rate * 160;
      }

    }

  } ,
  computed:{
    fourPercent(){

      return  this.totalMoney / 100 * (this.vacation * 4) ;

    },
    checkTax(){

      return  45 * this.tax;

    },
    bonusCalc(){

      return  this.bonus * this.bonusCheck;

    },
    totalCalc(){

      return Math.round(this.totalMoney + ( this.fourPercent + this.checkTax + this.bonusCalc));

    },
    taxFivePercentCalc(){

      return this.totalCalc * this.dollarRate / 100 * (this.taxFivePercentCheck * 5);

    },


  }

}

</script>

<style scoped>
.main-heading{
  text-align: center;
}
.page{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input-wrap{
  display: flex;
  flex-direction: column;
}
.vertical-line{
  background-color: #fff;
  height: 15px;
  width: 2px;
}
.checkbox-wrap{
  display: flex;
  align-items: center;
}
label{
  margin: 0 5px;
  font-size: 18px;
}
.output-wrap{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
}
</style>
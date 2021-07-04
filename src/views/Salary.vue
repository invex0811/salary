<template>
  <h2 class="main-heading">Salary calculator</h2>
  <div id="wrapApp" class="page">
    <div class="input-wrap">
      <input @keyup.enter="calcMoney" type="number" v-model.number='time' placeholder="Time">
      <input @keyup.enter="calcMoney" type="number" v-model.number='rate' placeholder="Rate">
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__bounceInLeft"
        leave-active-class="animate__animated animate__bounceOutRight"
      >
        <input type="number" v-model.number='bonus' placeholder="Bonus" v-if="bonusCheck">
      </transition>
      <transition
          name="custom-classes-transition"
          enter-active-class="animate__animated animate__bounceInLeft"
          leave-active-class="animate__animated animate__bounceOutRight"
      >
        <input type="number" v-model.number="dollarRate" placeholder="Dollar rate" v-if="taxFivePercentCheck">
      </transition>
    </div>
    <div class="checkbox-wrap">
      <label class="label" for="vacation" title="Отпуск 4%">
        <div class="toggle">
          <input class="toggle-state" type="checkbox" name="check" id="vacation" v-model="vacation">
          <div class="indicator"></div>
        </div>
        <div class="label-text">Vacation</div>
      </label>

      <label class="label" for="tax" title="Налог +45$">
        <div class="toggle">
          <input class="toggle-state" type="checkbox" name="check" id="tax" v-model="tax"/>
          <div class="indicator"></div>
        </div>
        <div class="label-text">Tax</div>
      </label>

      <label class="label" for="bonusCheck" title="Премия">
        <div class="toggle">
          <input class="toggle-state" type="checkbox" name="check" id="bonusCheck" v-model="bonusCheck" />
          <div class="indicator"></div>
        </div>
        <div class="label-text">Bonus</div>
      </label>
      <label class="label" for="tax5" title="Налог 5%">
        <div class="toggle">
          <input class="toggle-state" type="checkbox" name="check" id="tax5" v-model="taxFivePercentCheck" />
          <div class="indicator"></div>
        </div>
        <div class="label-text">Tax 5% </div>
      </label>
    </div>

    <button  @click='calcMoney'>OK</button>

    <div class="output-wrap" v-if="totalCalc > 0">
      <table>
        <tr>
          <td>Time:</td>
          <td>{{ time }}</td>
        </tr>
        <tr v-if="time > 160">
          <td >Over time:</td>
          <td>{{ overTime }}</td>
        </tr>
        <tr>
          <td>Rate:</td>
          <td>{{ rate }}</td>
        </tr>
        <tr v-if="time > 160">
          <td>Over rate:</td>
          <td>{{ overRate }}</td>
        </tr>
        <tr v-if="bonusCheck">
          <td>Bonus:</td>
          <td>{{ bonus }}</td>
        </tr>
        <tr>
          <td>Money:</td>
          <td>{{ '$ ' + totalCalc }}</td>
        </tr>
        <tr v-if="taxFivePercentCheck">
          <td>Tax 5%:</td>
          <td>{{taxFivePercentCalc.toFixed(2)}}</td>
        </tr>
        <tr v-if="taxFivePercentCheck">
          <td>Salary UAH:</td>
          <td>{{calcSalaryUAH}}</td>
        </tr>
      </table>
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
      salaryUAH: '',
    }
  },
  methods:{
    calcMoney(){

      if (this.time <= 160) {

        this.totalMoney = this.time * this.rate;

      }else if (this.rate === 2) {


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
    calcSalaryUAH(){
      return this.totalCalc * this.dollarRate
    },
    taxFivePercentCalc(){

      return this.totalCalc * this.dollarRate / 100 * (this.taxFivePercentCheck * 5);

    },
  },

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
  /*display: flex;*/
  /*align-items: center;*/
  margin-top: 10px;
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
td{
  padding: 0 10px;
}

</style>
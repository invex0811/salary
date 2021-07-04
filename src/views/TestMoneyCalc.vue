<template>
<div class="wrap-page__moneyCalc">
  <h2>Money calculator</h2>
  <div class="wrap-input">
    <input type="number" v-model.number="workDay" placeholder="Work day">
    <input type="number" v-model.number="rate" placeholder="Rate">
    <input type="number" v-model.number="hoursBonus" placeholder="Hours bonus" v-if="checkHoursBonus">
    <input type="number" v-model.number="moneyBonus" placeholder="Money bonus" v-if="checkMoneyBonus">
    <input type="number" v-model.number="moneyRate" placeholder="Money rate" v-if="checkMoneyRate">
  </div>
  <div class="wrap-checkbox">
    <label class="label" for="checkHoursBonus">
      <div class="toggle">
        <input class="toggle-state" type="checkbox" id="checkHoursBonus" v-model="checkHoursBonus">
        <div class="indicator"></div>
      </div>
      <div class="label-text">Time bonus:</div>
    </label>
    <label class="label" for="checkMoneyBonus">
      <div class="toggle">
        <input class="toggle-state" type="checkbox" id="checkMoneyBonus" v-model="checkMoneyBonus">
        <div class="indicator"></div>
      </div>
      <div class="label-text">Money bonus:</div>
    </label>
    <label class="label" for="checkMoneyRate">
      <div class="toggle">
        <input class="toggle-state" type="checkbox" id="checkMoneyRate" v-model="checkMoneyRate">
        <div class="indicator"></div>
      </div>
      <div class="label-text">Money rate:</div>
    </label>
    <label class="label" for="checkTax">
      <div class="toggle">
        <input class="toggle-state" type="checkbox" id="checkTax" v-model="checkTax">
        <div class="indicator"></div>
      </div>
      <div class="label-text">Tax:</div>
    </label>
    <label class="label" for="checkVacation">
      <div class="toggle">
        <input class="toggle-state" type="checkbox" id="checkVacation" v-model="checkVacation">
        <div class="indicator"></div>
      </div>
      <div class="label-text">Vacation:</div>
    </label>
  </div>
  <div class="wrap-buttons">
    <button @click="calcMoney">OK</button>
  </div>
  <div class="wrap-info" v-if="workDay>0">
    <table>
      <tr>
        <td>Working days:</td>
        <td>{{ workDay }}</td>
      </tr>
      <tr >
        <td >Time:</td>
        <td>{{ hours }}</td>
      </tr>
      <tr v-if="checkHoursBonus">
        <td>Bonus time:</td>
        <td>{{ hoursBonus }}</td>
      </tr>
      <tr v-if="hours>176">
        <td>Over time:</td>
        <td>{{ overTime }}</td>
      </tr>
      <tr>
        <td>Rate:</td>
        <td>{{ rate }}</td>
      </tr>
      <tr v-if="rate > 2">
        <td>Over rate:</td>
        <td>{{ overRate }}</td>
      </tr>
      <tr v-if="checkMoneyBonus">
        <td>Money bonus:</td>
        <td>{{ moneyBonus }}</td>
      </tr>
      <tr>
        <td>Money:</td>
        <td>{{ totalPlus + ' $' }}</td>
      </tr>
<!--      <tr v-if="taxFivePercentCheck">-->
<!--        <td>Tax 5%:</td>-->
<!--        <td>{{taxFivePercentCalc.toFixed(2)}}</td>-->
<!--      </tr>-->
<!--      <tr v-if="taxFivePercentCheck">-->
<!--        <td>Salary UAH:</td>-->
<!--        <td>{{calcSalaryUAH}}</td>-->
<!--      </tr>-->
    </table>
  </div>
</div>

<router-view/>
</template>

<script>
export default {
  name: "TestMoneyCalc",
  data(){
    return{
      workDay: '',
      rate: '',
      hoursBonus: '',
      moneyBonus: '',
      moneyRate: '',
      checkHoursBonus: false,
      checkMoneyBonus: false,
      checkMoneyRate: false,
      checkTax: false,
      checkVacation: false,
    //  Внутрение переменные для подсчетов
      hours: '',
      overRate: '',
      overTime: '',
      total: '',
    }
  },
  methods:{
    calcMoney(){
      this.hours = this.workDay * 8
      this.hours += this.hoursBonus
      this.overTime = this.hours - 176
      this.overRate = this.rate * 1.5

      if (this.hours <= 176){
        this.total = this.hours * this.rate
      }else if (this.hours > 176){
        this.total = 176 * this.rate + this.overTime * this.overRate;
      }
    }
  },
  computed:{
    plusTax(){
      return 45 * this.checkTax
    },
    plusVacation(){
      return this.total / 100 * (this.checkVacation * 4)
    },
    plusMoneyBonus(){
      return this.moneyBonus * this.checkMoneyBonus
    },
    totalPlus(){
      return this.total + (this.plusTax + this.plusVacation + this.plusMoneyBonus )
    }
  }
}
</script>

<style scoped>
  .wrap-page__moneyCalc{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .wrap-input{
    display: flex;
    flex-direction: column;
  }
  .wrap-info{
    display: flex;
    flex-direction: column;
  }
</style>
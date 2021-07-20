  <template>
  <div class="wrap-page__moneyCalc">
    <h2>Salary</h2>
    <div class="wrap-input">
      <input type="number" v-model.number="workTime" placeholder="Work time">
      <div class="test-percent-wrap">
        <input class="input-percent" type="number" v-model.number="firstTestPercent" placeholder="First test %">
        <input class="input-percent" type="number" v-model.number="secondTestPercent" placeholder="Second test %">
      </div>
      <input type="number" v-model.number="rate" placeholder="Rate">
      <input type="number" v-model.number="timeX2" placeholder="Time X2" v-if="checkHoursBonus">
      <input type="number" v-model.number="moneyBonus" placeholder="Money bonus" v-if="checkMoneyBonus">
      <input type="number" v-model.number="moneyRate" placeholder="UAH rate" v-if="checkMoneyRate">
    </div>
    <div class="wrap-checkbox">
      <label class="label" for="checkHoursBonus" title="Your X2 time">
        <div class="label-text">Time X2:</div>
        <div class="toggle">
          <input class="toggle-state" type="checkbox" id="checkHoursBonus" v-model="checkHoursBonus">
          <div class="indicator"></div>
        </div>

      </label>
      <label class="label" for="checkMoneyBonus">
        <div class="label-text">Money bonus:</div>
        <div class="toggle">
          <input class="toggle-state" type="checkbox" id="checkMoneyBonus" v-model="checkMoneyBonus">
          <div class="indicator"></div>
        </div>

      </label>
      <label class="label" for="checkMoneyRate">
        <div class="label-text">UAH rate:</div>
        <div class="toggle">
          <input class="toggle-state" type="checkbox" id="checkMoneyRate" v-model="checkMoneyRate">
          <div class="indicator"></div>
        </div>

      </label>
      <label class="label" for="checkTax">
        <div class="label-text">Tax:</div>
        <div class="toggle">
          <input class="toggle-state" type="checkbox" id="checkTax" v-model="checkTax">
          <div class="indicator"></div>
        </div>

      </label>
      <label class="label" for="checkVacation">
        <div class="label-text">Vacation:</div>
        <div class="toggle">
          <input class="toggle-state" type="checkbox" id="checkVacation" v-model="checkVacation">
          <div class="indicator"></div>
        </div>

      </label>
    </div>
    <div class="wrap-buttons">
      <button @click="calcMoney">OK</button>
    </div>
    <div class="wrap-info" v-if="workTime>0">
      <table>
        <tr>
          <td>Working time:</td>
          <td>{{ workTime }}</td>
        </tr>
        <tr >
          <td >Time:</td>
          <td>{{ hours }}</td>
        </tr>
        <tr v-if="checkHoursBonus">
          <td>Bonus time:</td>
          <td>{{ timeX2 }}</td>
        </tr>
        <tr v-if="checkHoursBonus">
          <td>Time per test:</td>
          <td>{{ timeTest }}</td>
        </tr>
        <tr v-if="overTime > 0">
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
        <tr v-if="timeX2 > 0">
          <td>Rate X2:</td>
          <td>{{ rateX2 }}</td>
        </tr>
        <tr v-if="checkMoneyBonus">
          <td>Money bonus:</td>
          <td>{{ moneyBonus }}</td>
        </tr>
        <tr>
          <td>Money:</td>
          <td>{{totalPlus + ' $' }}</td>
        </tr>
        <tr v-if="checkMoneyRate">
          <td>Tax 5%:</td>
          <td>〜{{calc5Percent.toFixed(2)}}</td>
        </tr>
        <tr v-if="checkMoneyRate">
          <td>Salary UAH:</td>
          <td>{{convertMoneyToUAH.toFixed(2)}}</td>
        </tr>
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
      workTime: '',
      rate: '',
      timeTest: '',
      firstTestPercent: '',
      secondTestPercent: '',
      timeX2: '',
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
      rateX2: '',
      totalTestPercent: '',
      total: '',
      timeX2Calc: '',
    }
  },
  methods:{
    calcMoney(){
      this.hours = this.workTime
      this.overRate = this.rate * 1.5
      this.rateX2  = this.rate * 2
      this.totalTestPercent = (this.firstTestPercent + this.secondTestPercent) / 2
      this.timeX2Calc = this.timeX2

        if (this.totalTestPercent >= 91){
          this.hours += 8
          this.timeTest = 8
        }else if (this.totalTestPercent >= 81 && this.totalTestPercent <= 90) {
          this.hours += 6
          this.timeTest = 6
        }else if (this.totalTestPercent >= 71 && this.totalTestPercent <= 80) {
          this.hours += 4
          this.timeTest = 4
        }else if (this.totalTestPercent >= 60 && this.totalTestPercent <= 70) {
          this.hours += 0
          this.timeTest = 0
        }else if (this.totalTestPercent < 60) {
          this.hours -= 4
          this.timeTest = '-4'
        }


      if (this.hours < 176){
        this.hours += this.timeX2Calc
        this.timeX2Calc = this.hours - 176
        if (this.hours > 176){
          this.overTime = this.hours - 176 - this.timeX2Calc
        }
      }else if (this.hours > 176){
        this.overTime = this.hours - 176
      }


      if (this.hours <= 176){
        this.total = this.hours * this.rate
      }else if (this.hours > 176){
        this.total = 176 * this.rate + this.overTime * this.overRate
      }


    }
  },
  computed:{
    plusHoursX2(){
      return this.timeX2Calc * this.rateX2
    },
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
      return Math.floor(this.total + (this.plusHoursX2 + this.plusTax + this.plusVacation + this.plusMoneyBonus ))
    },
    convertMoneyToUAH(){
      return this.totalPlus * this.moneyRate
    },
    calc5Percent(){
      return this.convertMoneyToUAH / 100 * (this.checkMoneyRate * 5);
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
.input-percent{
  width: 170px;
}
.wrap-checkbox{
  margin-top: 8px;
}
.wrap-info{
  display: flex;
  flex-direction: column;
}
</style>































<!--  <h2 class="main-heading">Salary calculator</h2>-->
<!--  <div id="wrapApp" class="page">-->
<!--    <div class="input-wrap">-->
<!--      <input @keyup.enter="calcMoney" type="number" v-model.number='time' placeholder="Time">-->
<!--      <input @keyup.enter="calcMoney" type="number" v-model.number='rate' placeholder="Rate">-->
<!--      <transition-->
<!--        name="custom-classes-transition"-->
<!--        enter-active-class="animate__animated animate__bounceInLeft"-->
<!--        leave-active-class="animate__animated animate__bounceOutRight"-->
<!--      >-->
<!--        <input type="number" v-model.number='bonus' placeholder="Bonus" v-if="bonusCheck">-->
<!--      </transition>-->
<!--      <transition-->
<!--          name="custom-classes-transition"-->
<!--          enter-active-class="animate__animated animate__bounceInLeft"-->
<!--          leave-active-class="animate__animated animate__bounceOutRight"-->
<!--      >-->
<!--        <input type="number" v-model.number="dollarRate" placeholder="Dollar rate" v-if="taxFivePercentCheck">-->
<!--      </transition>-->
<!--    </div>-->
<!--    <div class="checkbox-wrap">-->
<!--      <label class="label" for="vacation" title="Отпуск 4%">-->
<!--        <div class="toggle">-->
<!--          <input class="toggle-state" type="checkbox" name="check" id="vacation" v-model="vacation">-->
<!--          <div class="indicator"></div>-->
<!--        </div>-->
<!--        <div class="label-text">Vacation</div>-->
<!--      </label>-->

<!--      <label class="label" for="tax" title="Налог +45$">-->
<!--        <div class="toggle">-->
<!--          <input class="toggle-state" type="checkbox" name="check" id="tax" v-model="tax"/>-->
<!--          <div class="indicator"></div>-->
<!--        </div>-->
<!--        <div class="label-text">Tax</div>-->
<!--      </label>-->

<!--      <label class="label" for="bonusCheck" title="Премия">-->
<!--        <div class="toggle">-->
<!--          <input class="toggle-state" type="checkbox" name="check" id="bonusCheck" v-model="bonusCheck" />-->
<!--          <div class="indicator"></div>-->
<!--        </div>-->
<!--        <div class="label-text">Bonus</div>-->
<!--      </label>-->
<!--      <label class="label" for="tax5" title="Налог 5%">-->
<!--        <div class="toggle">-->
<!--          <input class="toggle-state" type="checkbox" name="check" id="tax5" v-model="taxFivePercentCheck" />-->
<!--          <div class="indicator"></div>-->
<!--        </div>-->
<!--        <div class="label-text">Tax 5% </div>-->
<!--      </label>-->
<!--    </div>-->

<!--    <button  @click='calcMoney'>OK</button>-->

<!--    <div class="output-wrap" v-if="totalCalc > 0">-->
<!--      <table>-->
<!--        <tr>-->
<!--          <td>Time:</td>-->
<!--          <td>{{ time }}</td>-->
<!--        </tr>-->
<!--        <tr v-if="time > 160">-->
<!--          <td >Over time:</td>-->
<!--          <td>{{ overTime }}</td>-->
<!--        </tr>-->
<!--        <tr>-->
<!--          <td>Rate:</td>-->
<!--          <td>{{ rate }}</td>-->
<!--        </tr>-->
<!--        <tr v-if="time > 160">-->
<!--          <td>Over rate:</td>-->
<!--          <td>{{ overRate }}</td>-->
<!--        </tr>-->
<!--        <tr v-if="bonusCheck">-->
<!--          <td>Bonus:</td>-->
<!--          <td>{{ bonus }}</td>-->
<!--        </tr>-->
<!--        <tr>-->
<!--          <td>Money:</td>-->
<!--          <td>{{ '$ ' + totalCalc }}</td>-->
<!--        </tr>-->
<!--        <tr v-if="taxFivePercentCheck">-->
<!--          <td>Tax 5%:</td>-->
<!--          <td>{{taxFivePercentCalc.toFixed(2)}}</td>-->
<!--        </tr>-->
<!--        <tr v-if="taxFivePercentCheck">-->
<!--          <td>Salary UAH:</td>-->
<!--          <td>{{calcSalaryUAH}}</td>-->
<!--        </tr>-->
<!--      </table>-->
<!--    </div>-->
<!--  </div>-->
<!--  <router-view/>-->
<!--</template>-->

<!--<script>-->

<!--export default {-->
<!--  name: "Salary",-->
<!--  data(){-->
<!--    return{-->
<!--      time: '',-->
<!--      rate: '',-->
<!--      totalMoney: '',-->
<!--      overRate: '',-->
<!--      overTime:'',-->
<!--      vacation: '',-->
<!--      bonus: '',-->
<!--      bonusCheck: '',-->
<!--      tax: '',-->
<!--      taxFivePercentCheck: '',-->
<!--      dollarRate: '',-->
<!--      salaryUAH: '',-->
<!--    }-->
<!--  },-->
<!--  methods:{-->
<!--    calcMoney(){-->

<!--      if (this.time <= 160) {-->

<!--        this.totalMoney = this.time * this.rate;-->

<!--      }else if (this.rate === 2) {-->


<!--        this.overRate = 2;-->
<!--        this.totalMoney = this.time * this.rate;-->
<!--        this.overTime = this.time - 160;-->

<!--      }-->
<!--      else {-->
<!--        this.overRate = this.rate / 2 + this.rate;-->
<!--        this.overTime = this.time - 160;-->
<!--        this.totalMoney = this.overTime * this.overRate + this.rate * 160;-->
<!--      }-->

<!--    }-->

<!--  } ,-->
<!--  computed:{-->
<!--    fourPercent(){-->

<!--      return  this.totalMoney / 100 * (this.vacation * 4) ;-->

<!--    },-->
<!--    checkTax(){-->

<!--      return  45 * this.tax;-->

<!--    },-->
<!--    bonusCalc(){-->

<!--      return  this.bonus * this.bonusCheck;-->

<!--    },-->
<!--    totalCalc(){-->

<!--      return Math.round(this.totalMoney + ( this.fourPercent + this.checkTax + this.bonusCalc));-->

<!--    },-->
<!--    calcSalaryUAH(){-->
<!--      return this.totalCalc * this.dollarRate-->
<!--    },-->
<!--    taxFivePercentCalc(){-->

<!--      return this.totalCalc * this.dollarRate / 100 * (this.taxFivePercentCheck * 5);-->

<!--    },-->
<!--  },-->

<!--}-->

<!--</script>-->

<!--<style scoped>-->
<!--.main-heading{-->
<!--  text-align: center;-->
<!--}-->
<!--.page{-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  align-items: center;-->
<!--}-->
<!--.input-wrap{-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--}-->
<!--.vertical-line{-->
<!--  background-color: #fff;-->
<!--  height: 15px;-->
<!--  width: 2px;-->
<!--}-->
<!--.checkbox-wrap{-->
<!--  /*display: flex;*/-->
<!--  /*align-items: center;*/-->
<!--  margin-top: 10px;-->
<!--}-->
<!--label{-->
<!--  margin: 0 5px;-->
<!--  font-size: 18px;-->
<!--}-->
<!--.output-wrap{-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  align-items: center;-->
<!--  font-size: 24px;-->
<!--}-->
<!--td{-->
<!--  padding: 0 10px;-->
<!--}-->

<!--</style>-->
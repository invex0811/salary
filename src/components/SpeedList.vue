<template>
  <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
  >
    <div class="wrap-modal" v-if="show">
      <div class="wrap-blur-modal"  key="modalWindow" @click="show = false"></div>
      <div class="speedList" >
        <i @click="closeModal" class="fi-rr-cross-circle"></i>
        <div class="input-wrapper">
          <input type="text" class="search-input" v-model="search" placeholder="Input abbreviation">
        </div>
        <div class="table-wrapper">
          <table>
            <thead>
            <th class="abbrTH">Abbr</th>
            <th class="stateTH">State</th>
            <th class="speedTH">Speed</th>
            </thead>
            <tbody>
              <tr v-for="s in todosByTitle" :key="s.id">
                <td class="td-abbr">{{ s.abbr }}</td>
                <td>{{ s.state }}</td>
                <td>{{ s.speed }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </transition>
  <router-view/>

</template>

<script>
export default {
  name: "SpeedList",
  data() {
    return {
      show: false,
      search: '',
      arrayState: [
        {abbr: 'AL', state: 'Alabama', speed: '75mph'},
        {abbr: 'AK', state: 'Alaska', speed: '70mph'},
        {abbr: 'AZ', state: 'Arizona', speed: '80mph'},
        {abbr: 'AR', state: 'Arkansas', speed: '75mph'},
        {abbr: 'CA', state: 'California', speed: '65mph'},
        {abbr: 'CO', state: 'Colorado', speed: '80mph'},
        {abbr: 'CT', state: 'Connecticut', speed: '70mph'},
        {abbr: 'DE', state: 'Delaware', speed: '70mph'},
        {abbr: 'FL', state: 'Florida', speed: '75mph'},
        {abbr: 'GA', state: 'Georgia', speed: '75mph'},
        {abbr: 'HI', state: 'Hawaii', speed: '60mph'},
        {abbr: 'ID', state: 'Idaho', speed: '75mph'},
        {abbr: 'IL', state: 'Illinois', speed: '75mph'},
        {abbr: 'IN', state: 'Indiana', speed: '70mph'},
        {abbr: 'IA', state: 'Iowa', speed: '75mph'},
        {abbr: 'KS', state: 'Kansas', speed: '80mph'},
        {abbr: 'KY', state: 'Kentucky', speed: '75mph'},
        {abbr: 'LA', state: 'Louisiana', speed: '80mph'},
        {abbr: 'ME', state: 'Maine', speed: '80mph'},
        {abbr: 'MD', state: 'Maryland', speed: '70mph'},
        {abbr: 'MA', state: 'Massachusetts', speed: '70mph'},
        {abbr: 'MI', state: 'Michigan', speed: '70mph'},
        {abbr: 'MN', state: 'Minnesota', speed: '75mph'},
        {abbr: 'MS', state: 'Mississippi', speed: '75mph'},
        {abbr: 'MO', state: 'Missouri', speed: '75mph'},
        {abbr: 'MT', state: 'Montana', speed: '70mph'},
        {abbr: 'NE', state: 'Nebraska', speed: '80mph'},
        {abbr: 'NV', state: 'Nevada', speed: '85mph'},
        {abbr: 'NH', state: 'New Hampshire', speed: '75mph'},
        {abbr: 'NJ', state: 'New Jersey', speed: '70mph'},
        {abbr: 'NM', state: 'New Mexico', speed: '80mph'},
        {abbr: 'NY', state: 'New York', speed: '70mph'},
        {abbr: 'NC', state: 'North Carolina', speed: '75mph'},
        {abbr: 'ND', state: 'North Dakota', speed: '80mph'},
        {abbr: 'OH', state: 'Ohio', speed: '75mph'},
        {abbr: 'OK', state: 'Oklahoma', speed: '80mph'},
        {abbr: 'OR', state: 'Oregon', speed: '70mph'},
        {abbr: 'PA', state: 'Pennsylvania', speed: '75mph'},
        {abbr: 'RI', state: 'Rhode Island', speed: '70mph'},
        {abbr: 'SC', state: 'South Carolina', speed: '75mph'},
        {abbr: 'SD', state: 'South Dakota', speed: '85mph'},
        {abbr: 'TN', state: 'Tennessee', speed: '75mph'},
        {abbr: 'TX', state: 'Texas', speed: '85mph'},
        {abbr: 'UT', state: 'Utah', speed: '85mph'},
        {abbr: 'VT', state: 'Vermont', speed: '70mph'},
        {abbr: 'VA', state: 'Virginia', speed: '75mph'},
        {abbr: 'WA', state: 'Washington', speed: '70mph'},
        {abbr: 'WV', state: 'West Virginia', speed: '75mph'},
        {abbr: 'WI', state: 'Wisconsin', speed: '75mph'},
        {abbr: 'WY', state: 'Wyoming', speed: '85mph'},
        {abbr: 'WADC', state: 'Washington DC', speed: '75mph'},
      ],
    };
  },
  methods:{
    closeModal(){
      return this.show = false
    }
  },
  computed:{
    todosByTitle() {
      return this.arrayState.filter(item => item.abbr.indexOf(this.search.toUpperCase()) !== -1)
    },
  },
}
</script>

<style scoped>


.wrap-blur-modal{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
  height: 100vh;
}
.wrap-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
}
.speedList{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  width: 50%;
  background-color: #e0e0e0;
  padding: 10px 20px;
  border: 3px solid #790e8b;
  border-radius: 50px;
  position: absolute;
}
.input-wrapper{
  text-align: center;
}
.table-wrapper{
  height: 80%;
  overflow-y:scroll;
}
table{
  padding: 0 10px;
}
thead{
  font-size: 20px;

}
tbody{
  margin-top: 30px;
  font-size: 18px;
}
td,th {
  text-align: left;
  padding: 0 10px;
}
th{
  text-align: left;
  padding-right: 10px;
}

.stateTH{
  width: 140px;
}
.search-input{
  margin: 20px;
}

.fi-rr-cross-circle{
  position: absolute;
  right: 30px;
  top: 30px;
  font-size: 30px;
  cursor: pointer;
  color: #790e8b;
}
.fi-rr-cross-circle:hover{
  color: #c158dc;
  transition: .3s;
}

/*scrollbar*/
.table-wrapper::-webkit-scrollbar {
  width: 1em;
}
.table-wrapper::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  margin-right: 10px;
}
.table-wrapper::-webkit-scrollbar-thumb {
  background-color: #790e8b;
}

</style>
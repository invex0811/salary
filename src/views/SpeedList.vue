<template>
  <transition name="slide-fade">
  <div class="wrap-blur-modal" v-if="show" key="modalWindow">
    <div class="wrap-modal">
      <i @click="closeModal" class="fi-rr-cross-circle"></i>
      <div class="input-wrapper">
        <input type="text" class="search-input" v-model="search" placeholder="Input abbreviation">
      </div>
      <div class="speedList" >
        <div class="table-wrapper">
          <table>
            <thead>
              <th>Abbreviation</th>
              <th>State</th>
              <th>Speed</th>
            </thead>
            <tbody>
              <tr v-for="s in todosByTitle" :key="s.id">
                <td>{{ s.abbr }}</td>
                <td>{{ s.state }}</td>
                <td>{{ s.speed }}</td>
              </tr>
            </tbody>
          </table>
        </div>
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
        {abbr: 'AL', state: 'Alabama', speed: '85mph'},
        {abbr: 'AK', state: 'Alaska', speed: '80mph'},
        {abbr: 'AZ', state: 'Arizona', speed: '90mph'},
        {abbr: 'AR', state: 'Arkansas', speed: '85mph'},
        {abbr: 'CA', state: 'California', speed: '70mph'},
        {abbr: 'CO', state: 'Colorado', speed: '90mph'},
        {abbr: 'CT', state: 'Connecticut', speed: '80mph'},
        {abbr: 'DE', state: 'Delaware', speed: '80mph'},
        {abbr: 'FL', state: 'Florida', speed: '85mph'},
        {abbr: 'GA', state: 'Georgia', speed: '85mph'},
        {abbr: 'HI', state: 'Hawaii', speed: '75mph'},
        {abbr: 'ID', state: 'Idaho', speed: '85mph'},
        {abbr: 'IL', state: 'Illinois', speed: '85mph'},
        {abbr: 'IN', state: 'Indiana', speed: '80mph'},
        {abbr: 'IA', state: 'Iowa', speed: '85mph'},
        {abbr: 'KS', state: 'Kansas', speed: '90mph'},
        {abbr: 'KY', state: 'Kentucky', speed: '85mph'},
        {abbr: 'LA', state: 'Louisiana', speed: '90mph'},
        {abbr: 'ME', state: 'Maine', speed: '90mph'},
        {abbr: 'MD', state: 'Maryland', speed: '85mph'},
        {abbr: 'MA', state: 'Massachusetts', speed: '80mph'},
        {abbr: 'MI', state: 'Michigan', speed: '80mph'},
        {abbr: 'MN', state: 'Minnesota', speed: '85mph'},
        {abbr: 'MS', state: 'Mississippi', speed: '85mph'},
        {abbr: 'MO', state: 'Missouri', speed: '85mph'},
        {abbr: 'MT', state: 'Montana', speed: '80mph'},
        {abbr: 'NE', state: 'Nebraska', speed: '90mph'},
        {abbr: 'NV', state: 'Nevada', speed: '95mph'},
        {abbr: 'NV', state: 'New Hampshire', speed: '85mph'},
        {abbr: 'NJ', state: 'New Jersey', speed: '80mph'},
        {abbr: 'NM', state: 'New Mexico', speed: '90mph'},
        {abbr: 'NY', state: 'New York', speed: '80mph'},
        {abbr: 'NC', state: 'North Carolina', speed: '85mph'},
        {abbr: 'ND', state: 'North Dakota', speed: '90mph'},
        {abbr: 'OH', state: 'Ohio', speed: '85mph'},
        {abbr: 'OK', state: 'Oklahoma', speed: '85mph'},
        {abbr: 'OR', state: 'Oregon', speed: '80mph'},
        {abbr: 'PA', state: 'Pennsylvania', speed: '85mph'},
        {abbr: 'RI', state: 'Rhode Island', speed: '80mph'},
        {abbr: 'SC', state: 'South Carolina', speed: '85mph'},
        {abbr: 'SD', state: 'South Dakota', speed: '95mph'},
        {abbr: 'TN', state: 'Tennessee', speed: '85mph'},
        {abbr: 'TX', state: 'Texas', speed: '95mph'},
        {abbr: 'UT', state: 'Utah', speed: '95mph'},
        {abbr: 'VT', state: 'Vermont', speed: '80mph'},
        {abbr: 'VA', state: 'Virginia', speed: '85mph'},
        {abbr: 'WA', state: 'Washington', speed: '75mph'},
        {abbr: 'WV', state: 'West Virginia', speed: '85mph'},
        {abbr: 'WI', state: 'Wisconsin', speed: '85mph'},
        {abbr: 'WY', state: 'Wyoming', speed: '95mph'},



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

.input-wrapper{
  text-align: center;
}
.speedList{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.table-wrapper{
  position: fixed;
  height: 65%;
  overflow-y:scroll;
}
thead{
  font-size: 20px;
}
tbody{
  font-size: 18px;
}

td,th {
  padding: 0 20px;
  text-align: left;
}
.search-input{
  margin: 20px;
}
.wrap-blur-modal{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.wrap-modal {
  background-color: #e0e0e0;
  padding: 10px 20px;
  height: 80%;
  width: 50%;
  position: relative;
  border: 3px solid #790e8b;
  border-radius: 50px;
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

/*modal animation*/
.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
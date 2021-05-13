<template>
  <div class="speedList">
    <input type="text" v-model="search">
    <table >
      <thead>
        <tr>
          <th>
            Abbreviation
          </th>
          <th>
            State
          </th>
          <th>
            Speed(mph)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="s in filteredStates"
            :key="s.state"

        >
          <td>{{s.abbreviation}}</td>
          <td>{{s.state}}</td>
          <td>{{s.speed}}</td>
        </tr>
      </tbody>
    </table>
    <h2>coming soon</h2> 
  </div>
  <router-view/>
</template>

<script>
export default {
  name: "SpeedList",
  data: () => ({
    search: '',
    speedLists: [
      {abbreviation: 'AL',state: 'Alabama', speed: '70mph'},
      {abbreviation: 'AK',state: 'State', speed: '65mph'},
      {abbreviation: 'AZ',state: 'Arizona', speed: '65mph'}
    ],
    computed: {
      filteredStates() {
        return this.speedLists.filter((s) => {
          return s.state.toLowerCase().match(this.search.toLowerCase());
        });
      }
    }
})
}
</script>

<style scoped>

</style>
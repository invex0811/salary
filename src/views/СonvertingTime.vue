<template>
  <div class="convertingTime">
    <h2>Converting time</h2>
    <div class="wrapperTenths" >
      <div class="wrapper_buttons">
        <button
            @click="currentTab = 'TenthToTime'"
            class="button-left buttons"
            :class="{'active': currentTab === 'TenthToTime' }"
        >
          Convert to time
        </button>
        <button
            @click="currentTab = 'TimeToTenth'"
            class="button-right buttons"
            :class="{'active': currentTab === 'TimeToTenth' }"
        >
          Convert to tenth
        </button>
      </div>
      <keep-alive>
        <component :is="currentTab" />
      </keep-alive>

    </div>
  </div>
</template>

<script>
import TenthToTime from "@/components/time/TenthToTime";
import TimeToTenth from "@/components/time/TimeToTenth";
export default {
  name: "ConvertingTime",
  components: {TimeToTenth, TenthToTime},
  data() {
    return {
      currentTab: 'TenthToTime',
      tabs: [
        {title: 'Convert to time', id: 'TenthToTime'},
        {title: 'Convert to tenth', id: 'TimeToTenth'}
      ]
    }
  },
  computed: {

  }
}
</script>

<style scoped>
.convertingTime{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrapperTenths{
  display: flex;
  flex-direction: column;
}
.wrapper_buttons{
  display: flex;
  justify-content: center;
}
.button-left{
  border-radius: 23px 0 0 23px;
}
.button-right{
  border-radius: 0 23px 23px 0;
}
.active{
  background-color:  #c158dc;
  color: #fff;
}
.buttons{
  border: none;
}
.buttons:focus{
  box-shadow: 0 0 0;
}
</style>
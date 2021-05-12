<template>
  <div class="convertingTime">
    <h2>Converting time</h2>
    <div class="wrapperTenths">
      <div class="TenthToTime">
        <TenthToTime/>
      </div>
      <div class="TimeToTenth">
        <TimeToTenth/>
      </div>
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

    }
  },
  methods:{

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
}
.TenthToTime, TimeToTenth{
  padding: 0 200px;
}
</style>
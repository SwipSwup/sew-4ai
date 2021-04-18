<template>
  <md-app
      v-cloak
      md-waterfall
      md-mode="fixed"
  >
    <md-app-content>
      <ue12 />
    </md-app-content>
  </md-app>
</template>

<script>
import Liste from './ue06/Liste.vue'
import Info from './ue06/Info.vue'
import Ue07 from "@/components/ue07/ue07";
import Ue10 from "@/components/ue10/ue10";
import Ue11 from "@/components/ue11/ue11";
import Ue12 from "@/components/ue12/ue12";

export default {
  name: 'App',
  components: {
    Ue12,
  }

}
</script>

<style scoped>

</style>

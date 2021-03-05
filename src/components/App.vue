<template>
  <md-app
      v-cloak
      md-waterfall
      md-mode="fixed"
  >
    <md-app-content>
      <ue10 />
    </md-app-content>
  </md-app>
</template>

<script>
import Liste from './ue06/Liste.vue'
import Info from './ue06/Info.vue'
import Ue07 from "@/components/ue07/ue07";
import Ue10 from "@/components/ue10/ue10";

export default {
  name: 'App',
  components: {
    Ue10,
  },
}
</script>

<style scoped>

</style>

<template>
  <md-app
    v-cloak
    md-waterfall
    md-mode="fixed"
  >
    <!--        <md-app-toolbar class="md-primary md-dense md-layout md-alignment-center-space-between">-->
    <!--            <router-link :to="{ name: 'liste' }">-->
    <!--                <div class="md-layout-item md-title">-->
    <!--                    Forum-->
    <!--                </div>-->
    <!--            </router-link>-->
    <!--            <router-link :to="{ name: 'info' }">-->
    <!--                <md-icon>info</md-icon>-->
    <!--            </router-link>-->
    <!--        </md-app-toolbar>-->

    <!--        <md-app-content>-->
    <!--            <router-view text="text"/>-->
    <!--        </md-app-content>-->
    <md-app-content>
      <ue07></ue07>
    </md-app-content>
  </md-app>
</template>

<script>
import Liste from './ue06/Liste.vue'
import Info from './ue06/Info.vue'
import Ue07 from "@/components/ue07/ue07";

export default {
  name: 'App',
  components: {
    Ue07,
  },
}
</script>

<style scoped>

</style>

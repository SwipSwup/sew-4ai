<template>
  <md-app
    v-cloak
    md-waterfall
    md-mode="fixed"
  >
    <md-app-toolbar class="md-primary md-dense md-layout md-alignment-center-space-between">
      <router-link to="/">
        <div class="md-layout-item md-title">
          {{ $t('title') }}
        </div>
      </router-link>
    </md-app-toolbar>
    <md-app-content>
      <ue05 />
    </md-app-content>
  </md-app>
</template>

<script>
import Ue05 from "@/components/ue05/ue05";

export default {
  name: 'App',
  components: {Ue05},
}
</script>

<style scoped>
</style>

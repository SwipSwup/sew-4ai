<template>
  <md-app
      v-cloak
      md-waterfall
      md-mode="fixed"
  >

    <md-app-content>
      <login button-text="Send it" email-placeholder="email" password-placeholder="password" title="Gamer login"></login>
      <login button-text="Send it" email-placeholder="email" password-placeholder="password" title="Gamer login"></login>
      <login button-text="Send it" email-placeholder="email" password-placeholder="password" title="Gamer login"></login>
    </md-app-content>

  </md-app>
</template>

<script>
import Login from "@/components/login";
export default {
  name: 'App',
  components: {Login},
}
</script>

<style scoped>
</style>

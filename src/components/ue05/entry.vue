<template>
  <div class="container">
    <div>
      {{ name }}
    </div>
    <div>
      <md-radio v-model="radio" v-on:click="disableButton0 = true" value="1" :disabled="disableButton0">String</md-radio>
      <md-radio v-model="radio" value="2" :disabled="disableButton1">String</md-radio>
      <md-radio v-model="radio" value="3" :disabled="disableButton2">String</md-radio>
      <md-radio v-model="radio" value="4" :disabled="disableButton3">String</md-radio>
      <md-radio v-model="radio" value="5" :disabled="disableButton4">String</md-radio>
    </div>
  </div>
</template>

<script>
export default {
  name: "entry",
  props: {name: String},
  data: () => ({
    radio: true,
    disableButton0: false,
    disableButton1: false,
    disableButton2: false,
    disableButton3: false,
    disableButton4: false
  }),
  methods: {
    disableButton: (index) => {

    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
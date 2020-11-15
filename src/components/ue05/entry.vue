<template>
  <div class="container">
    <div class="info">
      <div>{{ name }}</div>
      <div>{{ platz }}</div>
    </div>
    <div>
      <md-radio
        v-model="radio"
        value="1"
        :disabled="disabledButtons[0]"
        @change="updateButtonStatus(0)"
      >
        1
      </md-radio>
      <md-radio
        v-model="radio"
        value="2"
        :disabled="disabledButtons[1]"
        @change="updateButtonStatus(1)"
      >
        2
      </md-radio>
      <md-radio
        v-model="radio"
        value="3"
        :disabled="disabledButtons[2]"
        @change="updateButtonStatus(2)"
      >
        3
      </md-radio>
      <md-radio
        v-model="radio"
        value="4"
        :disabled="disabledButtons[3]"
        @change="updateButtonStatus(3)"
      >
        4
      </md-radio>
      <md-radio
        v-model="radio"
        value="5"
        :disabled="disabledButtons[4]"
        @change="updateButtonStatus(4)"
      >
        5
      </md-radio>
    </div>
  </div>
</template>

<script>
export default {
  name: "Entry",
  props: {
    name: String,
    disabledButtons: Array
  },
  data: () => ({
    radio: true,
    platz: "",
    oldButtonState: undefined
  }),
  methods: {
    updateButtonStatus(index) {
      this.platz = index + 1 + ". Platz"
      this.$emit('on-button-update', [index, this.oldButtonState]);
      this.oldButtonState = index
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

.info {
  margin-top: 15px;
  width: 40%;
  display: flex;
  justify-content: space-between;
}
</style>
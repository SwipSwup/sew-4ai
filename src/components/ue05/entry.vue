<template>
  <div class="container">
    <div class="info">
      <div>{{ name }}</div>
      <div>{{ platz }}</div>
    </div>
    <div>
      <md-radio
          v-for="(value, index) in disabledButtons"
          v-model="radio"
          :value="index"
          :disabled="value"
          @change="handleClick(index)"
      >
        {{ index + 1 }}
      </md-radio>
    </div>
  </div>
</template>

<script>
import eventBus from '@/services/event-bus'

export default {
  name: "Entry",
  props: {
    name: String,
    teilnehmerAnz: Number
  },

  data() {
    return {
      radio: true,
      platz: "",
      // disabledButtons: [],
      oldButtonState: undefined
    }
  },

  computed: {
    disabledButtons() {
      return this.$store.state.disabledButtons;
    }
  },

  created() {
    this.disabledButtons = new Array(this.teilnehmerAnz);
    this.disabledButtons.fill(false);

    eventBus.$on('on-button-update', (data) => {
      this.updateButtons(data);
    })
  },

  methods: {
    handleClick(index) {
      this.platz = index + 1 + ". Platz";
      eventBus.$emit('on-button-update', [index, this.oldButtonState]);
      this.oldButtonState = index;
    },

    updateButtons(input) {
      if (input[1] !== undefined)
        eventBus.$set(this.disabledButtons, input[1], false);
      eventBus.$set(this.disabledButtons, input[0], true);
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
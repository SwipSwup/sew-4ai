<template>
  <div>
    <md-field>
      <label>Url</label>
      <md-input v-model="type"></md-input>
    </md-field>
    <div>
      <div>
        IP: {{ ipAddress }}
      </div>
      <div>
        ORT: {{ place }}
      </div>
      <div>
        UHRZEIT: {{ localTime }}
      </div>
      <div>
        WETTER: {{ weather }}
      </div>
    </div>

  </div>
</template>

<script>

import * as axios from "core-js/internals/internal-state";

export default {
  name: "ue10",
  data() {
    return {
      ipAddress: "",
      place: "",
      localTime: "",
      weather: ""
    }
  },
  mounted () {
    axios
        .get('https://openweathermap.org/api')
        .then(response => console.log(response))
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <div class="md-layout">
      <md-field>
        <label>Url</label>
        <md-input v-model="url"></md-input>
      </md-field>
      <md-button class="md-raised md-primary" @click="setData(url)">Send</md-button>
    </div>
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
import * as axios from "axios";

export default {
  name: "ue10",
  data() {
    return {
      url: "https://www.htlrennweg.at/",
      ipAddress: "",
      place: "",
      localTime: "",
      weather: ""
    }
  },
  methods: {
    prepareUrl(url) {
      const reg = "/(https?:\\/\\/)?((www.)?[A-Za-z\\.]+\\/?).*/"
      return url.match(reg)[2];
    },
    setIP(url) {
      const axios = require('axios');
      const self = this;
      return axios.get(`http://www.dns-lg.com/us01/${this.prepareUrl(url)}/a`)
          .then(function (response) {
            self.ipAddress = response.data.answer[0].rdata;
          })
          .catch(function (error) {
            console.error(error);
          });
    },
    setTime() {

    },
    setPlace() {
      const axios = require('axios');
      const self = this;
      console.log(`http://ip-api.com/json/${this.ipAddress}?fields=status,message,city,lat,lon`);
     return axios.get(`http://ip-api.com/json/${this.ipAddress}?fields=status,message,city,lat,lon`)
          .then(function (response) {
            self.place = response.data.city;
          })
          .catch(function (error) {
            console.error(error);
          });
    },
    setData(url) {
      this.setIP(url)
          .then(() => this.setPlace());
    }
  }
}
</script>

<style scoped>

</style>

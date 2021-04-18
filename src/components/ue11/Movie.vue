<template>
  <div class="container">
    <img :src="img" width="150px">
    <div class="content">
      <div class="title">
        {{ title }} ({{ year }})
        <md-button
            class="md-icon-button button"
            @click="loadAdditData"
        >
          <md-icon>info</md-icon>
        </md-button>
      </div>
      <div
          class="info"
          v-if="showInfo">
        <div>
          <h3> mit {{ actors }}</h3>
        </div>
        <div>
          <h3> Regie: {{ director }}</h3>
        </div>
        <div>
          {{ plot }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "Movie",
  props: {
    id: String,
    title: String,
    year: String,
    img: String
  },
  data() {
    return {
      showInfo: false,
      actors: "",
      director: "",
      plot: ""
    }
  },
  methods: {
    loadAdditData() {
      //  http://www.omdbapi.com/?apikey=29fd5fd2&r=json&i=id&plot=short
      // if(this.actors !== "") {
      //   this.showInfo = !this.showInfo
      //   return;
      // }

      const self = this;
      Axios.get(`http://www.omdbapi.com/?apikey=29fd5fd2&r=json&i=${ self.id }&plot=short`)
          .then(response => {
            self.actors = response.data.Actors;
            self.director = response.data.Director === "N/A" ? "Director unknown" : response.data.Director;
            self.plot = response.data.Plot === "N/A" ? "Discription unavailable" : response.data.Plot;
            //console.log(response);
          }).then(() => self.showInfo = !self.showInfo).catch()
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  height: 250px;
  padding-top: 15px;
}

.content {
  margin: auto 25px;
  display: flex;
  flex-direction: column;
}

.info {
  height: 200px;
}

.title {
  font-size: 20px;
  font-weight: bold;
}

.button {
  top: -10px;
}
</style>
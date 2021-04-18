<template>
  <div>
    <md-toolbar class="md-primary">
      <!--      <h3 class="md-title">Filmguru</h3>-->
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <h3>
            Filmguru
          </h3>
        </div>

        <md-autocomplete
            class="search"
            v-model="search"
            :md-options="[]"
            md-layout="box">
          <label>Suchen nach...</label>
        </md-autocomplete>

        <div class="md-toolbar-section-end">
          <md-field class="selection">
            <label style="color: #fff">Type</label>
            <md-select v-model="type" class="selection" name="country" md-dense>
              <md-option value="">Ohne</md-option>
              <md-option value="movie">Film</md-option>
              <md-option value="series">Serie</md-option>
              <md-option value="episode">Episode</md-option>
              <md-option value="game">Spiel</md-option>
            </md-select>
          </md-field>
          <md-field class="page" >
            <label style="color: #fff">Seite</label>
            <md-input v-model="page" ></md-input>
          </md-field>
          <md-button class="md-icon-button" @click="loadMovieData">
            <md-icon>search</md-icon>
          </md-button>
        </div>
      </div>
    </md-toolbar>
    <md-empty-state
        md-rounded
        md-icon="search"
        md-label="Nothing in to see"
        md-description="Search for an Movie title, your favorite series or one of your most played games to get started."
        class="empty"
      v-if="showEmpty">
    </md-empty-state>
    <Movie v-for="movie in results" :id="movie.imdbID" :img="movie.Poster" :year="movie.Year"
           :title="movie.Title"></Movie>
  </div>
</template>

<script>
import Axios from "axios";
import Movie from "@/components/ue11/Movie";

export default {
  name: "ue11",
  components: {Movie},
  data() {
    return {
      results: [],
      type: '',
      search: '',
      page: 1,
      showEmpty: true
    }
  },
  methods: {
    loadMovieData() {
      this.showEmpty = false;

      //  http://www.omdbapi.com/?apikey=29fd5fd2&r=json&s=horror&type=movie&page=1
      const axios = require('axios');
      const self = this;
      console.log(`http://www.omdbapi.com/?apikey=29fd5fd2&r=json&s=${self.search.replaceAll(' ', '%20')}&type=${self.type}&page=${self.page}`);
      Axios.get(`http://www.omdbapi.com/?apikey=29fd5fd2&r=json&s=${self.search}&type=${self.type}&page=${self.page}`)
          .then(response => {
            self.results = response.data.Search;
          }).catch()
    }
  }
}
</script>

<style scoped>
.search {
  max-width: 500px;
}

.selection {
  color: #fff !important;
  max-width: 100px;
}

.selection.label {
  color: #fff;
}

.page {
  width: 50px;
  margin-left: 25px;
  color: #fff !important;
}

.empty {
  margin-top: 150px;
}


.md-field.md-theme-default.md-focused .md-input, .md-field.md-theme-default.md-focused .md-textarea, .md-field.md-theme-default.md-has-value .md-input, .md-field.md-theme-default.md-has-value .md-textarea {
  -webkit-text-fill-color: rgba(255,255,255,1);
}

.md-input {
  color: white;
}
</style>
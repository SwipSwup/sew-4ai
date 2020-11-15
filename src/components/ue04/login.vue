<template>
  <div>
    <md-card class="card">
      <md-card-header class="header">
        <div class="md-title">{{ title }}</div>
      </md-card-header>

      <md-card-content>
        <md-field>
          <label>{{ emailPlaceholder }}</label>
          <md-input class="input" type="email"></md-input>
        </md-field>
        <md-field>
          <label>{{ passwordPlaceholder }}</label>
          <md-input type="password"></md-input>
        </md-field>

      </md-card-content>

      <md-card-actions>
        <md-button class="md-dense md-raised button">{{ buttonText }}</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "login",
  props: {
    title: String,
    emailPlaceholder: String,
    passwordPlaceholder: String,
    buttonText: String
  }
}

</script>

<style scoped>
.card {
  /*max-width: 300px;*/
}

.header {
  background: #3b5998;
  color: #fff;
}

.button {
  background: #3b5998 !important;
  color: #fff !important;
}
</style>

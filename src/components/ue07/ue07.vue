<template>
  <div>


    <md-toolbar class="md-primary">
      <h3 class="md-title">Primary</h3>
    </md-toolbar>

    <form>
      <div class="flex">
        <md-field>
          <label for="titel">Titel</label>
          <md-select v-model="titel">
            <md-option value="0">Mag.</md-option>
            <md-option value="1">Dr.</md-option>
            <md-option value="2">Dipl.-Ing.</md-option>
            <md-option value="3">Prof.</md-option>
            <md-option value="4">Univ.-Prof.</md-option>
          </md-select>
          <span class="md-helper-text">This config is global.</span>
        </md-field>
        <md-field>
          <label>Name</label>
          <md-input v-model="required" required></md-input>
          <span class="md-error">There is an error</span>
        </md-field>
      </div>
      <div class="flex">
        <md-field :class="messageClass">
          <label>Email</label>
          <md-input v-model="email" required></md-input>
          <span class="md-error">There is an error</span>
        </md-field>
        <md-field :class="messageClass">
          <label>Telefon</label>
          <md-input v-model="type"></md-input>
          <span class="md-error">There is an error</span>
        </md-field>
      </div>
      <div class="flex">
        <md-field>
          <md-datepicker v-model="selectedDate">
            <label>Geburtsdatum</label>
          </md-datepicker>
        </md-field>
        <md-field :class="messageClass">
          <label>Homepage</label>
          <md-input v-model="type"></md-input>
          <span class="md-error">There is an error</span>
        </md-field>
      </div>
      <div class="flex">
        <md-field>
          <label>Passwort</label>
          <md-input v-model="password" type="password"></md-input>
        </md-field>
        <md-field>
        <label>Passwort wiederholen</label>
        <md-input v-model="password" type="password"></md-input>
      </md-field>
      </div>
      <md-button class="md-raised md-primary" type="submit">Submit</md-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ue07"
}
</script>

<style scoped>
.flex {
  display: flex;
}
</style>

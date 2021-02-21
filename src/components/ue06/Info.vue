<template>
<div>
      <router-view />
      <md-card>
            <md-card-header>
                  <div class="md-title">Dies ist eine Vue.js App erstellt von <a href="https://www.oefb.at/bewerbe/Spieler/7087023?Michael-Werdenich">mir</a></div>
            </md-card-header>

            <md-card-content>
                  Vue.js (View, englische Aussprache [vjuː]) ist ein clientseitiges JavaScript-Webframework <br>
                  zum Erstellen von Single-Page-Webanwendungen nach dem MVVM-Muster, es kann allerdings auch <br>
                  in Multipage-Webseiten für einzelne Abschnitte verwendet werden. Ab Version 2.0 unterstützt es auch serverseitiges Rendern.
            </md-card-content>

            <md-card-actions>
                  <router-link :to="{ name: 'liste' }">
                        <md-button class="md-raised md-primary">Zurück</md-button>
                  </router-link>
            </md-card-actions>
      </md-card>
</div>
</template>

<script>
export default {
  name: "Info"

}
</script>

<style scoped>
</style>
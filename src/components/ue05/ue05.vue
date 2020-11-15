<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Reihung</div>
      </md-card-header>

      <md-card-content>
        <entry name="Peggi Petra"></entry>
        <entry name="Leesa"></entry>
        <entry name="Gamer"></entry>
        <entry name="Gamer"></entry>
        <entry name="Gamer"></entry>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import Entry from "@/components/ue05/entry";
export default {
  name: "ue05",
  components: {Entry}
}
</script>

<style scoped>
  .md-card {
    width: 600px;
  }
  .md-card-header {
    background: #448aff;
    color: #fff;
  }
</style>
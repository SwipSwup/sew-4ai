<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">
          Reihung
        </div>
      </md-card-header>

      <md-card-content>
        <entry
          v-for="name in names"
          :teilnehmer-anz="entrySize"
          :name="name"
        />
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import Entry from "@/components/ue05/entry";
import nameList from "./name_list.txt";
import  Vuex from "vuex"

export default {
  name: "Ue05",
  components: {Entry},
  data() {
    return {
      entrySize: 5,
      disabledButtons: [],
      names: []
    }
  },

  created() {
    this.entrySize = Math.floor(Math.random() * 11) + 5;
    this.loadNameList();
  },

  methods: {
    loadNameList() {
      const tmp = nameList.split("\n");
      for (let i = 0; i < this.entrySize; i++) {
        const newName = tmp[Math.floor(Math.random() * tmp.length - 1)];
        if (!this.names.includes(newName))
          this.names.push(newName);
      }
    }
  }
}
</script>

<style scoped>
.md-card {
  min-width: 600px;
}

.md-card-header {
  background: #448aff;
  color: #fff;
}
</style>
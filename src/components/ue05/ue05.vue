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
          :disabled-buttons="disabledButtons"
          name="Peggie Petra"
          @on-button-update="updateButtons($event)"
        />
        <entry
          :disabled-buttons="disabledButtons"
          name="Leesa Stife"
          @on-button-update="updateButtons($event)"
        />
        <entry
          :disabled-buttons="disabledButtons"
          name="Guido Paddington"
          @on-button-update="updateButtons($event)"
        />
        <entry
          :disabled-buttons="disabledButtons"
          name="Salomo Hitzke"
          @on-button-update="updateButtons($event)"
        />
        <entry
          :disabled-buttons="disabledButtons"
          name="Betta Nannizzi"
          @on-button-update="updateButtons($event)"
        />
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import Entry from "@/components/ue05/entry";

export default {
  name: "Ue05",
  components: {Entry},
  data: () => ({
    disabledButtons: [false, false, false, false, false]
  }),

  methods: {
    updateButtons(input) {
      if (input[1] !== undefined) 
        this.$set(this.disabledButtons, input[1], false)
      this.$set(this.disabledButtons, input[0], true)
    }
  }
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
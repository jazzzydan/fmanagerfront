<template>
  <select v-model="selectedConfederationId"
          @change="emitSelectedConfederationId"
          class="form-select">
    <option selected value="0">Confederations</option>
    <option v-for="confederation in confederations" :value="confederation.confederationId" :key="confederation.confederationId">
      {{confederation.confederationName}}</option>
  </select>
</template>

<script>
import router from "@/router";

export default {
  name: "ConfederationDropdown",
  data() {
    return {
      selectedConfederationId: 0,
      confederations: [
        {
          confederationId: 0,
          confederationName: '',
          confederationDescription: ''
        }
      ]
    }
  },
  methods: {
    sendGetConfederationsRequest() {
      this.$http.get("/confederations")
          .then(response => {
            this.confederations = response.data
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },

    emitSelectedConfederationId() {
      this.$emit('event-selected-confederation-change', this.selectedConfederationId)
    }
  },
  beforeMount() {
    this.sendGetConfederationsRequest()
  }
}
</script>
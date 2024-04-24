<template>
  <select v-model="positionId"
          @change="emitSelectedPosition"
          class="form-select">
    <option selected :value="0">Position</option>
    <option v-for="position in positions" :value="position.positionId" :key="position.positionId">
      {{position.positionCode}}
    </option>
  </select>
</template>

<script>

import router from "@/router";

export default {
  name: "PositionDropdown",

  data() {
    return {
      positionId: 0,
      positions: []
    }
  },

  methods: {
    sendGetPositionsRequest() {
      this.$http.get('/positions')
          .then(response => {
            this.positions = response.data
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },

    emitSelectedPosition() {
      // this.$emit('event-selected-position-change' ,this.selectedPositionId)
    }

  },
  beforeMount() {
    this.sendGetPositionsRequest()
  }
}
</script>



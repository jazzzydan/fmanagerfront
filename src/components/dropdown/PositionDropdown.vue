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
  props: {
    observationPositionId: Number
  },

  data() {
    return {
      positionId: 0,
      positions: [
        {
          positionId: 0,
          positionCode: ''
        }
      ]
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
      // this.$emit('event-selected-position-change' ,this.positionId)
    }

  },
  beforeMount() {
    this.sendGetPositionsRequest()
    if (isNaN(this.observationPositionId)) {
      this.positionId = 0
    }
    this.positionId = this.observationPositionId
  }
}
</script>



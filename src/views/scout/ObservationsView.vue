
<template>
  <h1>This is an OBSERVATIONS page</h1>



</template>


<script>
export default {
  name: "ObservationsView",

  data() {
    return {
      selectedPlayerId: 0
    }
  },
  methods: {
    forwardPlayerId(playerId) {
      this.selectedPlayerId = playerId
    }
  }
}
</script>

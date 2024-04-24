<template>
  <select v-model="selectedPlayerId"
          @change="emitSelectedPlayer"
          class="form-select">
    <option selected :value="0">Players</option>
    <option v-for="player in players" :value="player.playerId" :key="player.playerId">
      {{player.playerName}}
    </option>
  </select>
</template>

<script>

import router from "@/router";

export default {
  name: "PlayerDropdown",

  data() {
    return {
      selectedPlayerId: 0,
      players: []
    }
  },
  methods: {
    sendGetPlayersRequest() {
      this.$http.get('/players/all')
          .then(response => {
            this.players = response.data
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },

    emitSelectedPlayer() {
      this.$emit('event-selected-player-change' ,this.selectedPlayerId)
    }

  },
  beforeMount() {
    this.sendGetPlayersRequest()
  }
}
</script>



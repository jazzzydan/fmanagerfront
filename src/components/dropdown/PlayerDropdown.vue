<template>
  <select v-model="selectedPlayerId"
          @change="emitSelectedPlayerId"
          ref="playerDropdownRef"
          class="form-select">
    <option selected value="0">Players</option>
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
      players: [
        {
          playerId: 0,
          playerName: ''
        }
      ]

    }
  },
  methods: {
    sendGetPlayersRequest() {
      this.$http.get(`/players/${this.selectedPlayerId}`)
          .then(response => {
            this.players = response.data
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },
    getSelectedPlayerId(playerId) {
      this.selectedPlayerId = playerId
      this.sendGetPlayersRequest()
    },
    emitSelectedPlayerId() {
      this.$emit('event-selected-player-change' ,this.selectedPlayerId);
    }

  },
  beforeMount() {
    this.sendGetPlayersRequest()
  }
}
</script>



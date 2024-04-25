<template>
  <select v-model="gameId"
          @change="emitSelectedGame"
          class="form-select">
    <option selected :value="0">Game</option>
    <option v-for="game in games" :value="game.gameId" :key="game.gameId">
      {{game.gameDate}} : {{game.gameHomeClubName}} VS {{game.gameAwayClubName}}
    </option>
  </select>
</template>

<script>

import router from "@/router";

export default {
  name: "GameDropdown",
  props: {
    observationGameId: Number
  },

  data() {
    return {
      gameId: 0,
      games: []
    }
  },

  methods: {
    sendGetGamesRequest() {
      this.$http.get(`/game/${this.gameId}`)
          .then(response => {
            this.games = response.data
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },

    emitSelectedGame() {
      // this.$emit('event-selected-game-change' ,this.selectedGameId)
    }

  },
  beforeMount() {
    this.sendGetGamesRequest()
    if (isNaN(this.observationGameId)) {
      this.gameId = 0
    }
    this.gameId = this.observationGameId
  }
}
</script>



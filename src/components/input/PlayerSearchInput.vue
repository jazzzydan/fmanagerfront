<template>
  <div>
    <input v-model="playerName" type="text" class="form-control" placeholder="Search for a player...">
    <button @click="searchPlayers" class="btn btn-primary">Search</button>

  </div>
</template>
<script>
import data from "bootstrap/js/src/dom/data";
import router from "@/router";

export default {
  name: "PlayerSearchInput",
  data() {
    return {
      confederationId: 0,
      countryId: 0,
      leagueId: 0,
      clubId: 0,
      playerName: ''
    }

    },
  methods:{

    searchPlayers() {
      this.$emit('event-player-search-name-change', this.playerName);

    },
  },

}
</script>


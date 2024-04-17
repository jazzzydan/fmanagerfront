<template>
  <div class="input-group">
    <input v-model="playerName"
           ref="playerSearchInputRef" type="text"
           class ="form-control"
           @change = "emitPlayerSearchName">

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

    emitPlayerSearchName() {
      this.$emit('event-player-search-name-change', this.playerName);

    },
  },

}
</script>


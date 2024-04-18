<template>
  <div class="input-group mb-3">
    <input ref="playerSearchInputRef" v-model="playerName" type="text" class="form-control" placeholder="Search" aria-describedby="button-addon2">
    <button @click="executePlayerSearch" class="btn btn-outline-secondary" type="button">Search</button>
  </div>
</template>
<script>

export default {
  name: "PlayerSearchInput",
  data() {
    return {
      playerName: ''
    }

    },
  methods:{

    executePlayerSearch() {
      this.$emit('event-player-search-name-enter', this.playerName);
      this.playerName = ''
    }
  }

}
</script>


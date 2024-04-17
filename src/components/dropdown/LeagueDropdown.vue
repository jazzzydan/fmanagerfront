<template>
  <select v-model="selectedLeagueId"
          @change="emitSelectedLeagueId"
          ref="emitSelectedClubId"
          class="form-select">
    <option selected value="0">All leagues</option>
    <option v-for="league in leagues" :value="league.leagueId" :key="league.leagueId">
      {{league.leagueName}}</option>
  </select>
</template>

<script>
import router from "@/router";

export default {
  name: "LeagueDropdown",
  data() {
    return {
      selectedCountryId: 0,
      selectedLeagueId: 0,
      leagues: [
        {
          leagueId: 0,
          leagueName: '',
        }
      ]
    }
  },
  methods: {
    sendGetLeaguesRequest() {
      this.$http.get(`/leagues/${this.selectedCountryId}`)
          .then(response => {
            this.leagues = response.data
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },

    getSelectedCountryId(countryId) {
      this.selectedCountryId = countryId
      this.sendGetLeaguesRequest()
    },

    emitSelectedLeagueId() {
      this.$emit('event-selected-league-change', this.selectedLeagueId)    // 'event-selected-league-change' ... !!!
    }
  },
  beforeMount() {
    this.sendGetLeaguesRequest()
  }
}
</script>
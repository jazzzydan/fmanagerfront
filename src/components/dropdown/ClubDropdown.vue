<template>
  <select v-model="selectedLeagueClubId"
          @change="emitSelectedLeagueClubId"
          ref="clubDropdown"
          class="form-select">
    <option selected value="0">Clubs</option>
    <option v-for="club in clubs" :value="club.clubId" :key="club.clubId">
      {{club.clubName}}</option>
  </select>
</template>

<script>

import router from "@/router";

export default {
  name: "ClubDropdown",
  data() {
    return {
      selectedLeagueId: 0,
      selectedLeagueClubId: 0,
      clubs: [
        {
          clubId: 0,
          clubName: ''
        }
      ]

    }
  },
  methods: {
    sendGetLeagueClubsRequest() {
      //this.$http.get(`/countries/${this.selectedConfederationId}`)
      this.$http.get(`/leagueclubs${this.selectedLeagueId}`)
          .then(response => {
            this.clubs = response.data
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },
    getSelectedClubId(clubId) {
      this.selectedLeagueClubId = clubId
      this.sendGetLeagueClubsRequest()
    },
    emitSelectedLeagueClubId() {
      this.$emit('event-selected-club-change' ,this.selectedLeagueClubId);
    }

  },
  beforeMount() {
    this.sendGetLeagueClubsRequest()
  }
}
</script>



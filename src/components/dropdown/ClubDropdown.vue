<template>
  <select v-model="selectedClubId"
          @change="emitSelectedClubId"
          ref="clubDropdownRef"
          class="form-select">
    <option selected value="0">All clubs</option>
    <option v-for="club in clubs" :value="club.clubId" :key="club.clubId">
      {{club.clubName}}
    </option>
  </select>
</template>

<script>

import router from "@/router";

export default {
  name: "ClubDropdown",
  data() {
    return {
      selectedLeagueId: 0,
      selectedClubId: 0,
      clubs: [
        {
          clubId: 0,
          clubName: ''
        }
      ]

    }
  },
  methods: {
    sendGetClubsRequest() {
      this.$http.get(`/clubs/${this.selectedLeagueId}`)
          .then(response => {
            this.clubs = response.data
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },
    getSelectedLeagueId(leagueId) {
      this.selectedLeagueId = leagueId
      this.sendGetClubsRequest()
    },
    emitSelectedClubId() {
      this.$emit('event-selected-club-change' ,this.selectedClubId);
    }

  },
  beforeMount() {
    this.sendGetClubsRequest()
  }
}
</script>



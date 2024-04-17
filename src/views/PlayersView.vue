<template>
  <h1>This is an PLAYERS page</h1>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <ConfederationDropdown ref="confederationDropdownRef" @event-selected-confederation-change="setConfederationId"/>
      </div>
      <div class="col">
        <CountryDropdown ref="countryDropdownRef"/>
      </div>
      <div class="col">
        <LeagueDropdown ref="leagueDropdownRef" @event-selected-league-change = "setLeagueId"/>
      </div>
      <div class="col">
        <ClubDropdown ref="clubDropdownRef" @event-selected-club-change="setClubId"/>
      </div>
      <div class="col">
        Search field
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col">
      Add player button
    </div>
    <div class="row">
<!--      todo: Add Players table functionality-->
      <PlayersTable ref="playersTableRef" @event-selected-player-click="forwardPlayerId" />
    </div>
  </div>
</template>

<script>

import PlayersTable from "@/components/table/PlayersTable.vue";
import ConfederationDropdown from "@/components/dropdown/ConfederationDropdown.vue";
import ClubDropdown from "@/components/dropdown/ClubDropdown.vue";
import CountryDropdown from "@/components/dropdown/CountryDropdown.vue";
import LeagueDropdown from "@/components/dropdown/LeagueDropdown.vue";

export default {
  name: "PlayersView",
  components: {LeagueDropdown, ClubDropdown, CountryDropdown, ConfederationDropdown, PlayersTable},

  data() {
    return {
      errorMessage: '',
      successMessage: '',

      confederationId: 0,
      countryId: 0,
      leagueId: 0,
      clubId: 0
    }
  },
  methods: {
    setConfederationId(selectedConfederationId) {
      this.confederationId = selectedConfederationId
      this.$refs.countryDropdownRef.getSelectedConfederationId(selectedConfederationId)

    },
    setLeagueId(selectedLeagueId) {
      this.leagueId = selectedLeagueId
      this.$refs.clubDropdownRef.getSelectedLeagueId(selectedLeagueId)
    },

    setClubId(selectedClubId) {
      this.clubId = selectedClubId
      this.$refs.playersTableRef.getSelectedClubId(selectedClubId)
    },

    forwardPlayerId(playerId) {
      this.$emit('event-selected-player-click', playerId)
    }
  }
}


</script>

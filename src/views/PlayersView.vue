<template>

  <div class="container text-center">
    <div class="row">
      <div class="col">
        <ConfederationDropdown ref="confederationDropdownRef"
                               @event-selected-confederation-change="setConfederationId"/>
      </div>
      <div class="col">
        <CountryDropdown ref="countryDropdownRef"
                         @event-selected-country-change="setCountryId"/>
      </div>
      <div class="col">
        <LeagueDropdown ref="leagueDropdownRef"
                        @event-selected-league-change="setLeagueId"/>
      </div>
      <div class="col">
        <ClubDropdown ref="clubDropdownRef"
                      @event-selected-club-change="setClubId"/>
      </div>
      <div class="col">
        <PlayerSearchInput @event-player-search-name-enter = "searchPlayer"/>
          </div>
        </div>
      </div>
  <div class="row">
    <div class="col">
      <div class="d-grid col-5 mx-auto m-3">
        <button @click="openPlayerDetailsModal(this.playerId, '')" class="btn btn-primary" type="button">
          Add Player
        </button>
        <PlayerDetailsModal ref="playerDetailsModalRef"/>
      </div>
    </div>
    <div class="row">
         <PlayersTable ref="playersTableRef"/>
    </div>
  </div>
</template>

<script>

import PlayersTable from "@/components/table/PlayersTable.vue";
import ConfederationDropdown from "@/components/dropdown/ConfederationDropdown.vue";
import ClubDropdown from "@/components/dropdown/ClubDropdown.vue";
import CountryDropdown from "@/components/dropdown/CountryDropdown.vue";
import LeagueDropdown from "@/components/dropdown/LeagueDropdown.vue";
import PlayerSearchInput from "@/components/input/PlayerSearchInput.vue";
import PlayerDetailsModal from "@/components/modal/PlayerDetailsModal.vue";
import DeletePlayerModal from "@/components/modal/DeletePlayerModal.vue";

export default {
  name: "PlayersView",
  components: {
    DeletePlayerModal,
    PlayerDetailsModal,
    LeagueDropdown,
    ClubDropdown,
    CountryDropdown,
    ConfederationDropdown,
    PlayersTable,
    PlayerSearchInput
  },

  data() {
    return {
      errorMessage: '',
      successMessage: '',
      playerId: 0,
      selectedPlayerId: 0,

      playersRequest: {
        confederationId: 0,
        countryId: 0,
        leagueId: 0,
        clubId: 0,
        playerName: '',
        playerId: '',
      }
    }
  },
  methods: {
    setConfederationId(selectedConfederationId) {
      this.playersRequest.confederationId = selectedConfederationId
      this.$refs.countryDropdownRef.getSelectedConfederationId(selectedConfederationId)
      this.handleDropdownChange()
    },

    setCountryId(selectedCountryId) {
      this.playersRequest.countryId = selectedCountryId
      this.$refs.leagueDropdownRef.getSelectedCountryId(selectedCountryId)
      this.handleDropdownChange()
    },

    setLeagueId(selectedLeagueId) {
      this.playersRequest.leagueId = selectedLeagueId
      this.$refs.clubDropdownRef.getSelectedLeagueId(selectedLeagueId)
      this.handleDropdownChange()
    },

    setClubId(selectedClubId) {
      this.playersRequest.clubId = selectedClubId
      // this.$refs.playersTableRef.getSelectedClubId(selectedClubId)
      this.handleDropdownChange()
    },

    handleDropdownChange() {
      this.$refs.playersTableRef.updatePlayersTable(this.playersRequest)
    },

    searchPlayer(playerName) {
      this.updatePlayersRequest(playerName)
      this.$refs.playersTableRef.updatePlayersTable(this.playersRequest)
      this.playersRequest.playerName = ''
    },

    updatePlayersRequest(playerName) {
      this.playersRequest.playerName = playerName
      this.playersRequest.confederationId = 0
      this.playersRequest.countryId = 0
      this.playersRequest.leagueId = 0
      this.playersRequest.clubId = 0
      this.resetDropdowns()
    },

    resetDropdowns() {
      this.$refs.confederationDropdownRef.resetConfederationDropdown()
      this.$refs.countryDropdownRef.resetCountryDropdown()
      this.$refs.leagueDropdownRef.resetLeagueDropdown()
      this.$refs.clubDropdownRef.resetClubDropdown()
    },

    openPlayerDetailsModal(playerId, playerName) {
      // if (playerId !== 0) {
      //   // Edit mode: Pass player ID to modal to load player data for editing
      //   this.$refs.playerDetailsModalRef.openPlayerDetailsModal(playerId);
      // } else {
      //   // Add mode: Open modal for adding a new player
      this.$refs.playerDetailsModalRef.openPlayerDetailsModal(playerId, playerName);
    }
  },

mounted() {

  }
}

</script>

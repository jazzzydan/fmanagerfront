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
        <PlayerSearchInput @event-player-search-name-enter="searchPlayer"/>
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
      <PlayersTable ref="playersTableRef"/>
      <DeletePlayerModal ref="deletePlayerModalRef" :playerId="selectedPlayerId" @event-player-deleted="handlePlayerDeleted" />


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
    PlayerDetailsModal, LeagueDropdown, ClubDropdown, CountryDropdown, ConfederationDropdown, PlayersTable, PlayerSearchInput},

  data() {
    return {
      errorMessage: '',
      successMessage: '',

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
      this.playersRequest.playerName = playerName
      this.playersRequest.confederationId = 0
      this.playersRequest.countryId = 0
      this.playersRequest.leagueId = 0
      this.playersRequest.clubId = 0
      this.handleDropdownChange()
    },
    handlePlayerDeleted(playerId) {
      // Handle the player deleted event if needed.
      // Respond to the event emitted when a player is successfully deleted.
    },

    // openDeleteInfoModal(playerId) {
    //   // Check if the component has been mounted
    //   if (this.$refs.deletePlayerModalRef) {
    //     // Access the $refs property if it exists
    //     this.$refs.deletePlayerModalRef.$refs.modalRef.openModal();
    //   } else {
    //     // Handle the case when the component has not been mounted
    //     console.error('DeletePlayerModal component has not been mounted yet');
    //   }
    },



}

</script>

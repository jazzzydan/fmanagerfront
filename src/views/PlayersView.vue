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
      <AddPlayerButton ref="addPlayerModalRef"/>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button @click="openAddPlayerModal" class="btn btn-primary" type="button">Add Player</button>
        <br>
    </div>
    </div>
  </div>
    <div class="row">
      <!--      todo: Add Players table functionality-->
      <PlayersTable ref="playersTableRef"/>
    </div>

</template>

<script>

import PlayersTable from "@/components/table/PlayersTable.vue";
import ConfederationDropdown from "@/components/dropdown/ConfederationDropdown.vue";
import ClubDropdown from "@/components/dropdown/ClubDropdown.vue";
import CountryDropdown from "@/components/dropdown/CountryDropdown.vue";
import LeagueDropdown from "@/components/dropdown/LeagueDropdown.vue";
import PlayerSearchInput from "@/components/input/PlayerSearchInput.vue";
import router from "@/router";
import PlayerDetailsModal from "@/components/modal/PlayerDetailsModal.vue";
import AddPlayerModal from "@/components/modal/AddPlayerModal.vue";
import AddPlayerButton from "@/components/button/AddPlayerButton.vue";

export default {
  name: "PlayersView",
  computed: {
    AddPlayerModal() {
      return AddPlayerModal
    }
  },
  components: {
    AddPlayerButton,
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

      playersRequest: {
        confederationId: 0,
        countryId: 0,
        leagueId: 0,
        clubId: 0,
        playerName: ''
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
      this.playersRequest.playerName = ''
    },
    openAddPlayerModal() {
      this.$refs.addPlayerModalRef.$refs.modalRef.openModal()
    },
  }
}

</script>

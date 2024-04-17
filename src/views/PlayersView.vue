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
        League dropdown
      </div>
      <div class="col">
        Club dropdown
        <ClubDropdown ref="clubDropdownRef"/>
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
      <PlayersTable/>
    </div>
  </div>
</template>

<script>

import PlayersTable from "@/components/table/PlayersTable.vue";
import ConfederationDropdown from "@/components/dropdown/ConfederationDropdown.vue";
import ClubDropdown from "@/components/dropdown/ClubDropdown.vue";
import CountryDropdown from "@/components/dropdown/CountryDropdown.vue";

export default {
  name: "PlayersView",
  components: {CountryDropdown, ConfederationDropdown, PlayersTable},

  data() {
    return {
      errorMessage:'',
      successMessage:'',

      confederationId:0
    }
  },
  methods: {
    setConfederationId(selectedConfederationId) {
      this.confederationId = selectedConfederationId
      this.$refs.countryDropdownRef.getSelectedConfederationId(selectedConfederationId)

    },
    getSelectedClubId(clubId) {
      this.selectedLeagueClubId = selectedClubId
      this.$refs.clubDropdownRef.getSelectedClubId()
    },


</script>

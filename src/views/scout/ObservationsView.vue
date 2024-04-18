<template>

  <div class="container text-center">
    <PlayerObservationModal ref="playerObservationModalRef"/>
    <StatisticsModal ref="statisticsModalRef"/>
    <div class="row">
      <AlertDanger :message="errorMessage"/>
      <AlertSuccess :message="successMessage"/>
    </div>
    <div class="row">
      <div class="col">
        <PlayerDropdown ref="playerDropdownRef"
        @event-selected-player-change="forwardPlayerId"/>
      </div>
      <div class="col">
        <PlayerSearchInput @event-player-search-name-enter="searchPlayer"/>
      </div>
      <div class="col">
        <button @click="openPlayerObservationModal" class="btn btn-success" type="button">Add new observation</button>
      </div>
    </div>
    <div class="row">
      <ObservationsTable/>
    </div>
    <div class="row">
      <div class="col">
        Next game button
      </div>
      <div class="col">
        <button @click="openPlayerObservationModal" class="btn btn-success" type="button">New observation</button>
<!--        todo: kas saata uuele lehele voi teha uus modal-->
      </div>
      <div class="col">
        <button @click="openStatisticsModal" class="btn btn-success" type="button">Statistics</button>
      </div>
    </div>
  </div>

</template>


<script>
import PlayerDropdown from "@/components/dropdown/PlayerDropdown.vue";
import ConfederationDropdown from "@/components/dropdown/ConfederationDropdown.vue";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";
import PlayerObservationModal from "@/components/modal/PlayerObservationModal.vue";
import StatisticsModal from "@/components/modal/StatisticsModal.vue";
import PlayerSearchInput from "@/components/input/PlayerSearchInput.vue";
import ObservationsTable from "@/components/table/ObservationsTable.vue";

export default {
  name: "ObservationsView",
  components: {
    ObservationsTable,
    PlayerSearchInput,
    StatisticsModal, PlayerObservationModal, AlertSuccess, AlertDanger, ConfederationDropdown, PlayerDropdown},
  props: {
    // URL + path variable
    playerId: String
  },

  data() {
    return {
      selectedPlayerId: 0,
      errorMessage: '',
      successMessage: '',

    }
  },
  methods: {
    forwardPlayerId() {
      this.selectedPlayerId = this.playerId
      this.$refs.playerDropdownRef.getSelectedPlayerId(this.selectedPlayerId)
    },

    searchPlayer(playerName) {

    },

    openPlayerObservationModal() {
      if (this.selectedPlayerId === 0) {
        this.errorMessage = 'Please select player'
        setTimeout(this.resetAlertMessages, 3000)
      } else {
        this.$refs.playerObservationModalRef.$refs.modalRef.openModal()
      }
    },

    openStatisticsModal() {
      if (this.selectedPlayerId === 0) {
        this.errorMessage = 'Please select player'
        setTimeout(this.resetAlertMessages, 3000)
      } else {
        // this.$refs.statisticsModalRef.$refs.modalRef.openModal()
      }
    },

    resetAlertMessages() {
      this.errorMessage = ''
      this.successMessage = ''
    },

  },
  mounted() {
    this.forwardPlayerId()
  }
}
</script>

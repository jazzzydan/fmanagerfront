
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
        <PlayerDropdown ref="playerDropdownRef" @event-selected-player-change="updatePlayerId"/>
      </div>
      <div class="col">

          <select class="form-select">
            <option selected :value="0">Year</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>

      </div>
      <div class="col">
        <button @click="openPlayerObservationModal" class="btn btn-primary custom-button" type="button">Add new observation</button>
      </div>
    </div>
    <div class="row">
      <ObservationsTable ref="observationsTableRef"/>
    </div>
    <div class="row">
      <div class="col">
        <button @click="" class="btn btn-success custom-button" type="button">Next game</button>
      </div>
      <div class="col">
        <button @click="" class="btn btn-success custom-button" type="button">Schedule</button>
      </div>
      <div class="col">
        <button @click="openStatisticsModal" class="btn btn-success custom-button" type="button">Statistics</button>
      </div>
    </div>
  </div>
</template>


<script>
import PlayerDropdown from "@/components/dropdown/PlayerDropdown.vue";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";
import PlayerObservationModal from "@/components/modal/PlayerObservationModal.vue";
import StatisticsModal from "@/components/modal/StatisticsModal.vue";
import PlayerSearchInput from "@/components/input/PlayerSearchInput.vue";
import ObservationsTable from "@/components/table/ObservationsTable.vue";
import {useRoute} from "vue-router";

export default {
  name: "ObservationsView",
  components: {
    ObservationsTable,
    PlayerSearchInput,
    StatisticsModal,
    PlayerObservationModal,
    AlertSuccess,
    AlertDanger,
    PlayerDropdown},

  data() {
    return {
      selectedPlayerId: Number(useRoute().query.playerId),
      errorMessage: '',
      successMessage: ''

    }
  },
  methods: {
    forwardPlayerId() {
      if (isNaN(this.selectedPlayerId)) {
        this.selectedPlayerId = 0
      }
      this.$refs.observationsTableRef.selectedPlayerId = this.selectedPlayerId
      this.$refs.observationsTableRef.updateObservationsTable()
      this.$refs.playerDropdownRef.selectedPlayerId = this.selectedPlayerId
    },

    updatePlayerId(playerId) {
      this.selectedPlayerId = playerId
      this.$refs.observationsTableRef.selectedPlayerId = this.selectedPlayerId
      this.$refs.observationsTableRef.updateObservationsTable()
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

<style scoped>
.custom-button {
  width: 100%;
}
</style>

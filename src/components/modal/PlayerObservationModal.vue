<template>
  <Modal ref="modalRef">
    <template #title>
      <span v-if="observationId === 0">New observation</span>
      <span v-else>Edit observation</span>
    </template>
    <template #body>
      <div class="modal-body">
        <div class="container-fluid">
          <div class="row mb-3 align-content-md-center">
            <AlertDanger :message="errorMessage" class="mb-3"/>
            <AlertSuccess :message="successMessage" class="mb-3"/>
            <GameDropdown :observationGameId="playerObservation.gameId" ref="gameDropdownRef"/>
          </div>
          <div class="row mb-3 align-content-md-center">
            <div class="col">
              <input v-model="playerObservation.observationDate" type="date" class="form-control">
            </div>
            <div class="col">
              <PositionDropdown :observationPositionId="playerObservation.positionId" ref="positionDropdownRef"/>
            </div>
          </div>
          <div class="row">
            <!-- First Group of Columns -->
            <div class="col">
              <div class="row mb-3">
                <div class="col-md-6 text-end">Marking:</div>
                <div class="col-md-6">
                  <input v-model="playerObservation.marking" type="number" class="form-control" aria-valuemin="0" aria-valuemax="10" min="0" max="10"
                         @input="validateInput">
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6 text-end">Set pieces:</div>
                <div class="col-md-6">
                  <input v-model="playerObservation.setPieces" type="number" class="form-control" aria-valuemin="0" aria-valuemax="10" min="0" max="10"
                         @input="validateInput">
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6 text-end">Technique:</div>
                <div class="col-md-6">
                  <input v-model="playerObservation.technique" type="number" class="form-control" aria-valuemin="0" aria-valuemax="10" min="0" max="10"
                         @input="validateInput">
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6 text-end">Heading:</div>
                <div class="col-md-6">
                  <input v-model="playerObservation.heading" type="number" class="form-control" aria-valuemin="0" aria-valuemax="10" min="0" max="10"
                         @input="validateInput">
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6 text-end">Passing:</div>
                <div class="col-md-6">
                  <input v-model="playerObservation.passing" type="number" class="form-control" aria-valuemin="0" aria-valuemax="10" min="0" max="10"
                         @input="validateInput">
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6 text-end">Aggression:</div>
                <div class="col-md-6">
                  <input v-model="playerObservation.agression" type="number" class="form-control" aria-valuemin="0" aria-valuemax="10" min="0" max="10"
                         @input="validateInput">
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6 text-end">Decisions:</div>
                <div class="col-md-6">
                  <input v-model="playerObservation.decisions" type="number" class="form-control" aria-valuemin="0" aria-valuemax="10" min="0" max="10"
                         @input="validateInput">
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6 text-end">Teamwork:</div>
                <div class="col-md-6">
                  <input v-model="playerObservation.teamwork" type="number" class="form-control" aria-valuemin="0" aria-valuemax="10" min="0" max="10"
                         @input="validateInput">
                </div>
              </div>
              <!-- Repeat similar structure for other fields -->
            </div>
            <!-- Second Group of Columns -->
            <div class="col">
              <!-- Repeat similar structure for other fields -->
              <div class="row mb-3">
                <div class="col-md-6 text-end">Acceleration:</div>
                <div class="col-md-6">
                  <input v-model="playerObservation.acceleration" type="number" class="form-control" aria-valuemin="0" aria-valuemax="10" min="0" max="10"
                         @input="validateInput">
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6 text-end">Pace:</div>
                <div class="col-md-6">
                  <input v-model="playerObservation.pace" type="number" class="form-control" aria-valuemin="0" aria-valuemax="10" min="0" max="10"
                         @input="validateInput">
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6 text-end">Stamina:</div>
                <div class="col-md-6">
                  <input v-model="playerObservation.stamina" type="number" class="form-control" aria-valuemin="0" aria-valuemax="10" min="0" max="10"
                         @input="validateInput">
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6 text-end">Strength:</div>
                <div class="col-md-6">
                  <input v-model="playerObservation.strenght" type="number" class="form-control" aria-valuemin="0" aria-valuemax="10" min="0" max="10"
                         @input="validateInput">
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6 text-end">Goals:</div>
                <div class="col-md-6">
                  <input v-model="playerObservation.goals" type="number" class="form-control" aria-valuemin="0" aria-valuemax="10" min="0" max="10"
                         @input="validateInput">
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6 text-end">Assists:</div>
                <div class="col-md-6">
                  <input v-model="playerObservation.assists" type="number" class="form-control" aria-valuemin="0" aria-valuemax="10" min="0" max="10"
                         @input="validateInput">
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6 text-end">Cards:</div>
                <div class="col-md-6">
                  <input v-model="playerObservation.cards" type="number" class="form-control" aria-valuemin="0" aria-valuemax="10" min="0" max="10"
                         @input="validateInput">
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6 text-end">Minutes:</div>
                <div class="col-md-6">
                  <input v-model="playerObservation.minutes" type="number" class="form-control" aria-valuemin="0" aria-valuemax="10" min="0" max="10"
                         @input="validateInput">
                </div>
              </div>
              <!-- Repeat similar structure for other fields -->
            </div>
          </div>
          <div class="row mb-3 align-content-md-center">
            <input v-model="playerObservation.comment" type="text" class="form-control" placeholder="Comment">
          </div>
        </div>
      </div>
    </template>
    <template #buttons>
      <div v-if="observationId === 0">
        <button @click="addObservation" type="submit" class="btn btn-success">Add</button>
      </div>
      <div v-else>
        <button @click="editObservation" type="submit" class="btn btn-success">Edit</button>
      </div>
    </template>

  </Modal>
</template>


<script>
import Modal from "@/components/modal/Modal.vue";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import PositionDropdown from "@/components/dropdown/PositionDropdown.vue";
import router from "@/router";
import GameDropdown from "@/components/dropdown/GameDropdown.vue";

export default {
  name: "PlayerObservationModal",
  components: {GameDropdown, PositionDropdown, AlertDanger, AlertSuccess, Modal},
  data() {
    return {
      // todo: playerId katte saada parent'ist elleks et uut nangijat lisada
      playerId: 0,
      observationId: 0,
      errorMessage: '',
      successMessage: '',
      
      playerObservation: {
        gameId: 0,
        gameHomeClubName: '',
        gameAwayClubName: '',
        gameDate: '',
        userId: sessionStorage.getItem('userId'),
        // todo: playerId parenti kaest katte saada selleks et uut nangijat lisada
        // playerId: this.$parent.
        observationDate: '',
        positionId: 0,
        marking: null,
        setPieces: null,
        technique: null,
        heading: null,
        passing: null,
        agression: null,
        decisions: null,
        teamwork: null,
        acceleration: null,
        pace: null,
        stamina: null,
        strenght: null,
        goals: null,
        assists: null,
        cards: null,
        minutes: null,
        comment: ''
      }

    }
  },
  methods: {

    handleOpenPlayerObservationModal(playerObservationId) {
      this.observationId = playerObservationId
      this.sendGetObservationRequest(playerObservationId)
    },

    sendGetObservationRequest(playerObservationId) {
      this.$http.get(`/observation/${playerObservationId}`)
          .then(response => {
            this.playerObservation = response.data
            this.$refs.modalRef.openModal()
          })
          .catch(error => {
            router.push({name: 'errorRoute'});
          })
    },

    sendPutObservationRequest() {
      this.$http.put(`/observation/${this.observationId}`, this.playerObservation
      ).then(response => {
        // sessionStorage.setItem('successMessage', 'Observation updated')
        this.successMessage = 'Observation updated'
        setTimeout(this.resetAlertMessages, 2100)
        setTimeout(this.navigateToObservationsView, 2100)
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },

    navigateToObservationsView() {
      this.$refs.modalRef.closeModal()
      router.push({name: 'observationsRoute'})
    },

    validateInput(event) {
      const value = parseInt(event.target.value);
      if (isNaN(value) || value < 0) {
        event.target.value = 0
        this.errorMessage = 'Please check input value'
        setTimeout(this.resetAlertMessages, 2100)
      } else if (value > 10) {
        event.target.value = 10
        this.errorMessage = 'Please check input value'
        setTimeout(this.resetAlertMessages, 2100)
      }
    },

    addObservation() {
      this.playerObservation.positionId = this.$refs.positionDropdownRef.positionId
      this.playerObservation.gameId = this.$refs.gameDropdownRef.gameId

    },

    editObservation() {
      this.playerObservation.positionId = this.$refs.positionDropdownRef.positionId
      this.playerObservation.gameId = this.$refs.gameDropdownRef.gameId
      this.sendPutObservationRequest();
    },

    resetAlertMessages() {
      this.errorMessage = ''
      this.successMessage = ''
    },


  }

}
</script>

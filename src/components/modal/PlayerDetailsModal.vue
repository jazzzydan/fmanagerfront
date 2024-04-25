<template>

  <Modal ref="modalRef">
    <template #title>
      <span v-if="playerId === 0">Add player</span>
      <span v-else>Edit player: {{ this.playerName }}</span>
      <!--      todo: if playerId is 0 -> Add player, else -> player Name-->

    </template>
    <template #body>
      <AlertDanger :message="errorMessage"/>
      <AlertSuccess :message="successMessage"/>
      <div class="container text-end">
        <div class="row mb-3">
          <div class="col align-content-md-center">Name:</div>
          <div class="col">
            <input v-model="playerDetails.playerName" type="text" class="form-control">
          </div>
        </div>
        <div class="row mb-3">
          <div class="col align-content-md-center">Club:</div>
          <div class="col">
            <ClubDropdown v-model="playerDetails.clubId"/>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col align-content-md-center">Gender:</div>
          <div class="col">
            <select v-model="playerDetails.gender" class="form-select" aria-label="Default select example">
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col  align-content-md-center">Date of Birth:</div>
          <div class="col">
            <input v-model="playerDetails.birthDate" type="date" class="form-control">
          </div>
        </div>
        <div class="row mb-3">
          <div class="col align-content-md-center">Height:</div>
          <div class="col">
            <input v-model="playerDetails.height" type="number" class="form-control">
          </div>
        </div>
        <div class="row mb-3">
          <div class="col align-content-md-center">Weight:</div>
          <div class="col">
            <input v-model="playerDetails.weight" type="number" class="form-control">
          </div>
        </div>
        <div class="row mb-3">
          <div class="col align-content-md-center">Nationality:</div>
          <div class="col">
            <input v-model="playerDetails.nationality" type="text" class="form-control" placeholder="EST" maxlength="3">
          </div>
        </div>
        <div class="row mb-3">
          <div class="col align-content-md-center">Best Foot:</div>
          <div class="col">
            <select v-model="playerDetails.bestFoot" class="form-select" aria-label="Default select example">
              <option value="L">Left</option>
              <option value="R">Right</option>
            </select>
          </div>
        </div>
      </div>
    </template>
    <template #buttons>
      <div v-if="playerId === 0">
        <button @click="addNewPlayer" type="submit" class="btn btn-success">Add player</button>
      </div>
      <div v-else isEdit>
        <button @click="editPlayer" type="submit" class="btn btn-success">Edit player</button>
      </div>


      <!--v-if-->
      <!--      todo: if playerId is 0 -> Add player: POST, else -> Update: PUT-->

    </template>
  </Modal>

</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import ClubDropdown from "@/components/dropdown/ClubDropdown.vue";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";
import router from "@/router";

export default {
  name: "PlayerDetailsModal",
  components: {AlertSuccess, AlertDanger, ClubDropdown, Modal},
  data() {

    return {
      successMessage: '',
      errorMessage: '',
      playerId: 0,
      playerName: '',
      isEdit: false,

      playerDetails: {
        playerName: '',
        clubId: '',
        gender: 'M',
        birthDate: '',
        height: 0,
        weight: 0,
        nationality: '',
        bestFoot: ''
      },
    }
  },

  methods: {
    openPlayerDetailsModal(playerId, playerName) {
      this.playerId = playerId;
      this.playerName = playerName;
      this.$refs.modalRef.openModal();
    },

    addNewPlayer() {
      if (this.allFieldsWithCorrectInput()) {
        this.sendPostPlayerRequest()
        this.handlePostPlayerResponse()
      } else {
        this.errorMessage = 'täida kõik väljad'
        setTimeout(this.resetMessage, 3000)
      }
    },


    sendPostPlayerRequest() {
      this.$http.post("/player", this.playerDetails)
          .then(() => this.handlePostPlayerResponse())
          .catch(error => {
            this.errorResponse = error.response.data
            this.handleError()
          })
    },


    editPlayer() {
      if (this.allFieldsWithCorrectInput()) {
        this.sendGetPlayerInfoRequest();
        this.handlePutPlayerResponse();
      } else {
        this.errorMessage = ' täida kõik väljad'
        setTimeout(this.resetMessage, 3000)
      }
    },

    sendGetPlayerInfoRequest() {
      this.$http.get(`/players/playersTable${this.players}`)
          .then(() => this.handlePutPlayerResponse)
          .catch(error => {
            this.errorResponse = error.response.data
            this.handleError()
          })
    },

    updateIsEditValue() {
      this.isEdit = this.playerId !== ''
    },

    allFieldsWithCorrectInput() {
      return this.playerDetails.playerName !== '' &&
          this.playerDetails.gender !== '' &&
          this.playerDetails.birthDate !== '' &&
          this.playerDetails.height !== 0 &&
          this.playerDetails.weight !== 0 &&
          this.playerDetails.nationality !== '' &&
          this.playerDetails.bestFoot !== ''
    },


    handlePutPlayerResponse() {
      this.successMessage = 'Mängija "' + this.playerDetails.playerName + '" muudetud süsteemis'
      setTimeout(this.$refs.modalRef.closeModal, 3000)
      setTimeout(this.resetMessage, 3000)
    },

    handlePostPlayerResponse() {
      this.successMessage = 'Uus mängija "' + this.playerDetails.playerName + '" lisatud süsteemi'
      setTimeout(this.$refs.modalRef.closeModal, 3000)
      setTimeout(this.resetMessage, 3000)
    },


    handleError() {
      this.handleSomethingWentWrongError()
      this.handlePlayerNameNotAvailableError()
    },

    handlePlayerNameNotAvailableError() {
      if (this.errorResponse.errorCode === 333) {
        this.errorMessage = this.errorResponse.message
        setTimeout(this.resetMessage, 3000)
      }
    },

    handleSomethingWentWrongError() {
      if (this.errorResponse.errorCode !== 333) {
        router.push({name: 'errorRoute'})
      }
    },

    resetMessage() {
      this.successMessage = ''
      this.errorMessage = ''
    }
  },
  mounted() {
    this.updateIsEditValue()


  }
}



</script>


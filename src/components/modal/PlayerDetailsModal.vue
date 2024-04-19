<template>

  <Modal ref="modalRef">
    <template #title>
      <span v-if="playerId !== 0" >Add Player</span>
      <span v-else>Edit Player</span>
      <!--      todo: if playerId is 0 -> Add player, else -> player Name-->

    </template>
    <template #body>
      <div class="container text-end">
      <div class="row mb-3">
        <div class="col align-content-md-center">Name:</div>
        <div class="col">
          <input type="text" class="form-control">
        </div>
      </div>
      <div class="row mb-3">
        <div class="col align-content-md-center">Club:</div>
        <div class="col">
          <ClubDropdown/>
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
          <input type="date" class="form-control">
        </div>
      </div>
      <div class="row mb-3">
        <div class="col align-content-md-center">Height:</div>
        <div class="col">
          <input type="number" class="form-control">
        </div>
      </div>
      <div class="row mb-3">
        <div class="col align-content-md-center">Weight:</div>
        <div class="col">
          <input type="number" class="form-control">
        </div>
      </div>
      <div class="row mb-3">
        <div class="col align-content-md-center">Nationality:</div>
        <div class="col">
          <input type="text" class="form-control" placeholder="EST" maxlength="3">
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
      <button @click="executeAddPlayer" type="button" class="btn btn-danger">
        <span v-if="playerId === 0">Add Player</span>
        <span v-else>Update Player</span>
      </button>

      <!--v-if-->
      <!--      todo: if playerId is 0 -> Add player: POST, else -> Update: PUT-->

    </template>
  </Modal>

</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import ClubDropdown from "@/components/dropdown/ClubDropdown.vue";

export default {
  name: "PlayerDetailsModal",
  components: {ClubDropdown, Modal},
  data() {
    return {
      playerId: 0,
      playerNameConfirmation: '',

      playerDetails: {
        playerName: '',
        clubName: 0,
        gender: 'M',
        birthDate: '',
        height: 0,
        weight: 0,
        nationality: '',
        bestFoot: ''
      }
    }
  },
  methods: {
    openModal(playerId = 0){
      this.playerId = playerId;
      this.$refs.modalRef.openModal();
    },


    executeAddPlayer() {
      if (this.playerNameInputConfirmed()) {
        this.sendAddPlayerRequest()
      } else (this.allFieldsHaveInput())
      {
        this.displayPlayerNameEqualityAlert()
      }
    },
    playerNameInputConfirmed() {
      if (this.playerName === this.playerNameConfirmation) {
        return true
      }
    },
    displayPlayerNameEqualityAlert() {
      this.message = "PlayerName is not identical";
      setTimeout(this.resetMessage, 4000);
    },
    resetMessage() {
      this.message = ''
    },
    sendAddPlayerRequest() {
      this.$http.post("/players/player", this.playerDetails
      ).then(response => {
        const responseJSON = response.data
      }).catch(error => {
        const errorResponseJSON = error.response.data
      })
    },

  },

}
</script>


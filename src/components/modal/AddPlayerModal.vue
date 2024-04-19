<template>

  <Modal ref="modalRef">
    <template #title>
      Add new player
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
      <button @click="executeAddPlayer" type="button" class="btn btn-danger">Add player</button>
      <!--      todo: if playerId is null -> Add player: POST, else -> Update: PUT-->

    </template>
  </Modal>

</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import ClubDropdown from "@/components/dropdown/ClubDropdown.vue";

export default {
  name: "AddPlayerModal",
  components: {ClubDropdown, Modal},
  data() {
    return {
      playerId: 0,
      playerDetails: {
        playerName: '',
        playerNameConfirmation: '',
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
      this.$http.post("/player", this.somePayloadDtoObject
      ).then(response => {
        const responseJSON = response.data
      }).catch(error => {
        const errorResponseJSON = error.response.data
      })
    },

  },


}

</script>


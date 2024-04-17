<template>

  <Modal ref="modalRef">
    <template #title>

      <!--      todo: if playerId is null -> Add player, else -> player Name-->

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

      <!--      todo: if playerId is null -> Add player: POST, else -> Update: PUT-->

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
}
</script>


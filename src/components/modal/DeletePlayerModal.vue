<template>
  <div class="container">
    <Modal ref="modalRef">
      <template #body>
        Do you want to delete player: <b> {{ selectedPlayer.playerName }} </b> ?
      </template>
      <template #buttons>
        <button @click="deletePlayer" type="button" class="btn btn-success">Delete player</button>
      </template>
    </Modal>
  </div>
</template>


<script>

import router from "@/router";
import Modal from "@/components/modal/Modal.vue";
import playersTable from "@/components/table/PlayersTable.vue";


export default {
  name: 'DeletePlayerModal',
  components: {Modal},
  props: {
    selectedPlayer: {}
  },

  data() {
    return {

      playerName: '',
      playerId: ''

    }
  },

  methods: {
    sendDeletePlayerRequest() {
      this.$http.delete(`/players/${this.playerId}`) // ?????????
          .then(() => {
            this.$refs.modalRef.closeModal()
          })
          .catch(error => {
            router.push({name: 'errorRoute'});
          })
    },

    deletePlayer() {
      this.playerId = this.selectedPlayer.playerId
      this.sendDeletePlayerRequest()
    }
  }

}
</script>








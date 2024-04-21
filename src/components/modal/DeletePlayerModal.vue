<template>
  <div class="container">
    <Modal ref="modalRef">
      <template #body>
        Delete player: {{ playersRequest.playerName }}
      </template>
      <template #buttons>
        <button @click="sendDeletePlayerRequest" type="button" class="btn btn-danger">Delete player</button>
      </template>
    </Modal>
  </div>
</template>


<script>

import router from "@/router";
import Modal from "@/components/modal/Modal.vue";


export default {
  name: 'DeletePlayerModal',
  components: {Modal},
  props: {
    playersRequest: {}
  },

  data() {
    return {
      playerId: 0,
    }
  },

  methods: {
    sendDeletePlayerRequest() {
      this.$http.delete(`/players/${this.playerId}`)
          .then(() => {
            // saada mängijate info muutus, re-load player table (Smthing like: this.$emit('event-alert-location-deleted', this.atmLocationInfo.locationName) )
            this.$refs.modalRef.closeModal()
          })
          .catch(error => {
            router.push({name: 'errorRoute'});
          })
    },
  }
}
</script>








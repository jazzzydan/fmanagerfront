<template>
  <div class="container">
    <Modal ref="modalRef">
      <template #body>
        Delete player name X
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
import axios from "axios";


export default {
  name: 'DeletePlayerModal',
  components: {Modal}, // // ... missing Info?
  data() {
    return {
      playerId: 0,
    }
  },

  methods: {
    async sendDeletePlayerRequest() {
      // console.log("delete player")
      try {
        await axios.delete(`/players/${this.playerId}`);
        this.$emit('event-player-deleted', this.playerId);
      } catch (error) {
        router.push({name: 'errorRoute'});
      }
    }
  }

}


</script>


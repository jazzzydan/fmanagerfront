<template>
  <div class="container">
    <Modal ref="modalRef">
      <template #body>
        Do you want to delete user <b> {{ selectedUser.username }} </b> ?
      </template>
      <template #buttons>
        <button @click="deleteUser" type="button" class="btn btn-success">Delete user</button>
      </template>
    </Modal>
  </div>
</template>


<script>

import router from "@/router";
import Modal from "@/components/modal/Modal.vue";


export default {
  name: 'DeleteUserModal',
  components: {Modal},
  props: {
    selectedUser: {}
  },

  data() {
    return {

      username: '',
      userId: ''

    }
  },

  methods: {
    deleteUser() {
      this.userId = this.selectedUser.userId
      this.sendDeleteUserRequest()
    },

    sendDeleteUserRequest() {
      this.$http.delete(`/users/${this.userId}`)
          .then(() => {
            this.$refs.modalRef.closeModal()
          })
          .catch(error => {
            router.push({name: 'errorRoute'});
          })
      // todo: UserTable list refresh
    }
  },

}
</script>








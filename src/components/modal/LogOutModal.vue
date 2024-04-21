<template>
  <Modal ref="modalRef">'
    <template #title>
      Log out
    </template>
    <template #body>
      <div class="m-4">
        Are You sure You want to log out?
      </div>
    </template>
    <template #buttons>
      <button @click="executeLogOut" type="button" class="btn btn-success">Confirm</button>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import router from "@/router";

export default {
  name: "LogOutModal",
  components: {Modal},
  methods: {

    executeLogOut() {
      sessionStorage.clear()
      this.$emit('event-update-nav-menu')
      this.$refs.modalRef.closeModal()
      router.push({name: 'homeRoute'})
    },

  }
}
</script>


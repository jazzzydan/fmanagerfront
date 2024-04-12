
<template>
  <Modal ref="modalRef">
    <template #title>
      Add new user
    </template>
    <template #body>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <UserRoleDropdown/>
          </div>
          </div>
      </div>
    </template>

    <template #buttons>
      <slot name="buttons">

      </slot>
    </template>

  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import UserRoleDropdown from "@/components/dropdown/UserRoleDropdown.vue";

export default {
  name: "UserInfoInputModal",
  components: {UserRoleDropdown, Modal}
}
</script>
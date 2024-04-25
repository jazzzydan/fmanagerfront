
<template>

  <div>
    <UserInfoInputModal ref="userInfoInputModalRef" />

    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col col-8">
          <AlertDanger :message="errorMessage"/>
          <AlertSuccess :message="successMessage"/>
          <div class="d-grid gap-2">
            <button @click="openUserInfoInputModal" class="btn btn-success" type="button">Add new user</button>
            <br>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-8">

          <UsersTable ref="userTableRef"/>

        </div>
      </div>
    </div>
  </div>




</template>

<script>

import AlertDanger from "@/components/alert/AlertDanger.vue";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";
import UsersTable from "@/components/table/UsersTable.vue";
import UserInfoInputModal from "@/components/modal/UserInfoInputModal.vue";

export default {
  name: "UsersView",
  components: {UserInfoInputModal, UsersTable, AlertSuccess, AlertDanger},
  data() {
    return {
      roleName: sessionStorage.getItem('roleName'),
      errorMessage: '',
      successMessage: ''
    }
  },
  methods: {
    openUserInfoInputModal() {
      this.$refs.userInfoInputModalRef.$refs.modalRef.openModal()
    },
  }
}
</script>

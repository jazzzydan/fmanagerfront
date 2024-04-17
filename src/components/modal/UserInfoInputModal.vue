
<template>
  <Modal ref="modalRef">
    <template #title>
      Add new user
    </template>
    <template #body>
      <div class="container text-end">
        <div class="row mb-3">
          <div class="col align-content-md-center">
            User role:
          </div>
          <div class="col">
            <UserRoleDropdown/>
          </div>
          </div>
        <div class="row mb-3">
          <div class="col align-content-md-center">
            User name:
          </div>
          <div class="col">
            <input v-model="username" type="text" class="form-control" id="username">
          </div>
        </div>
        <div class="row mb-3">
          <div class="col align-content-md-center">
            E-mail:
          </div>
          <div class="col">
            <input v-model="email" type="email" class="form-control" id="email">
          </div>
        </div>
        <div class="row mb-3">
          <div class="col align-content-md-center">
            Password:
          </div>
          <div class="col">
            <input v-model="password" type="password" class="form-control" id="password">
          </div>
        </div>
        <div class="row mb-3">
          <div class="col align-content-md-center">
            Confirm password:
          </div>
          <div class="col">
            <input v-model="passwordConfirmation" type="password" class="form-control" id="passwordConfirmation">
          </div>
        </div>
      </div>
    </template>

    <template #buttons>
      <slot name="buttons">
        <button @click="executeAddUser" type="button" class="btn btn-success">Add user</button>
      </slot>
    </template>

  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import UserRoleDropdown from "@/components/dropdown/UserRoleDropdown.vue";

export default {
  name: "UserInfoInputModal",
  components: {UserRoleDropdown, Modal},
  data() {
    return {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  },
  methods: {
    executeAddUser() {
      if (this.allFieldsHaveInput() && this.passwordInputConfirmed()) {
        this.sendAddUserRequest()
      } else if (this.allFieldsHaveInput()) {
        this.displayPasswordEqualityAlert()
      } else {
        this.displayAllFieldsRequiredAlert()
      }
    },

      allFieldsHaveInput() {
        return this.username.length > 0 &&
            this.email.length > 0 &&
            this.password.length > 0 &&
            this.passwordConfirmation.length > 0
      },

    passwordInputConfirmed() {
      if (this.password === this.passwordConfirmation) {
        return true
      }
    },

    sendAddUserRequest: function () {
      this.$http.post("/users", this.somePayloadDtoObject
      ).then(response => {
        const responseBody = response.data
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

    displayAllFieldsRequiredAlert() {
      this.message = "Fill in all fields";
      setTimeout(this.resetMessage, 4000);
    },

    displayPasswordEqualityAlert() {
      this.message = "Passwords are not identical";
      setTimeout(this.resetMessage, 4000);
    },

    resetMessage() {
      this.message = ''
    },

  }
}
</script>
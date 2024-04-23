<template>
  <div>

<!--    <UserDetailsModal/>-->
    <DeletePlayerModal ref="deleteUserModalRef" :selected-user = "selectedUser" />

    <table class="table table-success table-hover rounded-table">
      <thead>
      <tr>
        <th scope="col">Role</th>
        <th scope="col">Username</th>
        <th scope="col">e-mail</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.userId">
        <td>{{ user.roleName }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
        <td>
          <font-awesome-icon @click="" class="link-success cursor-pointer"
                             :icon="['far', 'pen-to-square']"/>
        </td>
        <td>
          <font-awesome-icon @click="openDeleteUserModal(user.userId, user.username)" class="link-danger cursor-pointer"
                             :icon="['far', 'trash-can']"/>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DeleteUserModal from "@/components/modal/DeleteUserModal.vue";
import UserDetailsModal from "@/components/modal/UserDetailsModal.vue";

export default {
  name: "UsersTable",
  components: {UserDetailsModal, DeleteUserModal},

  data() {
    return {
      selectedUserId: 0,
      users: [
        {
          userId: 0,
          roleName: '',
          username: '',
          email: ''
        }
      ],
      user: {
        userId: 0,
        roleName: '',
        username: '',
        email: ''
      },
      selectedUser: {
        userId: 0,
        username: ''
      }
    }
  },
  methods: {
    sendGetUsersRequest() {
      this.$http.get("/users")
          .then(response => {
            this.users = response.data
          })
          .catch(error => {
            this.errorResponse = error.response.data
          })
    },

    openDeleteUserModal(userId) {
      this.selectedUser.userId = userId
      this.$refs.deleteUserModalRef.$refs.modalRef.openModal() // ERROR !!
    },

  },

  beforeMount() {
    this.sendGetUsersRequest()
  },

}
</script>
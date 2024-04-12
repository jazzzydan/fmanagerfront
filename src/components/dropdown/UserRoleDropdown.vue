<template>
  <select v-model="selectedRoleId" @change="emitSelectedRoleId" class="form-select">
    <option selected value="0">All user roles</option>
         <option v-for="role in roles" :value="role.roleId" :key="role.roleId">{{role.roleName}}</option>
  </select>
</template>

<script>
export default {
  name: "UserRoleDropdown",
  data() {
    return {
      selectedRoleId: 0,
      roles: [
        {
          roleId: 0,
          roleName: ''
        }
      ]
    }
  },
  methods: {
    sendGetRoleRequest: function () {
      this.$http.get("/roles")
          .then(response => {
            this.roles = response.data
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },

    emitSelectedRoleId() {
      this.$emit('event-selected-role-change', this.selectedRoleId)
    }
  },
  beforeMount() {
    this.sendGetRoleRequest()
  }
}
</script>


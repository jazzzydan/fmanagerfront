
<template>
  <h1>This is an USERS page</h1>
  <div>
    <table v-if="atmLocations.length > 0" class="table table-dark table-hover">
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
      <tr v-for="atm in atmLocations" :key="atm.locationId">
        <td>{{ atm.cityName }}</td>
        <td>
          <a href="#" @click="openViewLocationInfoModal(atm.locationId)">{{ atm.locationName }}</a>

        </td>
        <td>
          <p v-for="transactionType in atm.transactionTypes" :key="transactionType.transactionTypeName">
            {{ transactionType.transactionTypeName }}
          </p>
        </td>
        <td v-if="isAdmin">
          <font-awesome-icon @click="navigateToEditLocation(atm.locationId)" class="link-warning cursor-pointer"
                             :icon="['far', 'pen-to-square']"/>
        </td>
        <td v-if="isAdmin">
          <font-awesome-icon @click="openDeleteLocationInfoModal(atm.locationId)" class="link-warning cursor-pointer"
                             :icon="['far', 'trash-can']"/>
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: "UsersView"
}
</script>

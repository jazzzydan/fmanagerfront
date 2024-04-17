<template>
  <div>
    <table class="table table-success table-hover rounded-table">
      <thead>
      <tr>
        <th scope="col">Players name</th>
        <th scope="col">Nationality</th>
        <th scope="col">Birth date</th>
        <th scope="col">Height</th>
        <th scope="col">Weight</th>
        <th scope="col">Monitoring</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="player in players" :key="player.playerId">
        <td>
          <router-link to="/observations" @click="handlePlayerClick(player.playerId)">
            <!--            {{ player.playerName }}-->
            Player Name
          </router-link>
        </td>
        <td>{{player.birthDate }}</td>
        <td>{{player.height }}</td>
        <td>{{player.weight }}</td>
        <td>{{ player.nationality }}</td>
        <td>
          <div v-if="player.observationExists"><font-awesome-icon :icon="['far', 'square-check']" /></div>
          <div v-else><font-awesome-icon :icon="['far', 'square']" /></div>
        </td>
        <td>
          <font-awesome-icon @click="" class="link-success cursor-pointer"
                             :icon="['far', 'pen-to-square']"/>
        </td>
        <td>
          <font-awesome-icon @click="" class="link-danger cursor-pointer"
                             :icon="['far', 'trash-can']"/>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "PlayersTable",


  data() {
    return {
      selectedPlayerId: 0,
      players: [
        {
          playerId: 0,
          playerName: '',
          nationality: '',
          birthDate: '',
          height: 0,
          weight: 0,
          observationExists: false
        }
      ],
      // player: {
      //   playerId: 0,
      //   playerName: '',
      //   // todo: lisada mangija andmed player_details tabelist kui vaja
      // }
    }
  },
  methods: {
    handlePlayerClick(playerId) {
      // URL + query/request parameter example
      // router.push({name: 'locationRoute', query: {locationId: locationId}})

      // URL + path variable
      router.push({name: 'observationsRoute', params: {playerId: playerId}})
    }
  }

}
</script>


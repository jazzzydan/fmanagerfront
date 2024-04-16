<template>
  <div>
    <table class="table table-success table-hover rounded-table">
      <thead>
      <tr>
        <th scope="col">Players name</th>
        <th scope="col">Birth date</th>
        <th scope="col">Height</th>
        <th scope="col">Weight</th>
        <th scope="col">Nationality</th>
        <th scope="col">Monitoring</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="player in players" :key="player.playerId">
        <td>
          <router-link to="/observations" @click="handleRouteClick(player.playerId)">
            <!--            {{ player.playerName }}-->
            Player Name
          </router-link>
        </td>
        <!--        <td>{{ player.playerBirthDate }}</td>-->
        <!--        <td>{{ player.playerHeight }}</td>-->
        <!--        <td>{{ player.playerWeight }}</td>-->
        <!--        <td>{{ player.playerNationality }}</td>-->
        <td>

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
export default {
  name: "PlayersTable",


  data() {
    return {
      selectedPlayerId: 0,
      players: [
        {
          playerId: 0,
          playerName: '',
          // todo: lisada mangija andmed player_details tabelist
        }
      ],
      player: {
        playerId: 0,
        playerName: '',
        // todo: lisada mangija andmed player_details tabelist
      }
    }
  },
  methods: {
    handleRouteClick(playerId) {
      this.$emit(playerId)
    }
  }

}
</script>


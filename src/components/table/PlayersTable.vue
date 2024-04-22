<template>
  <div class="container">
    <PlayerDetailsModal ref="playerDetailsModalRef"/>
    <DeletePlayerModal ref="deletePlayerModalRef" :selected-player="selectedPlayer"/>

    <div class="row">
      <div class="col-10 mx-auto">

        <table class="table table-success table-hover rounded-table">
          <thead>
          <tr>
            <th scope="col" style="text-align: left;">Players name</th>
            <th scope="col">Nationality</th>
            <th scope="col">Birth date</th>
            <th scope="col">Height</th>
            <th scope="col">Weight</th>
            <th scope="col">Monitoring</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="player in players" :key="player.playerId">
            <td style="text-align: left;">
              <router-link to="/observations" @click="handlePlayerClick(player.playerId)">
                {{ player.playerName }}
              </router-link>
            </td>
            <td>{{ player.nationality }}</td>
            <td>{{ player.birthDate }}</td>
            <td>{{ player.height }}</td>
            <td>{{ player.weight }}</td>
            <td>
              <div v-if="player.observationExists">
                <font-awesome-icon :icon="['far', 'square-check']"/>
              </div>
              <div v-else>
                <font-awesome-icon :icon="['far', 'square']"/>
              </div>
            </td>
            <td>
              <font-awesome-icon @click="openPlayerDetailsModal(player.playerId)" class="link-success cursor-pointer"
                                 :icon="['far', 'pen-to-square']"/>
            </td>
            <td>
              <font-awesome-icon @click="openDeletePlayerModal(player.playerId, player.playerName)" class="link-danger cursor-pointer"
                                 :icon="['far', 'trash-can']"/>
            </td>
          </tr>
          </tbody>
        </table>

      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import PlayerDetailsModal from "@/components/modal/PlayerDetailsModal.vue";
import DeletePlayerModal from "@/components/modal/DeletePlayerModal.vue";

export default {
  name: "PlayersTable",
  components: {DeletePlayerModal, PlayerDetailsModal},


  data() {
    return {
      selectedPlayerId: 0,

      playersRequest: {
        confederationId: 0,
        countryId: 0,
        leagueId: 0,
        clubId: 0,
        playerName: '',
        playerId: ''
      },

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
      selectedPlayer: {
        playerName: '',
        playerId: ''
      },
    }
  },

  methods: {

    sendGetPlayersRequest() {
      this.$http.post("/players", this.playersRequest)
          .then(response => {
            this.players = response.data
          }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },

    updatePlayersTable(playersRequest) {
      this.playersRequest = playersRequest
      this.sendGetPlayersRequest()
    },

    handlePlayerClick(playerId) {
      // URL + query/request parameter example
      // router.push({name: 'locationRoute', query: {locationId: locationId}})
      // URL + path variable
      router.push({name: 'observationsRoute', params: {playerId: playerId}})
    },

    openPlayerDetailsModal(playerId) {
      this.$refs.playerDetailsModalRef.$refs.modalRef.openModal()

    },

    openDeletePlayerModal(playerId, playerName) {
      this.selectedPlayer.playerId = playerId
      this.selectedPlayer.playerName = playerName
      this.$refs.deletePlayerModalRef.$refs.modalRef.openModal()
    },
  },

  beforeMount() {
    this.sendGetPlayersRequest()
  }

}
</script>


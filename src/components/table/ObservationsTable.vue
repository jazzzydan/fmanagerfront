<template>
  <div class="container">
    <PlayerObservationModal ref="playerObservationModalRef"/>
    <div class="row">
      <div class="col-10 mx-auto">
        <table class="table table-success table-hover rounded-table">
          <thead>
          <tr>
            <th scope="col">Observation date</th>
            <th scope="col">Home team</th>
            <th scope="col">Away team</th>
            <th scope="col">Comment</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="playerObservation in playerObservations" :key="playerObservation.playerObservationId">
            <td>
              <router-link to="/observations" @click="handleObservationClick(playerObservation.playerObservationId)">
                {{ playerObservation.date }}
              </router-link>
            </td>
            <td>{{ playerObservation.gameHomeClubName }}</td>
            <td>{{ playerObservation.gameAwayClubName }}</td>
            <td>{{ playerObservation.comment }}</td>
          </tr>
          </tbody>
        </table>

      </div>
    </div>
  </div>
</template>

<script>

import PlayerObservationModal from "@/components/modal/PlayerObservationModal.vue";
import router from "@/router";

export default {
  name: "ObservationsTable",
  components: {PlayerObservationModal},


  data() {
    return {
      userId: sessionStorage.getItem('userId'),
      selectedPlayerId: 0,
      selectedPlayerName: '',

      playerObservations: [
        // {
        //   payerObservationId: 0,
        //   playerName: '',
        //   gameHomeClubName: '',
        //   gameAwayClubName: '',
        //   date: '',
        //   observationPosition: '',
        //   comment: '',
        //   marking: 0,
        //   setPieces: 0,
        //   technique: 0,
        //   heading: 0,
        //   passing: 0,
        //   agression: 0,
        //   decisions: 0,
        //   teamwork: 0,
        //   acceleration: 0,
        //   pace: 0,
        //   stamina: 0,
        //   strenght: 0,
        //   goals: 0,
        //   assists: 0,
        //   cards: 0,
        //   minutes: 0
        // }
      ]
    }
  },
  methods: {

    sendGetPlayersRequest() {
      this.$http.get("/observations",{
            params: {
              userId: this.userId,
              playerId: this.selectedPlayerId
            }
          }
      ).then(response => {
        this.playerObservations = response.data
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },


    updateObservationsTable() {
      this.userId = Number(sessionStorage.getItem('userId'))
      this.sendGetPlayersRequest()
    },

    handleObservationClick(playerId) {
      // todo: open PlayerObservationModal
    },

  }

}
</script>


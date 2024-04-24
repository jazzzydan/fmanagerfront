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
              <div @click="handleObservationClick(playerObservation.playerObservationId)" class="hyperlink">
                {{ playerObservation.date }}
              </div>
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
        {
          playerObservationId: 0,
          date: '',
          gameHomeClubName: '',
          gameAwayClubName: '',
          comment: ''
        }
      ]
    }
  },
  methods: {

    sendGetObservationsRequest() {
      this.$http.get("/observations", {
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
      this.sendGetObservationsRequest()
    },

    handleObservationClick(playerObservationId) {
      this.$refs.playerObservationModalRef.handleOpenPlayerObservationModal(playerObservationId)
    }

  }
}
</script>

<style>
.hyperlink {
  color: royalblue; /* Set the text color */
  text-decoration: underline; /* Add underline */
  cursor: pointer; /* Change cursor to pointer on hover */
}
</style>
<template>
  <div class="container">
    <div class="row">
      <div class="col-10 mx-auto">
        <table class="table table-success table-hover rounded-table">
          <thead><tr class="align-content-md-center">
            <th scope="col">players name</th>
          </tr></thead>
        </table>
      </div>
    </div>
  </div>
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
            <tr v-for="playerObservation in playerObservations" :key="playerObservation.observationId">
              <td>
                <router-link to="/observations" @click="handleObservationClick(playerObservation.observationId)">
                  {{ playerObservation.date }}
                </router-link>
              </td>
              <td>{{ playerObservation.gameHomeClub }}</td>
              <td>{{ playerObservation.gameAwayClub }}</td>
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
      selectedPlayerId: 0,
      selectedPlayerName: '',

      // todo: otsime mille jargi: POST {userId (vastava scout'i vaatlused), playerId}

      playerObservations: [
        {
          observationId: 0,
          playerName: '',
          gameHomeClub: '',
          gameAwayClub: '', //todo: lisada tabelisse
          date: '',
          observationPosition: '',
          comment: '', //todo: lisada tabelisse
          marking: 0,
          setPieces: 0,
          technique: 0,
          heading: 0,
          passing: 0,
          agression: 0,
          decisions: 0,
          teamwork: 0,
          acceleration: 0,
          pace: 0,
          stamina: 0,
          strenght: 0,
          goals: 0,
          assists: 0,
          cards : 0,
          minutes : 0
        }
      ]
    }
  },
  methods: {

    sendGetObservationsRequest() {
        this.$http.get(`/observations/${this.selectedPlayerId}`)
            .then(response => {
              this.playerObservations = response.data
            })
            .catch(error => {
              router.push({name: 'errorRoute'})
            })
      },

    updateObservationsTable(playerId) {
      this.selectedPlayerId = playerId
      this.sendGetPlayersRequest()
    },

    handleObservationClick(playerId) {
     // todo: open PlayerObservationModal
    },

  },

  beforeMount() {
    // this.updateObservationsTable()
  }

}
</script>


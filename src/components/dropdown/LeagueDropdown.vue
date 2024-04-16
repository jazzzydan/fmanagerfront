<template>
  <select v-model="selectedLeagueId"
          @change="emitSelectedLeagueId"
          class="form-select">
    <option selected value="0">All leagues</option>
    <option v-for="league in leagues" :value="league.id" :key="country.id">
      {{league.leagueName}}</option>
  </select>
</template>
<script>
export default {
  name: "LeagueDropdown",
  data(){
    return{
      selectedCountryId: 0,
      selectedLeagueId: 0,
      leagues:[
        {
          id:0,
          countryId:0,
          leagueName:''
        }
      ]
    }
  },
  methods: {
    sendGetLeagueRequest(){
  this.$http.get("/leagues")
      .then(response => {
        this.leagues = response.data
      })
      .catch(error => {
        router.push({name: 'errorRoute'})
      })
    },

    emitSelectedLeagueId(){
      this.$emit('event-selected-league-change',this.selectedLeagueId)
    }
    },
  beforeMount() {
    this.sendGetLeagueRequest()
  }
}
</script>


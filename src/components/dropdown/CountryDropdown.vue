<template>
  <select v-model="selectedCountryId"
          @change="emitSelectedCountryId"
          class="form-select">
    <option selected value="0">All countries</option>
    <option v-for="country in countries" :value="country.id" :key="country.id">
      {{country.country_name}}</option>
  </select>
</template>

<script>
import router from "@/router";

export default {
  name: "CountryDropdown",
  data() {
    return {
      selectedConfederationId: 0,
      selectedCountryId: 0,
      countries: [
        {
          id: 0,
          confederationId: 0,
          country_name: ''
        }
      ]
    }
  },
  methods: {
    sendGetCountriesRequest() {
      this.$http.get("/countries")
          .then(response => {
            this.countries = response.data
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },

    emitSelectedCountryId() {
      this.$emit('event-selected-country-change', this.selectedCountryId)
    }
  },
  beforeMount() {
    this.sendGetCountriesRequest()
  }
}
</script>
<template>
  <select v-model="selectedCountryId"
          @change="emitSelectedCountryId"
          class="form-select">
    <option selected value="0">All countries</option>
    <option v-for="country in countries" :value="country.countryId" :key="country.countryId">
      {{ country.countryName }}
    </option>
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
          countryId: 0,
          countryName: ''
        }
      ]
    }
  },
  methods: {
    sendGetCountriesRequest() {
      this.$http.get(`/countries/${this.selectedConfederationId}`)
          .then(response => {
            this.countries = response.data
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },

    getSelectedConfederationId(confederationId) {
      this.selectedConfederationId = confederationId
      this.sendGetCountriesRequest()
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
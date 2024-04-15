<template>
  <h1>This is an PLAYERS page</h1>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <ConfederationDropdown/>
      </div>
      <div class="col">
        Country dropdown
      </div>
      <div class="col">
        League dropdown
      </div>
      <div class="col">
        Club dropdown
        <ClubDropdown/>
      </div>
      <div class="col">
        Search field
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
    <div class="col">
      Add player button
    </div>
    <div class="row">
<!--      todo: Add Players table functionality-->
      <PlayersTable/>
    </div>
  </div>
</template>

<script>

import PlayersTable from "@/components/table/PlayersTable.vue";
import ConfederationDropdown from "@/components/dropdown/ConfederationDropdown.vue";
import ClubDropdown from "@/components/dropdown/ClubDropdown.vue";

export default {
  name: "PlayersView",
  components: {ClubDropdown, ConfederationDropdown, PlayersTable}
}
</script>

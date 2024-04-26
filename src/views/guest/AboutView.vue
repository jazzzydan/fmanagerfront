<template>
  <div class="container rounded-5">
    <!-- Create, Edit, or Delete Players -->
    <div class="row" style="margin-top: 100px; margin-bottom: 200px;">
      <div class="col col-3 text-start">
        <h1>Create, Edit, or Delete Players for Scouting</h1>
      </div>
      <div class="col col-9">
        <img src="../../assets/aboutPlayers.png" alt="Players for Scouting" style="width: 94%;"/>
      </div>
    </div>

    <!-- Manage Observations -->
    <div class="row" style="margin-top: 100px; margin-bottom: 200px;">
      <div class="col col-9">
        <img src="../../assets/aboutObservations.png" alt="Manage Observations" style="width: 94%;"/>
      </div>
      <div class="col col-3 text-end">
        <h1>Manage Observations</h1>
      </div>
    </div>

    <!-- Produce and Save Detailed Observations -->
    <div class="row" style="margin-top: 100px;">
      <div class="col col-3 text-start">
        <h1>Produce and Save Detailed Observations with Comments</h1>
      </div>
      <div class="col col-9">
        <img src="../../assets/aboutObservation.png" alt="Detailed Observations" style="width: 94%;"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView"
}
</script>

<style>

.container {
  max-width: 80%; /* Adjusted width */
  margin: 0 auto;
  background-color: rgba(209, 230, 220, 0.7); /* 80% transparent green background */
}

.row {
  display: flex;
  justify-content: center;
}

.col {
  max-width: 800px;
  width: 100%;
}

img {
  max-width: 100%;
  height: auto;
}

h1 {
  margin-top: 0;
  font-size: 16px;
  font-family: 'seguiblack', serif;
}

p {
  font-size: 12px;
}
</style>

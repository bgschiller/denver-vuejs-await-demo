<template>
  <div class="vuex-managed">
    <h1>vuex managed</h1>
    <div>
      <button @click="newCat">New Cat!</button>
    </div>
    <p v-if="loading">Loading...</p>
    <div v-if="error" class="error">
      <p>Uh oh, something went wrong</p>
      <p>{{ error.message }}</p>
    </div>
    <img v-if="cat" :src="cat" />
  </div>
</template>

<script>
export default {
};
</script>

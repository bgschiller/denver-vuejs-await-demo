<template>
  <div class="component-managed">
    <h1>component managed</h1>
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
import { fetchCat } from "@/api";

export default {
  data() {
    return {
      loading: false,
      cat: null,
      error: null
    };
  },
  methods: {
    newCat() {
      this.loading = true;
      fetchCat()
        .then(cat => {
          this.loading = false;
          this.error = null;
          this.cat = cat;
        })
        .catch(err => {
          this.loading = false;
          this.error = err;
        });
    }
  }
};
</script>

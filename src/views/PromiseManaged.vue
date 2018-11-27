<template>
  <div class="component-managed">
    <h1>promise managed</h1>
    <div>
        <button @click="newCat">New Cat!</button>
    </div>
    <Await :p="catPromise">
      <p>Loading...</p>
      <div slot="catch" slot-scope="[error]">
        <p>Uh oh, something went wrong</p>
        <p>{{ error.message }}</p>
      </div>
      <img slot="then" slot-scope="[cat]" :src="cat" />
    </Await>
  </div>
</template>

<script>
import Await from "vue-await";
import { fetchCat } from "@/api";

export default {
};
</script>

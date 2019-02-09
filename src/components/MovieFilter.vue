<template>
  <div id="movie-filter">
    <h2>Filter Time</h2>
    <div class="filter-group">
      <check-filter v-for="item in times" v-bind:title="item" category="time" v-bind:key="item.id" v-on:check-filter="checkFilter"></check-filter>
    </div>
    <h2>Filter results</h2>
    <div class="filter-group">
      <check-filter v-for="genre in genres" v-bind:title="genre" category="genre" v-bind:key="genre.id" v-on:check-filter="checkFilter"></check-filter>
    </div>
  </div>
</template>

<script>

import genres from '../util/genres';
import times from '../util/times';
import CheckFilter from './CheckFilter.vue';

export default {
  data() {
    return {
      genres,
      times
    };
  },
  methods: {
    checkFilter(category, title, checked) {
      this.$emit("check-filter", category, title, checked);
    }
  },
  components: {
    CheckFilter    
  }
};
</script>

<style>
</style>

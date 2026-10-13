<script setup>
const sort = ref("newest");
const { data: recipes } = await useFetch("/api/recipes", { query: { sort: sort.value } });
</script>

<template>
  <div>
    <label>
      Sort by
      <select v-model="sort">
        <option value="newest">Newest</option>
        <option value="rating">Top rated</option>
      </select>
    </label>
    <ul>
      <li v-for="r in recipes" :key="r.id">
        <NuxtLink :to="`/recipes/${r.id}`">{{ r.title }}</NuxtLink>
        — {{ r.minutes }} min · ★ {{ r.rating }}
      </li>
    </ul>
  </div>
</template>

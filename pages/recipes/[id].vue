<script setup>
const route = useRoute();
const { data: recipe } = await useFetch(`/api/recipes/${route.params.id}`);
</script>

<template>
  <article>
    <h2>{{ recipe.title }}</h2>
    <p>by {{ recipe.author }} · {{ recipe.minutes }} minutes</p>
    <div v-html="recipe.body" />
  </article>
</template>

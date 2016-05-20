<template>
  <dl>
    <template v-for="(key, value) in tags">
      <dt>{{key}}</dt>
      <dd>{{value}}</dd>
    </template>
  </dl>
</template>

<script>
 export default {
   props: {
     tags: Object,
   },
 };
</script>

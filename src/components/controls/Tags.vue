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

<style scoped>
dl {
  display: flex;
  flex-wrap: wrap;
}

dt {
  width: 33%;
  font-weight: bold;
}
dd {
  margin: 0;
  width: 67%;
}
</style>
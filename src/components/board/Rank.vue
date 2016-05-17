<template>
  <div class="square" v-for="square in rank" data-file="{{files[$index]}}">
    <square :square="square"></square>
  </div>
</template>

<script>
import Square from './Square';
export default {
  components: {
    Square,
  },
  data() {
    return {
      files: 'abcdefgh',
    };
  },
  props: {
    rank: Array,
  },
};
</script>

<style scoped>
  .square {
    height: 100px;
    width: 100px;

    display: flex;
    flex-direction: column-reverse;
    padding: 0 1rem 0.5rem 1rem;
  }
</style>

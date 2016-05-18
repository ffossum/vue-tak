<template>
  <div class="rank">
    <square :square="square" v-for="square in rank" data-file="{{files[$index]}}"></square>
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
.rank {
  display: flex;
  justify-content: center;
  position: relative;
}
.rank:after {
  font-size: 0.8em;
  color: #aaa;
  top: calc(50% - 0.5em);
  right: -1rem;
  position: absolute;
  content: attr(data-rank);
}
</style>
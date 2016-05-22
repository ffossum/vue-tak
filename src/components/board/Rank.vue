<template>
  <div class="{{className}}">
    <square
      v-for="square in rank"
      :square="square"
      :board-size="rank.length"
      data-file="{{files[$index]}}"
    ></square>
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
  computed: {
    className() {
      return `rank size${this.rank.length}`;
    },
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

.size3 {
  height: calc(100% / 3);
}
.size4 {
  height: calc(100% / 4);
}
.size5 {
  height: calc(100% / 5);
}
.size6 {
  height: calc(100% / 6);
}
.size7 {
  height: calc(100% / 7);
}
.size8 {
  height: calc(100% / 8);
}
</style>
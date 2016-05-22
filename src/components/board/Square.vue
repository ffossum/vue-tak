<template>
  <div class="{{className}}">
    <div class="square-padder">
      <stone :stone="stone" v-for="stone in square" track-by="$index"></stone>
    </div>
  </div>
</template>

<script>
import Stone from './Stone';
export default {
  components: {
    Stone,
  },
  props: {
    square: Array,
    boardSize: Number,
  },
  computed: {
    className() {
      return `square size${this.boardSize}`;
    },
  },
};
</script>

<style scoped>
.square {
  height: 100%;
}

.square-padder {
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;

  padding: 0 16% 9% 16%;
}
.size3 {
  width: calc(100% / 3);
}
.size4 {
  width: calc(100% / 4);
}
.size5 {
  width: calc(100% / 5);
}
.size6 {
  width: calc(100% / 6);
}
.size7 {
  width: calc(100% / 7);
}
.size8 {
  width: calc(100% / 8);
}
</style>

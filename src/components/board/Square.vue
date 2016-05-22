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
}

.square-padder {
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;

  padding: 0 16% 9% 16%;
}

.size5 {
  width: 20%;
  height: 100%;
}
</style>

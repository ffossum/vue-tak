<template>
  <div class="board">
    <rank :rank="rank" v-for="rank in board" data-rank="{{size - $index}}"></rank>
  </div>
</template>

<script>
import TAK from 'tak';
import Rank from './Rank';

const initialState = TAK.getInitialState(5);

export default {
  components: {
    Rank,
  },
  props: {
    state: {
      type: Object,
      default: () => initialState,
    },
  },
  computed: {
    size() {
      return this.state.board.length;
    },
    board() {
      return this.state.board.reverse();
    },
  },
};
</script>

<style>
.rank:nth-child(even) .square:nth-child(even) {
  background-color: #b58863;
}
.rank:nth-child(odd) .square:nth-child(odd) {
  background-color: #b58863;
}
.rank:last-child .square {
  position: relative;
}
.rank:last-child .square:before {
  font-size: 0.8em;
  color: #aaa;
  position: absolute;
  left: calc(50% - 0.25em);
  bottom: -1.4rem;
  text-transform: uppercase;
  content: attr(data-file);
}
</style>

<style scoped>
.board {
  width: 50vw;
  height: 50vw;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #f0d9b5;
}
</style>

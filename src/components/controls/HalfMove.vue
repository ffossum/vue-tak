<template>
  <a href="" class="{{className}}" @click="handleClick" :disabled="active">
    {{text}}
  </a>
</template>

<script>
import { isObject } from 'lodash';
import * as actions from '../../actions';
export default {
  vuex: {
    getters: {
      activeMoveNumber: state => state.selectedMove,
    },
    actions,
  },
  props: {
    move: Object,
  },
  computed: {
    text() {
      return isObject(this.move) ? this.move.move : this.move;
    },
    active() {
      return this.move.moveNumber === this.activeMoveNumber;
    },
    className() {
      return `half-move ${this.active ? 'active' : ''}`;
    },
  },
  methods: {
    handleClick(e) {
      e.preventDefault();
      this.goToMove(this.move.moveNumber);
    },
  },
};
</script>

<style scoped>
.half-move {
  color: black;
  text-decoration: none;
  width: 8rem;
  display: flex;
  border: none;
}

.half-move.active {
  font-weight: bold;
}
</style>

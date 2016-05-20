<template>
  <article id="app">
    <form>
      <div><label for="tpsInput">Paste TPS here</label></div>
      <textarea
        v-model="tps"
        id="tpsInput"
        placeholder='[TPS "x5/x5/x5/x5/x5 1 1"]'
      >
      </textarea>
    </form>
    <div class="game">
      <board :state="state"></board>
      <aside v-if="showControls" class="controls">
        <tags v-if="showTags" :tags="model.tags"></tags>
        <moves v-if="showMoves" :moves="model.moves"></moves>
      </aside>
    </div>
  </article>
</template>

<script>
import Board from './components/board/Board';
import Tags from './components/controls/Tags';
import Moves from './components/controls/Moves';
import TAK from 'tak';
import {
  isEmpty,
} from 'lodash';

export default {
  components: {
    Board,
    Tags,
    Moves,
  },
  data() {
    return {
      tps: '',
    };
  },
  computed: {
    model() {
      try {
        return TAK.ptnToJson(this.tps);
      } catch (e) {
        return {
          error: e.message,
        };
      }
    },
    state() {
      return this.model.initialState;
    },
    showTags() {
      return !isEmpty(this.model.tags);
    },
    showMoves() {
      return !isEmpty(this.model.moves);
    },
    showControls() {
      return this.showTags || this.showMoves;
    },
  },
};
</script>

<style scoped>
#tpsInput {
  min-width: 25rem;
  min-height: 4rem;
}

.main {
}

.board {
  margin-top: 1rem;
}

.controls {
  margin-left: 5rem;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.game {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

</style>

<style>
html, body {
  margin: 0;
  height: 100%;
}

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

#app {
  color: #2c3e50;
  padding: 1rem;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <article id="app">
    <form>
      <div><label for="tpsInput">Paste TPS/PTN here</label></div>
      <textarea
        v-model="ptn"
        @input="updateModel"
        id="tpsInput"
        placeholder='[TPS "x5/x5/x5/x5/x5 1 1"]'
      >
      </textarea>
    </form>
    <div class="game">
      <div class="game-board">
        <div class="board-aspect-ratio">
          <board :state="state"></board>
        </div>
      </div>
      <aside v-if="showControls" class="controls">
        <tags v-if="showTags" :tags="tags"></tags>
        <moves v-if="showMoves"
          :moves="model.moves"
          :comments="model.comments"
        ></moves>
      </aside>
    </div>
  </article>
</template>

<script>
import Board from './components/board/Board';
import Tags from './components/controls/Tags';
import Moves from './components/controls/Moves';
import TAK from 'tak';
import * as actions from './actions';

import {
  isEmpty,
  toArray,
  take,
  omit,
} from 'lodash';

export default {
  components: {
    Board,
    Tags,
    Moves,
  },
  data() {
    return {
      ptn: `[Event "First Video for Tak Strategy"]
[Site "PlayTak.com"]
[Date "2015.11.15"]
[Round "1"]
[Player1 "BenWo"]
[Player2 "JT (Mongoose1021)"]
[Size "5"]
[Result "0-R"]

1. e5 {comment1} a1
2.  c3  d2 {comment2}
3.  e3  Cd3
4.  Cc2 {comment3} d4 {comment4}
5.  c2> Sc2
6.  Sd1 c4
7.  a4  b4
8.  a4> c4<
9.  c5  c4
10. c5- d4<
11. c3+ 2b4>
12. Sa4 c5
13. b1  d3<
14. 1d2< d5
15. Sb5 c3+
16. a4> a4
17. b5> a5
18. 2c5>11 b5
19. 2e5< 4c4+
20. 2b4> e5
21. 4d5> 1c5-
22. Sd5 3c4>12 0-R`,
    };
  },
  vuex: {
    getters: {
      model: state => state.model,
      selectedMove: state => state.selectedMove,
    },
    actions,
  },
  computed: {
    state() {
      let movesArray = toArray(this.model.moves);
      movesArray = take(movesArray, this.selectedMove);
      return TAK.getState(this.model.initialState, movesArray);
    },
    showTags() {
      return !isEmpty(this.tags);
    },
    showMoves() {
      return !isEmpty(this.model.moves);
    },
    showControls() {
      return this.showTags || this.showMoves;
    },
    tags() {
      return omit(this.model.tags, 'size');
    },
  },
};
</script>

<style scoped>
#tpsInput {
  min-width: 10rem;
  min-height: 4rem;
  max-width: 90vw;
}

.main {
}

.controls {
  margin-left: 1rem;
  margin-right: 1rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.game {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 90vw;
  max-width: 1050px;
}

.game-board {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 600px;
  margin-right: 1rem;
  margin-bottom: 1.25rem;
}

.board-aspect-ratio {
  width: 100%;
  padding-bottom: 100%;
  position: relative;
}

.buttons {
  margin-top: 3rem;
}
</style>

<style>
html, body {
  margin: 0;
  height: 100%;
}

html {
  box-sizing: border-box;
  font-size: 16px;
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

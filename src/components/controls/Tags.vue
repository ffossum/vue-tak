<template>
  <div class="box game-info">
    <div class="game-info-players">
      <div>
        <div class="color white" title="White"></div> {{whitePlayer}}
      </div>
      <div>
        <div class="color black" title="Black"></div> {{blackPlayer}}
      </div>
    </div>
    <dl>
      <template v-for="(key, value) in filteredTags">
        <dt>{{key}}</dt>
        <dd>{{value}}</dd>
      </template>
    </dl>
  </div>
</template>

<script>
import {
  omit,
} from 'lodash';

export default {
  props: {
    tags: Object,
  },
  computed: {
    whitePlayer() {
      return this.tags.player1;
    },
    blackPlayer() {
      return this.tags.player2;
    },
    filteredTags() {
      return omit(this.tags, ['player1', 'player2']);
    },
  },
};
</script>

<style scoped>
.game-info {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.game-info-players {
  margin-bottom: 1rem;
}

.color {
  height: 1rem;
  width: 1rem;
  position: relative;
  top: 0.1rem;
  display: inline-block;
  border: 1px solid #333;
  border-radius: 3px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),
    0 3px 1px -2px rgba(0,0,0,.2),
    0 1px 5px 0 rgba(0,0,0,.12);
}

.black {
  background-color: #666;
}

.white {
  background-color: white;
}

dl {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
}

dt {
  width: 33%;
  font-weight: bold;
  text-transform: capitalize;
}
dd {
  margin: 0;
  width: 67%;
}
</style>
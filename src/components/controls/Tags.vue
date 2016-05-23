<template>
  <div class="game-info">
    <div class="game-info-players">{{whitePlayer}} vs. {{blackPlayer}}</div>
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
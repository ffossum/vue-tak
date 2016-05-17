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
    <game class="game" :state="state"></game>
  </article>
</template>

<script>
import Hello from './components/Hello';
import Game from './components/Game';
import TAK from 'tak';

export default {
  components: {
    Hello,
    Game,
  },
  data() {
    return {
      tps: '',
    };
  },
  computed: {
    state() {
      try {
        return TAK.tpsToJson(this.tps);
      } catch (e) {
        return undefined;
      }
    },
  },
};
</script>

<style scoped>

#tpsInput {
  min-width: 25rem;
  min-height: 4rem;
}
.game {
  margin-top: 1rem;
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
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>

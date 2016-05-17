<template>
  <div class={{className}}></div>
</template>

<script>
export default {
  props: {
    stone: String,
  },
  computed: {
    className() {
      const color = { 1: 'white', 2: 'black' }[this.stone[0]];
      const type = { C: 'cap', S: 'standing' }[this.stone[1]] || '';
      return `stone ${color} ${type}`;
    },
  },
};
</script>

<style scoped>
.stone {
    border: 1px solid #333;
    border-radius: 3px;
    margin-top: -1rem;
    height: 1.5rem;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),
      0 3px 1px -2px rgba(0,0,0,.2),
      0 1px 5px 0 rgba(0,0,0,.12);
  }
  .white {
    background-color: white;
    transform: translateX(-0.25rem);
  }
  .black {
    color: white;
    background-color: #666;
    transform: translateX(0.25rem);
  }

  .standing {
    height: 2rem;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
  }
  .cap {
    height: 2rem;
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    border-top-left-radius: 5rem;
    border-top-right-radius: 5rem;
  }
</style>


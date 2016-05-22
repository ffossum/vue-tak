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
  margin-top: -23%;
  height: 25%;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),
    0 3px 1px -2px rgba(0,0,0,.2),
    0 1px 5px 0 rgba(0,0,0,.12);
}
.white {
  background-color: white;
  transform: translateX(-10%);
}
.black {
  color: white;
  background-color: #666;
  transform: translateX(10%);
}

.standing {
  height: 35%;
  margin-left: 30%;
  margin-right: 30%;
  transform: translateX(0);
}
.cap {
  height: 34%;
  width: 64%;
  transform: translateX(0);
  align-self: center;
  border-top-left-radius:  100000rem;
  border-top-right-radius: 100000rem;
}
</style>


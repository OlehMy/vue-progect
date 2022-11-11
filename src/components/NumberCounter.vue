<script>
export default {
  props: ['todos'],
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    handleClickPlus() {
      this.counter++;
    },
    handleClickMinus() {
      this.counter--;
    },
  },
};
</script>

<template>
  <div class="box wrapper has-text-centered">
    <h1 class="title is-3 has-text-info has-text-centered">{{ counter }}</h1>
    <button
      class="button is-primary mr-3"
      @click="handleClickMinus"
      :disabled="counter <= 0"
    >
      -
    </button>
    <button class="button is-primary ml-3" @click="handleClickPlus">+</button>
  </div>
</template>

<style>
.wrapper {
  width: 600px;
  margin: 0 auto;
}
</style>

import { defineStore } from 'pinia';

export const useCounterStore = defineStore('NumberCounter', {
  state: () => ({ counter: 0 }),
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
});

import { defineStore } from "pinia";
export const useCounterStore = defineStore("couter", {
  state: () => {
    return {
      count: 0,
    };
  },
  getters: {
    double: (state) => {
      // state.count += 10;
    },
  },
  actions: {
    addCount() {
      this.count++;
    },
    returnData() {
      return {
        id: 0,
        name: "小明",
      };
    },
  },
});

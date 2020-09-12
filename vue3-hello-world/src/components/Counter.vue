<template>
  <div>
    <div>Count = {{ count }}</div>
    <button @click="increment">Count</button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Counter extends Vue {
  count = 0;

  increment() {
    this.count++;
  }
}
</script>

<template>
  <div>
    Greeting :
    <input type="radio" v-model="grIdx" value="0" /> 0
    <input type="radio" v-model="grIdx" value="1" /> 1
    <input type="radio" v-model="grIdx" value="2" /> 2
    <br />
    <input v-model="username" placeholder="username" />
    <br />
    <div class="message">{{ greetings[grIdx] }} {{ username }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  options: {},
  data() {
    return {
      greetings: ["Good Morning", "Hello", "Nice to see you,"],
      grIdx: 0,
      username: ""
    };
  }
});
</script>

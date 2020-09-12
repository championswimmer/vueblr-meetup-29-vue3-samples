<template>
  <div>
    <h1>This is page made with Class Component API</h1>

    <h2>List of Tasks</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input :id="`check-${task.id}`" type="checkbox" v-model="task.done" />
        <label :for="`check-${task.id}`">{{ task.name }}</label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Task, createTask } from "../store/models/Task";

@Options({
  name: "ClassComponentPage"
})
export default class ClassComponentPage extends Vue {
  tasks: Array<Task> = [
    createTask("Learn Vue2", true),
    createTask("Learn Vuex3", true),
    createTask("Learn TypeScript"),
    createTask("Learn Vue3")
  ];
}
</script>

<template>
  <div>
    <input placeholder="question" v-model="question" />
    <br />
    <textarea placeholder="answer" v-model="answer" />
    <br />
    <button @click="addFaq">ADD</button>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { MutationTypes } from "@/store/mutations";
import { Vue } from "vue-class-component";
export default class FAQEditor extends Vue {
  question = "";
  answer = "";

  addFaq() {
    store.commit(MutationTypes.ADD_FAQ, {
      faq: {
        question: this.question,
        answer: this.answer
      }
    });
  }
}
</script>

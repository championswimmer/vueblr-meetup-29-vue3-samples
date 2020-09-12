<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="faqs">
      <div v-for="faq in faqs" :key="faq.title">
        <h6>{{ faq.question }}</h6>
        <p>{{ faq.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const AboutComponent = defineComponent({
  options: {},
  computed: {
    faqs() {
      return this.$store.state.faqs;
    }
  }
});
export default AboutComponent;
</script>

<style scoped>
.faqs {
  text-align: left;
  margin-left: 33%;
  margin-right: 33%;
}
h6 {
  margin-bottom: 0;
}
p {
  margin-top: 4px;
}
</style>

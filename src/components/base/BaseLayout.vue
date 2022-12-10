<template>
  <section>
    <slot></slot>
  </section>
</template>

<script lang="ts">
/* Place Vue imports here */
import {defineComponent} from "vue";

export default defineComponent({
  name: "BaseLayout"
})
</script>

<style scoped lang="scss">
  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
</style>

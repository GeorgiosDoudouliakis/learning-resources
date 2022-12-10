<template>
  <footer>
    <p>Copyright &copy; {{ currentYear }}. All Rights Reserved.</p>
  </footer>
</template>

<script lang="ts">
/* Place Vue imports here */
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheFooter',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
});
</script>

<style scoped lang="scss">
  footer {
    text-align: center;
    padding: .5rem 0;
    color: #fff;
    background: #2364b7;
  }
</style>

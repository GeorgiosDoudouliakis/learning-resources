<template>
  <div>
    <p>Resource successfully added!</p>
  </div>
</template>

<script lang="ts">
/* Place Vue imports here */
import {defineComponent} from "vue";

export default defineComponent({
  name: "BaseSnackbar"
})
</script>

<style scoped lang="scss">
  div {
    font-size: 1.2rem;
    position: fixed;
    bottom: 40px;
    right: 10px;
    text-align: center;
    color: #fff;
    padding: .8rem;
    background: #108d10;
    border-radius: 4px;
  }
</style>

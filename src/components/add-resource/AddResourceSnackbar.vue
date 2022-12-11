<template>
  <div>
    <p>Resource successfully added!</p>
  </div>
</template>

<script lang="ts">
/* Place Vue imports here */
import {defineComponent} from "vue";

export default defineComponent({
  name: "AddResourceSnackbar"
})
</script>

<style scoped lang="scss">
  div {
    font-size: 1.2rem;
    position: fixed;
    bottom: 15px;
    right: 10px;
    text-align: center;
    width: 220px !important;
    color: #fff;
    padding: .8rem 0;
    background: #108d10;
    border-radius: 4px;
  }
</style>

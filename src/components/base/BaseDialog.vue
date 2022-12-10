<template>
  <div class="back">
    <div class="dialog">
      <p>You have to fill in all fields in order to proceed!</p>
      <button @click="$emit('close-dialog')">Close</button>
    </div>
  </div>
</template>

<script lang="ts">
/* Place Vue imports here */
import {defineComponent} from "vue";

export default defineComponent({
  name: "BaseDialog",
  emits: ['close-dialog']
})
</script>

<style scoped lang="scss">
  .back {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, .7);
    z-index: 2;
  }

  .dialog {
    padding: 1rem;
    background: #fff;
    border-radius: 4px;
    p {
      font-size: 1.2rem;
      margin-bottom: .8rem;
    }
    button {
      font-size: 1.1rem;
      width: 100%;
      padding: .3rem .8rem;
      color: #fff;
      background: #2364b7;
    }
  }
</style>

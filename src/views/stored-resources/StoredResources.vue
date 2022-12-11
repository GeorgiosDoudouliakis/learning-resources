<template>
  <p>Number of resources: {{ resources.length }}</p>
  <base-layout>
    <StoredResource v-for="resource in resources" :key="resource.id" :resource="resource"/>
  </base-layout>
</template>

<script lang="ts">
/* Place Vue imports here */
import {defineComponent} from "vue";

/* Place component imports here */
import BaseLayout from "@/components/base/BaseLayout.vue";
import StoredResource from "@/views/stored-resources/StoredResource.vue";

export default defineComponent({
  name: "StoredResources",
  components: {
    BaseLayout,
    StoredResource
  },
  inject: ['resources']
})
</script>

<style scoped lang="scss">
  p {
    font-size: 1.3rem;
    width: 80vw;
    margin: 0 auto 2rem auto;
  }
</style>

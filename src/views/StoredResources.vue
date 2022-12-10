<template>
  <base-layout>
    <BaseResource v-for="resource in resources" :key="resource.id" :resource="resource"/>
  </base-layout>
</template>

<script lang="ts">
/* Place Vue imports here */
import {defineComponent} from "vue";

/* Place component imports here */
import BaseLayout from "@/components/base/BaseLayout.vue";
import BaseResource from "@/components/base/BaseResource.vue";

export default defineComponent({
  name: "StoredResources",
  components: {
    BaseLayout,
    BaseResource
  },
  inject: ['resources']
})
</script>

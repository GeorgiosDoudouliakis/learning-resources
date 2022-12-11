<template>
  <section>
    <button :class="{ 'active': activeTab === 'Stored Resources' }" @click="changeActiveTab('Stored Resources')">Store Resources</button>
    <button :class="{ 'active': activeTab === 'Add Resource' }" @click="changeActiveTab('Add Resource')">Add Resource</button>
  </section>
</template>

<script lang="ts">
/* Place Vue imports here */
import {defineComponent} from "vue";

/* Place any other imports here */
import {ActiveTab} from "@/types/active-tab.type";

export default defineComponent({
  name: "BaseTabs",
  emits: ["activeTabHandler"],
  data() {
    return {
      activeTab: "Stored Resources"
    };
  },
  methods: {
    changeActiveTab(tab: ActiveTab): void {
      this.activeTab = tab;
      this.$emit("activeTabHandler", tab);
    }
  }
})
</script>

<style scoped lang="scss">
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    padding: 2rem 0;
    margin: 0 auto 2rem auto;
  }

  button {
    width: 100%;
    border: 1px solid #2364b7;
    &:last-of-type {
      margin-left: 1.5rem;
    }
    &.active {
      color: #fff;
      background: #2364b7;
    }
  }
</style>

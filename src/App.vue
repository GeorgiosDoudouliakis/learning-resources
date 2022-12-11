<template>
  <TheHeader/>
  <main>
    <TheTabs @activeTabHandler="setActiveTab($event)"/>
    <keep-alive>
      <component :is="activeTab === 'Stored Resources' ? 'StoredResources' : 'AddResource'"></component>
    </keep-alive>
  </main>
  <TheFooter/>
</template>

<script lang="ts">
/* Place Vue imports here */
import { defineComponent } from 'vue';

/* Place component imports here */
import TheHeader from "@/components/layout/TheHeader.vue";
import TheTabs from "@/components/layout/TheTabs.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import StoredResources from "@/views/stored-resources/StoredResources.vue";
import AddResource from "@/views/add-resource/AddResource.vue";

/* Place any other imports here */
import {ActiveTab} from "@/types/active-tab.type";
import {RESOURCES} from "@/mock/resources.mock";
import {Resource} from "@/interfaces/resource.interface";

export default defineComponent({
  name: 'App',
  components: {
    TheHeader,
    TheTabs,
    StoredResources,
    AddResource,
    TheFooter
  },
  data() {
    return {
      activeTab: "Stored Resources" as ActiveTab,
      resources: RESOURCES as Resource[]
    }
  },
  methods: {
    setActiveTab(tab: ActiveTab): void {
      this.activeTab = tab;
    }
  },
  provide() {
    return {
      resources: this.resources
    }
  }
});
</script>

<style lang="scss">
  * {
    font-family: "Agency FB", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  main {
    width: 80vw;
    margin: 0 auto 2rem auto;
    min-height: calc(100vh - 137px);
  }

  button {
    font-size: 1.3rem;
    padding: .3rem .8rem;
    background: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: .4s ease-in-out;
    &:hover {
      color: #fff;
      background: #2364b7;
    }
  }
</style>

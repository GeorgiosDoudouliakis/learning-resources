<template>
  <TheHeader/>
  <main>
    <TheTabs @activeTabHandler="setActiveTab($event)"/>
    <keep-alive>
      <component :is="activeTab === 'Stored Resources' ? 'StoredResources' : 'AddResource'"></component>
    </keep-alive>
  </main>
  <TheFooter/>
  <teleport to="body">
      <BaseSnackbar v-if="isSnackbarVisible"/>
  </teleport>
</template>

<script lang="ts">
/* Place Vue imports here */
import { defineComponent } from 'vue';

/* Place component imports here */
import TheHeader from "@/components/layout/TheHeader.vue";
import TheTabs from "@/components/layout/TheTabs.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import StoredResources from "@/views/StoredResources.vue";
import AddResource from "@/views/AddResource.vue";
import BaseSnackbar from "@/components/base/BaseSnackbar.vue";

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
    TheFooter,
    BaseSnackbar
  },
  data() {
    return {
      activeTab: "Stored Resources" as ActiveTab,
      resources: RESOURCES as Resource[],
      isSnackbarVisible: false as boolean
    }
  },
  methods: {
    setActiveTab(tab: ActiveTab): void {
      this.activeTab = tab;
    },
    addResource(resource: Resource): void {
      const { title, description, link } = resource;
      if(title === "" || description === "" || link === "") return;
      this.resources.push(resource);
      this.showSnackbar();
    },
    deleteResource(resourceId: number): void {
      const deletedResourceId = this.resources.findIndex((resource: Resource) => resource.id === resourceId);
      this.resources.splice(deletedResourceId, 1);
    },
    showSnackbar(): void {
      this.isSnackbarVisible = true;
      const timeout = setTimeout(() => {
        this.isSnackbarVisible = false;
        clearTimeout(timeout);
      }, 3000);
    }
  },
  provide() {
    return {
      resources: this.resources,
      addResource: this.addResource,
      deleteResource: this.deleteResource
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
    margin: auto;
    min-height: calc(100vh - 105px);
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

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
      <BaseDialog v-if="isDialogVisible" @close-dialog="closeDialog()"/>
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
import BaseDialog from "@/components/base/BaseDialog.vue";

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
    BaseSnackbar,
    BaseDialog
  },
  data() {
    return {
      activeTab: "Stored Resources" as ActiveTab,
      resources: RESOURCES as Resource[],
      isSnackbarVisible: false as boolean,
      isDialogVisible: false as boolean
    }
  },
  methods: {
    BaseDialog() {
      return BaseDialog
    },
    setActiveTab(tab: ActiveTab): void {
      this.activeTab = tab;
    },
    addResource(resource: Resource): void {
      const isResourceValid = this.validateResource(resource);
      if(!isResourceValid) {
        this.isDialogVisible = true;
        return;
      }
      this.resources.push(resource);
      this.showSnackbar();
    },
    deleteResource(resourceId: number): void {
      const deletedResourceId = this.resources.findIndex((resource: Resource) => resource.id === resourceId);
      this.resources.splice(deletedResourceId, 1);
    },
    validateResource(resource: Resource): boolean {
      const { title, description, link } = resource;
      return title !== "" && description !== "" && link !== "";
    },
    showSnackbar(): void {
      this.isSnackbarVisible = true;
      const timeout = setTimeout(() => {
        this.isSnackbarVisible = false;
        clearTimeout(timeout);
      }, 3000);
    },
    closeDialog(): void {
      this.isDialogVisible = false;
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

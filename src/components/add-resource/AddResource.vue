<template>
  <base-layout>
    <form @submit.prevent="addResource()">
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" autocomplete="off" v-model="resource.title"/>
      </div>
      <div>
        <label for="description">Description</label>
        <textarea id="description" rows="10" autocomplete="off" v-model="resource.description"/>
      </div>
      <div>
        <label for="link">Link</label>
        <input type="text" id="link" autocomplete="off" v-model="resource.link" @input="validateLink()"/>
        <small class="error" v-if="resource.link && !isValidLink">Not valid link!</small>
      </div>
      <button>Add</button>
    </form>
  </base-layout>
  <teleport to="body">
    <AddResourceSnackbar v-if="isSnackbarVisible"/>
    <AddResourceDialog v-if="isDialogVisible" @close-dialog="closeDialog()"/>
  </teleport>
</template>

<script lang="ts">
/* Place Vue imports here */
import {defineComponent} from "vue";

/* Place component imports here */
import BaseLayout from "@/components/base/BaseLayout.vue";
import AddResourceSnackbar from "@/components/add-resource/AddResourceSnackbar.vue";
import AddResourceDialog from "@/components/add-resource/AddResourceDialog.vue";

/* Place any other imports here */
import {Resource} from "@/interfaces/resource.interface";

export default defineComponent({
  name: "AddResource",
  components: {
    BaseLayout,
    AddResourceSnackbar,
    AddResourceDialog
  },
  inject: ['resources'],
  data() {
    return {
      resource: {
        id: Math.random(),
        title: "",
        description: "",
        link: ""
      } as Resource,
      isSnackbarVisible: false as boolean,
      isDialogVisible: false as boolean,
      isValidLink: false as boolean
    }
  },
  methods: {
    addResource(): void {
      const isResourceValid = this.validateResource(this.resource);
      if(!this.isValidLink) return;
      if(!isResourceValid) {
        this.isDialogVisible = true;
        return;
      }
      (this.resources as Resource[]).push(this.resource);
      this.showSnackbar();
      this.resetForm();
    },
    validateResource(resource: Resource): boolean {
      const { title, description, link } = resource;
      return title !== "" && description !== "" && link !== "";
    },
    validateLink(): void {
      const regex = new RegExp(/^((https|http):(\/\/))/);
      this.isValidLink = regex.test(this.resource.link);
    },
    showSnackbar(): void {
      this.isSnackbarVisible = true;
      const timeout = setTimeout(() => {
        this.isSnackbarVisible = false;
        clearTimeout(timeout);
      }, 3000);
    },
    resetForm(): void {
      this.resource = {} as Resource;
    },
    closeDialog(): void {
      this.isDialogVisible = false;
    }
  }
})
</script>

<style scoped lang="scss">
  form, div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  div {
    margin-bottom: 1rem;
    &:last-of-type {
      margin-bottom: 2rem;
    }
  }

  label {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: .5rem;
  }

  input, textarea {
    font-size: 1.2rem;
    padding: .5rem;
    background: #f8f8f8;
    border: 1px solid #e6eeff;
    &:focus {
      outline: 1px solid #2364b7;
    }
  }

  button {
    color: #fff;
    background: #2364b7;
    &:hover {
      color: #2364b7;
      background: #f8f8f8;
      outline: 1px solid #2364b7;
    }
  }

  small {
    font-size: 1.2rem;
    margin-top: .5rem;
  }

  .error {
    color: #ff3232;
  }
</style>

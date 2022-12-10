<template>
  <base-layout>
    <form @submit.prevent="addResource(resource)">
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
        <input type="text" id="link" autocomplete="off" v-model="resource.link"/>
      </div>
      <button>Add</button>
    </form>
  </base-layout>
</template>

<script lang="ts">
/* Place Vue imports here */
import {defineComponent} from "vue";

/* Place component imports here */
import BaseLayout from "@/components/base/BaseLayout.vue";

/* Place any other imports here */
import {Resource} from "@/interfaces/resource.interface";

export default defineComponent({
  name: "AddResource",
  components: {
    BaseLayout
  },
  inject: ['addResource'],
  data() {
    return {
      resource: {
        id: Math.random(),
        title: "",
        description: "",
        link: ""
      } as Resource
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
</style>

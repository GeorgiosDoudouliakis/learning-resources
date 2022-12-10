<template>
  <article>
    <h2>{{ resource.title }}</h2>
    <p>{{ resource.description }}</p>
    <a :href="resource.link" target="_blank" rel="noopener">View Resource</a>
    <button @click="deleteResource(resource.id)">Delete</button>
  </article>
</template>

<script lang="ts">
/* Place Vue imports here */
import {defineComponent} from "vue";

export default defineComponent({
  name: "BaseResource",
  props: ['resource'],
  inject: ['deleteResource']
})
</script>

<style scoped lang="scss">
  article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    background: #f8f8f8;
  }

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: .5rem;
  }

  p, a {
    font-size: 1.2rem;
  }

  a {
    display: inline-block;
    margin-bottom: 1rem;
    color: #2364b7;
  }

  button {
    display: block;
    width: 100%;
    color: #fff;
    background: #ff3232;
    &:hover {
      color: #ff3232;
      background: #f8f8f8;
      outline: 1px solid #ff3232;
    }
  }

  @media(min-width: 960px) {
    article {
      width: 48%;
    }
  }

  @media(min-width: 1440px) {
    article {
      width: 32%;
    }
  }
</style>

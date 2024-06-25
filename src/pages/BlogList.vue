<template>
  <div>
    <template v-if="blog">
      <h1>{{ blog.title }}</h1>
      <img :src="blog.image" alt="Blog Image" />
      <p>{{ blog.content }}</p>
    </template>
    <template v-else>
      <p>Loading...</p>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useBlogStore, Blog } from 'src/stores/blogStore'; // Ensure correct import path and export

import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'BlogDetailsPage',
  setup() {
    const blogStore = useBlogStore();
    const blog = ref<Blog | null>(null);

    onMounted(async () => {
      try {
        const route = useRoute();
        const blogId = Number(route.params.id);
        const fetchedBlog = await blogStore.fetchBlogById(blogId);
        blog.value = fetchedBlog || null; // Ensure blog.value is either a Blog object or null
      } catch (error) {
        console.error('Failed to fetch blog:', error);
        // Optionally handle error here
      }
    });

    return {
      blog,
    };
  },
});
</script>

<style scoped>
/* Your component-specific styles here */
</style>

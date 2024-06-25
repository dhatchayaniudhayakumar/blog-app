<template>
  <div>
    <button @click="loadBlogs">Load Blogs</button>
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error }}</div>
    <div v-if="!loading && !error" class="card-container">
      <div v-for="blog in blogs" :key="blog.id" class="card">
        <img :src="blog.image" alt="Blog Image" class="card-image" />
        <h2 class="card-title">{{ blog.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useBlogStore } from 'src/stores/blogStore';

export default defineComponent({
  name: 'BlogList',
  setup() {
    const blogStore = useBlogStore();

    const loadBlogs = () => {
      blogStore.fetchBlogs(); // Call fetchBlogs method from useBlogStore
    };

    return {
      blogs: blogStore.blogs,
      loading: blogStore.loading,
      error: blogStore.error,
      loadBlogs,
    };
  },
});
</script>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-title {
  padding: 16px;
  font-size: 1.25rem;
  font-weight: bold;
}
</style>

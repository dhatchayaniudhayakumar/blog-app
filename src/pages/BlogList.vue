<template>
  <div class="blog-container">
    <div class="blog-column" v-for="(chunk, index) in blogChunks" :key="index">
      <div v-for="blog in chunk" :key="blog.id" class="blog-card">
        <BlogCard
          :title="blog.title"
          :thumbnailUrl="blog.thumbnailUrl"
        ></BlogCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useBlogStore } from 'src/stores/blogStore';
import BlogCard from 'src/components/BlogCard.vue';

const blogStore = useBlogStore();

onMounted(() => {
  blogStore.fetchBlogs();
});

const blogs = computed(() => {
  return blogStore.Blogs;
});

// Function to chunk the blogs into groups of 3
const blogChunks = computed(() => {
  if (!blogs.value) return [];
  const chunkSize = 3;
  const chunks = [];
  for (let i = 0; i < blogs.value.length; i += chunkSize) {
    chunks.push(blogs.value.slice(i, i + chunkSize));
  }
  return chunks;
});
</script>

<style>
.blog-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.blog-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.blog-card {
  width: 100%;
}
</style>

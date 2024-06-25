<template>
  <div>
    <div v-for="(blog, index) in blogs" :key="index">
      <BlogCard :title="blog.title" :thumnailUrl="blog.thumnailUrl"></BlogCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useBlogStore } from 'src/stores/blogStore'; // Ensure correct import path and export
import BlogCard from 'src/components/BlogCard.vue';

// import { useRoute } from 'vue-router';

const blogStore = useBlogStore();
// const blogs = ref(null);
// const blog = ref<Blog | null>(null);

onMounted(() => {
  blogStore.fetchBlogs();
});

const blogs = computed(() => {
  return blogStore.Blogs;
});
</script>

// src/stores/blogStore.ts

import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

interface Blog {
  albumId: number;
  id: number;
  title: string;
  url: string; // Add content property if it exists in your blog data
  thumbnailUrl: string; // Add content property if it exists in your blog data
}

export const useBlogStore = defineStore('blog', () => {

  const blogs = ref<[Blog]|null>(null);
  const loading = ref<boolean>(false);

  function fetchBlogs(){
    loading.value = true;
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        blogs.value = res.data.slice(1, 21)
        loading.value = false
      })
  }

  return { blogs, fetchBlogs }

});

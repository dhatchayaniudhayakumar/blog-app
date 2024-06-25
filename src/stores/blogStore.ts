// src/stores/blogStore.ts

import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

interface Blog {
  albumId: number;
  id: string;
  title: string;
  url: string;
  thumnailUrl: string; // Add content property if it exists in your blog data
}

// interface BlogState {
//   blogs: Blog[];
//   loading: boolean;
//   error: string | null;
// }

export const useBlogStore = defineStore('blog', () => {
  const Blogs = ref<[Blog] | null>(null);
  const loading = ref<boolean>(false);

  function fetchBlogs() {
    loading.value = true;
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        Blogs.value = res.data.slice(1, 10);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { Blogs, fetchBlogs };
});

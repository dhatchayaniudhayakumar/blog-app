// src/stores/blogStore.ts

import { defineStore } from 'pinia';

export interface Blog {
  id: number;
  title: string;
  image: string;
  content: string; // Add content property if it exists in your blog data
}

interface BlogState {
  blogs: Blog[];
  loading: boolean;
  error: string | null;
}

export const useBlogStore = defineStore('blogStore', {
  state: (): BlogState => ({
    blogs: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchBlogs() {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch('YOUR_API_ENDPOINT'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data: Blog[] = await response.json();
        this.blogs = data;
      } catch (error) {
        this.error =
          error instanceof Error ? error.message : 'Failed to fetch blogs';
      } finally {
        this.loading = false;
      }
    },
    async fetchBlogById(id: number): Promise<Blog | undefined> {
      try {
        const response = await fetch(`YOUR_API_ENDPOINT/${id}`); // Adjust API endpoint to fetch specific blog by id
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const blogData: Blog = await response.json();
        return blogData;
      } catch (error) {
        this.error =
          error instanceof Error ? error.message : 'Failed to fetch blog data';
        return undefined; // Return undefined in case of error
      }
    },
  },
});

<template>
  <div>
    <q-page padding>
      <q-card class="q-ma-md" style="max-width: 400px">
        <q-img
          :src="thumnailUrl"
          alt="Blog Image"
          class="blog-card-image"
          style="height: 200px"
          contain
        />
        <q-card-section>
          <div class="text-h6">{{ title }}</div>
          <div class="text.suubtitle2 text-grey">by Author on 25 june 2024</div>
        </q-card-section>

        <q-card-section>
          <p>this is a brief summary of the blog part</p>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Read More" />
        </q-card-actions>
      </q-card>
    </q-page>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
  },
  thumnailUrl: {
    type: String,
  },
});
</script>

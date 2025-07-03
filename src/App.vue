<template>
  <router-view />
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue';
import { useManagerStore } from 'stores/managers';
const MS = useManagerStore();
onBeforeUnmount(() => {
  MS.clearManagerList();
});
</script>

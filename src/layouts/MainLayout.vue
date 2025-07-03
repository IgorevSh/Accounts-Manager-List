<template>
  <q-layout class="main_layout">
    <manager-table> </manager-table>
  </q-layout>
</template>

<script setup lang="ts">
import ManagerTable from 'components/ManagerTable.vue';
</script>

<style lang="scss">
.main_layout {
  width: 80%;
  margin: 0 auto 0 auto;
  padding-top: 50px;
}
</style>

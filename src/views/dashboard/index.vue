<template>
  <div class="container">
    <PopularContent />
  </div>
</template>

<script lang="ts" setup>
  import PopularContent from './components/popular-content.vue';
</script>

<script lang="ts">
  export default {
    name: 'Dashboard',
  };
</script>

<style lang="less" scoped>
  .container {
    display: flex;
    padding: 70px 20px 0 20px;
    padding-bottom: 0;
    background-color: var(--color-fill-2);
  }
</style>

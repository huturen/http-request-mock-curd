<template>
  <div class="container">
    <UserList />
  </div>
</template>

<script lang="ts" setup>
import UserList from './components/user-list.vue';
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

HttpResponse

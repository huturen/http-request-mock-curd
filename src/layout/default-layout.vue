<template>
  <a-layout class="layout">
    <div class="layout-navbar">
      <NavBar />
    </div>
    <a-layout>
      <a-layout class="layout-content">
        <a-layout-content><router-view /></a-layout-content>

        <a-layout-footer class="footer">
          <a href="https://www.npmjs.com/package/http-request-mock" target="_blank">http-request-mock</a>
          |
          <a href="https://github.com/huturen/http-request-mock-curd.git" target="_blank">
            Source code of this project
          </a>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import NavBar from '@/components/navbar.vue';
</script>

<style scoped lang="less">
@nav-size-height: 60px;
@layout-max-width: 1100px;

.layout {
  width: 100%;
  height: 100%;
}

.layout-navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: @nav-size-height;
}

.layout-content {
  min-height: 100vh;
  overflow-y: hidden;
  background-color: var(--color-fill-2);
  transition: padding 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  color: var(--color-text-2);
  text-align: center;

  a {
    display: inline-block;
    padding: 1px 4px;
    color: rgb(var(--link-6));
    font-size: 14px;
    line-height: 1.5715;
    text-decoration: none;
    background-color: transparent;
    border-radius: var(--border-radius-small);
    cursor: pointer;
    transition: all 0.1s cubic-bezier(0, 0, 1, 1);
  }
}
</style>

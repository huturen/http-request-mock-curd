<template>
  <div class="navbar">
    <div class="left-side">
      <a-space>
        <img alt="logo" src="../assets/logo-small.png" />
        <a-typography-title :style="{ margin: 0, fontSize: '18px' }" :heading="5">
          http-request-mock
        </a-typography-title>
      </a-space>
    </div>
    <ul class="right-side">
      <li>
        <a-tooltip content="Document">
          <a-button class="nav-btn" type="outline" :shape="'circle'" @click="goToDocument">
            <template #icon><icon-book /></template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip content="Github">
          <a-button class="nav-btn" type="outline" :shape="'circle'" @click="goToGithub">
            <template #icon><icon-github /></template>
          </a-button>
        </a-tooltip>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  const goToDocument = () => {
    window.open('https://huturen.github.io/http-request-mock-docs/');
  };
  const goToGithub = () => {
    window.open('https://github.com/huturen/http-request-mock');
  };
</script>

<style scoped lang="less">
  .navbar {
    display: flex;
    justify-content: space-between;
    height: 100%;
    background-color: var(--color-bg-2);
    border-bottom: 1px solid var(--color-border);
  }

  .left-side {
    display: flex;
    align-items: center;
    padding-left: 20px;

    img {
      width: 50px;
    }
  }

  .right-side {
    display: flex;
    padding-right: 20px;
    list-style: none;

    :deep(.locale-select) {
      border-radius: 20px;
    }

    li {
      display: flex;
      align-items: center;
      padding: 0 10px;
    }

    a {
      color: var(--color-text-1);
      text-decoration: none;
    }

    .nav-btn {
      color: rgb(var(--gray-8));
      font-size: 16px;
      border-color: rgb(var(--gray-2));
    }

    .trigger-btn,
    .ref-btn {
      position: absolute;
      bottom: 14px;
    }

    .trigger-btn {
      margin-left: 14px;
    }
  }
</style>

<style lang="less">
  .message-popover {
    .arco-popover-content {
      margin-top: 0;
    }
  }
</style>

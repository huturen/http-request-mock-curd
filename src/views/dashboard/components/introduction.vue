<template>
  <a-card class="gray">
    针对以下用户列表的CURD操作，实际并不会产生真实的服务器请求。所有的变更都是基于http-request-mock实现。<br />
    http-request-mock支持<a-typography-text mark>数据变更记忆</a-typography-text>， 你可以用此特性，
    即使在没有后台接口的情况下，来实现产品研发的闭环。 （F12查看调试工具中的日志。）
    <br />
    <br />
    For the CRUD operations on the user list below, no server requests will be initiated. All modifications are handled
    using http-request-mock. <br />
    This tool supports <a-typography-text mark>data change caching</a-typography-text>, allowing you to achieve a
    complete product development cycle without a live server. (Press F12 to open Developer Tools and view the console
    logs.)
  </a-card>
</template>

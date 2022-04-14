<template>
  <a-card class="gray">
    针对以下用户列表的CURD操作，实际并不会产生真实的服务器请求。所有的操作都是基于http-request-mock实现。<br />
    http-request-mock支持<a-typography-text mark>数据历史变更记忆</a-typography-text>， 你可以用此特性，
    即使在没有后台接口的情况下，来实现产品研发的闭环。 （F12查看调试工具中的日志。）
    <br />
    <br />
    For CRUD operations of the user list below, no server requests will be actually generated. All change operations are
    implemented based on http-request-mock. <br />
    http-request-mock supports <a-typography-text mark>data-change-cache</a-typography-text>. You can use it to achieve
    a closed loop of product development. (Hit F12 to access Developer Tools and view the console logs.)
  </a-card>
</template>

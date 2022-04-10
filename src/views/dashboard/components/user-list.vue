<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card class="general-card" :header-style="{ paddingBottom: '0' }">
      <template #title><span>User List</span></template>
      <template #extra>
        <a-popconfirm content="Are you sure to reset all users?" cancel-text="Cancel" ok-text="OK" @before-ok="reset">
          <a-button type="primary" size="small" class="reset">Reset Users</a-button>
        </a-popconfirm>
      </template>
      <div class="gray">
        For CRUD operations of the user list below, no server requests will be actually generated. All change operations
        are implemented based on http-request-mock. http-request-mock supports data-change-caching. You can use it to
        achieve a complete closed loop of product development. (Hit F12 to access Developer Tools and view the console
        logs.)
      </div>
      <a-table :data="users" :pagination="pagination" page-position="bc" @page-change="fetchData">
        <template #pagination-left> Total: {{ pagination.total }} </template>
        <template #columns>
          <a-table-column title="ID" data-index="id" />
          <a-table-column title="Name" data-index="name" />

          <a-table-column title="Gender" data-index="gender">
            <template #cell="{ record }">
              <icon-woman v-if="record.gender === 'female'" :style="{ fontSize: '24px', color: 'red' }" />
              <icon-man v-else-if="record.gender === 'male'" :style="{ fontSize: '24px', color: 'green' }" />
            </template>
          </a-table-column>

          <a-table-column title="Age" data-index="age" :sortable="{ sortDirections: ['ascend', 'descend'] }" />
          <a-table-column title="Email" data-index="email" />
          <a-table-column title="Phone No." data-index="phone" />
          <a-table-column title="Created Time" data-index="createdTime" />

          <a-table-column title="Operation">
            <template #title>
              <span>Operation</span>&nbsp;
              <!-- add -->
              <a-button size="small" type="outline" @click="create">
                <template #icon><icon-plus /></template>Add User
              </a-button>
            </template>

            <template #cell="{ record }">
              <!-- edit -->
              <a-button size="small" @click="edit(record)">
                <template #icon><icon-edit /></template>Edit
              </a-button>
              &nbsp;
              <!-- delete -->
              <a-popconfirm
                content="Are you sure to delete it?"
                cancel-text="Cancel"
                ok-text="OK"
                @before-ok="(done: DoneFunction) => remove(done, record)"
              >
                <a-button size="small">
                  <template #icon><icon-delete /></template>Delete
                </a-button>
              </a-popconfirm>
            </template>
          </a-table-column>
        </template>
      </a-table>
    </a-card>
  </a-spin>
  <DialogEdit ref="refDialogEdit" @success="fetchData(1)" />
  <DialogAdd ref="refDialogAdd" @success="fetchData(1)" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Message } from '@arco-design/web-vue';
import useLoading from '@/hooks/loading';
import { getUserList, deleteUser, UserRecord } from '@/api/dashboard';
import type { DoneFunction } from '@/types/global';
import DialogEdit from './dialog-edit.vue';
import DialogAdd from './dialog-add.vue';

const { loading, setLoading } = useLoading();
const users = ref<UserRecord[]>();
const pagination = ref({
  total: 0,
  current: 1,
  pageSize: 10,
});
const refDialogEdit = ref();
const refDialogAdd = ref();

async function fetchData(page = 1) {
  setLoading(true);

  const res = await getUserList(page);

  if (res.code === 0) {
    pagination.value.current = page;
    pagination.value.total = res.data.total;
    users.value = res.data.list;
  } else {
    Message.error(res.msg);
  }

  setLoading(false);
}
fetchData(1); // load the first page

function reset(done: DoneFunction) {
  localStorage.removeItem('mock-users');
  Message.success('You has successfully reset user list.');
  window.location.reload();
  done(true);
}

function create() {
  refDialogAdd.value.show();
}

function edit(userInfo: UserRecord) {
  refDialogEdit.value.show(userInfo);
}

// delete
async function remove(done: DoneFunction, userInfo: UserRecord) {
  const res = await deleteUser(userInfo.id as number);
  if (res.code === 0) {
    Message.success('Delete successfully');
    fetchData(1);
  } else {
    Message.error(res.msg);
  }
  done(true);
}
</script>

<style scoped lang="less">
.general-card {
  min-height: 388px;
}

:deep(.arco-table-tr) {
  height: 44px;
}

.reset {
  margin-bottom: 5px;
}

.gray {
  margin-bottom: 5px;
  color: gray;
}
</style>

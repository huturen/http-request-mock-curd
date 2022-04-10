<template>
  <a-modal
    v-model:visible="visible"
    title-align="start"
    title="Edit User"
    :mask="true"
    :unmount-on-close="true"
    :mask-closable="false"
    :ok-loading="false"
    :esc-to-close="false"
    cancel-text="Cancel"
    ok-text="OK"
    @before-cancel="handleBeforeCancel"
    @before-ok="handleBeforeOk"
  >
    <a-form ref="refForm" :model="form">
      <a-form-item field="id" label="ID:" disabled>
        <a-input v-model="form.id" />
      </a-form-item>
      <a-form-item
        field="name"
        label="Name:"
        :rules="[
          { required: true, message: 'Name is required' },
          { minLength: 3, message: 'Must be greater than 3 characters' },
          { maxLength: 30, message: 'Must be less than 30 characters' },
        ]"
        :validate-trigger="['change', 'input']"
      >
        <a-input v-model="form.name" placeholder="please enter name" />
      </a-form-item>

      <a-form-item field="gender" label="Gender:" :rules="[{ required: true, message: 'Gender is required' }]">
        <a-radio-group v-model="form.gender" type="button">
          <a-radio value="male"><icon-man :style="{ color: 'green' }" /> Male</a-radio>
          <a-radio value="female"><icon-woman :style="{ color: 'red' }" /> Female</a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item field="age" label="Age:" :rules="[{ required: true, message: 'Age is required' }]">
        <!-- 18 to 30 -->
        <a-select v-model="form.age">
          <a-option v-for="age in 13" :key="age" :value="17 + age">{{ 17 + age }}</a-option>
        </a-select>
      </a-form-item>

      <a-form-item
        field="email"
        label="Email:"
        :rules="[
          { required: true, message: 'Please input a valid Email' },
          { type: 'email', message: 'Please input a valid Email' },
        ]"
        :validate-trigger="['change', 'input']"
      >
        <a-input v-model="form.email" placeholder="please enter email" />
      </a-form-item>

      <a-form-item
        field="phone"
        label="Phone No.:"
        :rules="[
          { required: true, message: 'Please input a valid phone number, such as: 123-456-8892' },
          { match: /^\d{3}-\d{3}-\d{4}$/, message: 'Please input a valid phone number, such as: 123-456-8892' },
        ]"
        :validate-trigger="['change', 'input']"
      >
        <a-input v-model="form.phone" placeholder="please enter phone number, such as: 123-456-8892" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { Message } from '@arco-design/web-vue';
import { updateUser, UserRecord } from '@/api/dashboard';
import type { DoneFunction } from '@/types/global';
import { ValidatedError } from '@arco-design/web-vue/es/form/interface';

const visible = ref(false);
const form = reactive({
  id: '',
  name: '',
  gender: '',
  age: '',
  email: '',
  phone: '',
});
const refForm = ref();

const emit = defineEmits(['success']);

function show(userInfo: UserRecord) {
  form.id = String(userInfo.id);
  form.name = userInfo.name;
  form.gender = userInfo.gender;
  form.age = String(userInfo.age);
  form.email = userInfo.email;
  form.phone = userInfo.phone;
  visible.value = true;
}

let locking = false;
const handleBeforeOk = (done: DoneFunction) => {
  refForm.value.validate(async (errors: Record<string, ValidatedError> | undefined) => {
    if (errors) return done(false);
    locking = true;
    const res = await updateUser(form as UserRecord);
    locking = false;

    if (res.code === 0) {
      Message.success('Update successfully');
      emit('success');
    } else {
      Message.error(res.msg);
    }
    return done(true);
  });
};
const handleBeforeCancel = () => !locking;

defineExpose({ show });
</script>

<template>
  <div class="login">
      <div class="contentsBox">
        <img class="logo" alt="tablingLogo" src="@/assets/biz_logo.svg" />
        <div class="loginForm">
          <div class="inputTitle">이메일</div>
          <input
          class="input"
          :value="email"
          @input="changeEmailInput"
          placeholder="이메일을 입력해주세요."
          />
          <div class="inputTitle">비밀번호</div>
          <input
          class="input"
          :value="password"
          @input="changePasswordInput"
          placeholder="비밀번호를 입력해주세요."
          />
        </div>
        <div class="submitFormBtn">
          <tb-button
            @click="submitLoginIdInfo"
          >로그인</tb-button>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import tbButton from '@/components/tb-button.vue';
import postLogin from '@/api/login';

export default defineComponent({
  name: 'loginView',
  components: { tbButton },
  setup() {
    const userIdInfo = reactive({
      email: '',
      password: '',
    });
    function changeEmailInput(event: InputEvent & { target: HTMLInputElement}) {
      userIdInfo.email = event.target.value;
    }
    function changePasswordInput(event: InputEvent & { target: HTMLInputElement}) {
      userIdInfo.password = event.target.value;
    }
    return { ...toRefs(userIdInfo), changeEmailInput, changePasswordInput };
  },
  methods: {
    submitLoginIdInfo() {
      const loginResult = postLogin({ email: this.email, password: this.password });
      console.log(loginResult);
    },
  },
});
</script>

<style scoped>

</style>

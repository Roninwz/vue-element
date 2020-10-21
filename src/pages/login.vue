<template>
  <div class="login">
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    login(){
      this.$router.push({
        path: "/home"
      });
    }
  },
};
</script>

<style scoped lang="scss">
</style>

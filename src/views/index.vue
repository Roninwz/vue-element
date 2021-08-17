<template>
  <div>
    <el-button type="primary" @click="isShowDialog = true">点击</el-button>
    <ElDialog :show.sync="isShowDialog" title="弹窗" @sureClick="sureClick">
      <el-input
        v-model="username"
        type="textarea"
        :rows="8"
        maxlength="100"
        show-word-limit
        placeholder="请输入用户名"
      />
    </ElDialog>
  </div>
</template>

<script>
import ElDialog from "@/components/ElDialog";
export default {
  components: {
    ElDialog
  },
  data() {
    return {
      isShowDialog: false, // 是否显示弹窗
      username: "" // 用户名
    };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    sureClick() {
      console.log("my console ffff : ");
    }
  }
};
</script>

<style scoped lang="scss"></style>

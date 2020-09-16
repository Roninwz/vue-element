<template>
  <!-- 弹窗 -->
  <!-- 
    使用方法
    <el-button type="primary" @click="isShowDialog = true">点击</el-button>
    <ElDialog :show.sync="isShowDialog" title="弹窗"></ElDialog>
   -->
  <el-dialog
    :title="title"
    :visible.sync="visible"
    top="5vh"
    width="80%"
    @close="$emit('update:show', false)"
    :show="show"
  ></el-dialog>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: () => {
        return "";
      },
    },
    // 控制显示隐藏
    show: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
  },
  watch: {
    show() {
      this.visible = this.show;
    },
  },
  data() {
    return {
      visible: this.show,
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
  },
};
</script>
<style scoped>
</style>

<template>
  <!-- 弹窗 -->
  <!--
    使用方法
    <el-button type="primary" @click="isShowDialog = true" @sureClick="sureClick">点击</el-button>
    <ElDialog :show.sync="isShowDialog" title="弹窗"></ElDialog>
   -->
  <el-dialog
    :title="title"
    :visible.sync="visible"
    top="5vh"
    :width="width"
    :show="show"
    @close="$emit('update:show', false)"
  >
    <!-- 弹窗中奖部分用插槽实现 -->
    <slot></slot>
    <!-- 弹窗底部内容 -->
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">
        取 消
      </el-button>
      <el-button type="primary" @click="sureClick">
        确 定
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: () => {
        return "";
      }
    },
    // 控制显示隐藏
    show: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    // 控制弹窗宽度
    width: {
      type: String,
      default: "50%"
    }
  },
  data() {
    return {
      visible: this.show
    };
  },
  computed: {},
  watch: {
    show() {
      this.visible = this.show;
    }
  },
  created() {},
  mounted() {},
  methods: {
    closeDialog() {
      this.$emit("update:show", false);
    },
    sureClick() {
      this.$emit("sureClick");
      this.$emit("update:show", false);
    }
  }
};
</script>
<style scoped></style>

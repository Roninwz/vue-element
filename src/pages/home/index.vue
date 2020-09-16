<template>
  <div class="home">
    <el-button type="primary" @click="isShowDialog = true">点击</el-button>
    <ElDialog :show.sync="isShowDialog" title="弹窗"></ElDialog>
  </div>
</template>

<script>
import ElDialog from '@/components/ElDialog';
  export default {
    components: {
      ElDialog
    },
    data() {
      return {
        isShowDialog: false
      };
    },
    computed: {},
    watch: {},
    created() {
    },
    mounted() {},
    methods: {
    },
  };
</script>

<style scoped lang="scss">
.home{
  width: 100%;
}
</style>

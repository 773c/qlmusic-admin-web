<template>
  <div>
    <el-card class="box-card">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="歌手类型" prop="type">
          <el-select v-model="value1" multiple placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <multi-upload></multi-upload>

      </el-form>
    </el-card>
  </div>
</template>

<script>
  import MultiUpload from '@/components/Upload/multiUpload'

  export default {
    name: "add",
    data() {
      return {
        options: [
          {
            value: '选项1',
            label: '摇滚'
          }, {
            value: '选项2',
            label: '流行'
          }, {
            value: '选项3',
            label: '电子'
          }, {
            value: '选项4',
            label: '民谣'
          }, {
            value: '选项5',
            label: '古典'
          }, {
            value: '选项6',
            label: '说唱'
          }, {
            value: '选项7',
            label: '布鲁斯'
          }, {
            value: '选项8',
            label: '轻音乐'
          }, {
            value: '选项9',
            label: '雷鬼'
          }, {
            value: '选项10',
            label: '蓝调'
          }
        ],
        value1: [],
      }
    },
    components: {
      MultiUpload
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
    }
  }
</script>

<style scoped>
  .box-card {
    width: 900px;
    height: 1000px;
    margin: 20px 150px;
  }
</style>

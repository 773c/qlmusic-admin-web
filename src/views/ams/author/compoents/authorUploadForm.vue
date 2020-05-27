<template>
  <el-form :model="value" label-width="100px" style="margin-top: 40px;width: 670px">
    <el-form-item label="歌手封面：" prop="type">
      <multi-upload></multi-upload>
    </el-form-item>
    <el-form-item align="center">
      <el-button type="danger" plain style="margin-top: 12px;" @click="prevHandler">上一步，填写歌手信息</el-button>
      <el-button type="danger" style="margin-top: 12px;" @click="commit">完成，上传信息</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import MultiUpload from '@/components/Upload/multiUpload'
  export default {
    name: "authorUploadForm",
    components:{
      MultiUpload
    },
    props:{
      value:Object
    },
    methods:{
      prevHandler(){
        this.$emit('prevStep')
      },
      commit(){
        this.$emit('commit')

      }
    }
  }
</script>

<style scoped>

</style>

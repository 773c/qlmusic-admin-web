<template>
  <el-form label-width="100px" style="margin-top: 40px;width: 670px">
    <el-form-item label="歌手封面：" prop="type">
      <single-upload :is-upload="isUpload" ref="singleUpload" v-model="value.headIcon"></single-upload>
    </el-form-item>
    <el-form-item align="center">
      <el-button type="danger" plain style="margin-top: 12px;" @click="prevHandler">上一步，填写歌手信息</el-button>
      <el-button type="danger" style="margin-top: 12px;" @click="commitHandler">完成，上传信息</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import SingleUpload from '@/components/Upload/singleUpload'
  export default {
    name: "authorUploadForm",
    components:{
      SingleUpload
    },
    props:{
      value:Object,
      isUpload:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      prevHandler(){
        this.$emit('prevStep')
      },
      commitHandler(){
        // this.$refs.multiUpload.submit()
        this.$emit('commitHandler')
      }
    }
  }
</script>

<style scoped>

</style>

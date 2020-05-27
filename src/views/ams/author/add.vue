<template>
  <el-card class="box-card">
    <el-steps :active="active" simple finish-status="success">
      <el-step title="填写歌手信息" icon="el-icon-edit"></el-step>
      <el-step title="文件上传" icon="el-icon-upload"></el-step>
    </el-steps>
    <!--歌手信息-->
    <author-info-form
      v-show="showStatus[0]"
      v-model="addAuthor"
      @nextStep="nextStep">
    </author-info-form>
    <!--上传文件-->
    <author-upload-form
      v-show="showStatus[1]"
      v-model="addAuthor"
      @prevStep="prevStep"
      @commit="commit">
    </author-upload-form>
  </el-card>
</template>

<script>
  import AuthorInfoForm from './compoents/authorInfoForm'
  import AuthorUploadForm from './compoents/authorUploadForm'

  const defaultAddAuthor = {
    name: null,
    sex: null,
    type: [],
    prefix: null,
    language: null,
    description: null,
  }
  export default {
    name: "addAuthor",
    components: {
      AuthorInfoForm,
      AuthorUploadForm
    },
    data() {
      return {
        active: 0,
        isShow: true,
        showStatus: [true, false],
        addAuthor: Object.assign({}, defaultAddAuthor),
      }
    },
    computed: {},
    methods: {
      hideAll() {
        for (let i = 0; i < this.showStatus.length; i++) {
          this.showStatus[i] = false
        }
      },
      prevStep() {
        if (this.active > 0) {
          this.active--
          this.hideAll()
          this.showStatus[this.active] = true
        }
      },
      nextStep() {
        if (this.active < this.showStatus.length - 1) {
          this.active++
          this.hideAll()
          this.showStatus[this.active] = true
        }
      },
      commit() {
        console.log(this.addAuthor);
      },
    }
  }
</script>

<style scoped>
  .box-card {
    width: 900px;
    margin: 20px 150px;
    padding: 30px 70px;
  }
</style>

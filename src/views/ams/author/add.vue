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
      :is-upload="isUpdate"
      @prevStep="prevStep"
      @commitHandler="commitHandler">
    </author-upload-form>
  </el-card>
</template>

<script>
  import {add,getAuthor,updateAuthor} from "@/api/author";
  import AuthorInfoForm from './compoents/authorInfoForm'
  import AuthorUploadForm from './compoents/authorUploadForm'

  const defaultAddAuthor = {
    name: '',
    sex: '',
    tag: '',
    prefix: '',
    language: '',
    description: '',
    headIcon:''
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
        isUpdate: false,
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
      tagToString(){
        this.addAuthor.tag = this.addAuthor.tag.join('、')
      },
      tagToArray(){
        this.addAuthor.tag = this.addAuthor.tag.split('、')
      },
      commitHandler() {
        console.log(this.addAuthor);
        this.$confirm('是否要提交该歌手', '提示', {
          cancelButtonText: '取消',
          confirmButtonText: '确定',
          type: 'warning'
        }).then(() => {
          this.tagToString()
          if(this.isUpdate){
            updateAuthor(this.$route.query.id,this.addAuthor).then(() => {
              this.$message({
                type: 'success',
                message: '修改成功',
                duration:1200
              });
              this.$router.back()
            })
          }else {
            add(this.addAuthor).then(response => {
              this.$message({
                type: 'success',
                message: '提交成功',
                duration:1200
              });
              this.$refs.elUpload.submit()
            })
          }
        })
      },
    },
    created(){
      let id = this.$route.query.id
      if(typeof id !=='undefined') {
        this.isUpdate = true
      }
      if(this.isUpdate){
        getAuthor(id).then(response => {
          let data = response.data
          this.addAuthor = data
          console.log(this.addAuthor);
          this.tagToArray()
        })
      }
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

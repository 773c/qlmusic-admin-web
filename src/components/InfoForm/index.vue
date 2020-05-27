<template>
  <el-form :model="value" label-width="100px" :rules="rules" ref="authorInfoForm" style="width: 670px">
    <slot name="one"></slot>
    <slot name="two"></slot>
    <slot name="three"></slot>
    <slot name="four"></slot>
    <slot name="five"></slot>
    <slot name="six"></slot>
    <slot name="seven" ></slot>
  </el-form>
</template>

<script>
  export default {
    name: "index",
    props:{
      value:Object,
      rules:Object
    },
    data(){
      return {

      }
    },
    methods:{
      nextHandler(){
        this.$refs.authorInfoForm.validate((valid) => {
          if(valid){
            console.log("下一步");
            this.$emit('nextStep')
          }else{
            console.log('验证失败');
          }
        })
      },
      prevHandler(){

      }
    }
  }
</script>

<style scoped>

</style>

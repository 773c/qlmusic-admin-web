<template>
  <info-form :model="value" v-model="value" :rules="rules" ref="infoForm" @nextStep="nextStep" style="margin-top: 40px">
    <template #one>
      <el-form-item label="歌手姓名：" prop="name">
        <el-input type="text" v-model="value.name"></el-input>
      </el-form-item>
    </template>
    <template #two>
      <el-form-item label="歌手性别：" prop="sex">
        <el-select v-model="value.sex" placeholder="请选择">
          <el-option
            v-for="item in sexOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
    </template>
    <template #three>
      <el-form-item label="歌手类型：" prop="type">
        <el-select v-model="value.type" multiple placeholder="请选择">
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
    </template>
    <template #four>
      <el-form-item label="所属语种：" prop="language">
        <el-select v-model="value.language" placeholder="请选择">
          <el-option
            v-for="item in languageOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
    </template>
    <template #five>
      <el-form-item label="首字母：" prop="prefix">
        <el-input type="text" v-model="value.prefix" maxlength="1"></el-input>
      </el-form-item>
    </template>
    <template #six>
      <el-form-item label="歌手描述：" prop="description">
        <el-input type="textarea" v-model="value.description" placeholder="请输入详细介绍" maxlength="255"
                  show-word-limit rows="6"></el-input>
      </el-form-item>
    </template>
    <template #seven>
      <el-form-item align="center">
        <el-button type="danger" style="margin-top: 12px" @click="nextHandler">下一步，文件上传</el-button>
      </el-form-item>
    </template>
  </info-form>
</template>

<script>
  import InfoForm from '@/components/InfoForm'

  export default {
    name: "authorInfoForm",
    components: {
      InfoForm
    },
    props: {
      value: Object,
    },
    data() {
      return {
        sexOptions: [
          {
            value: '1',
            label: '男'
          }, {
            value: '2',
            label: '女'
          }, {
            value: '3',
            label: '组合'
          }
        ],
        languageOptions: [
          {
            value: 1,
            label: '华语'
          },
          {
            value: 2,
            label: '欧美'
          },
          {
            value: 3,
            label: '韩国'
          }, {
            value: 4,
            label: '日本'
          }, {
            value: 5,
            label: '其他'
          }
        ],
        typeOptions: [
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
        rules: {
          name: [
            {required: true, message: '请输入歌手姓名', trigger: 'blur'}
          ],
          sex: [
            {required: true, message: '请选择歌手性别', trigger: 'blur'}
          ],
          type: [
            {required: true, message: '请选择歌手类型', trigger: 'blur'}
          ],
          prefix: [
            {required: true, message: '请输入姓名前缀', trigger: 'blur'},
          ],
          language: [
            {required: true, message: '请选择所属语种', trigger: 'blur'}
          ]
        }
      }
    },
    methods:{
      nextHandler(){
        this.$refs.infoForm.nextHandler()
      },
      prevHandler(){

      },
      nextStep(){
        this.$emit('nextStep')
      }
    }
  }
</script>

<style scoped>

</style>

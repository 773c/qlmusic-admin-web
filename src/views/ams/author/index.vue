<template>
  <div class="app-container">
    <!--搜索框-->
    <el-card class="filter-container" shadow="never">
      <div>
        <i class="el-icon-search"></i>
        <span> 筛选搜索</span>
        <el-button
          style="float: right"
          @click=""
          type="danger"
          plain
          size="small">
          重置
        </el-button>
        <el-button
          style="float: right;margin-right: 15px"
          @click=""
          type="danger"
          size="small">
          查询结果
        </el-button>

      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" size="small" label-width="140px">
          <el-form-item label="姓名：">
            <el-input style="width: 203px" v-model="listQuery.keyname" placeholder="歌手姓名"></el-input>
          </el-form-item>
          <el-form-item label="首字母：">
            <el-input style="width: 203px" v-model="listQuery.keyprefix" placeholder="姓名的第一个字母"></el-input>
          </el-form-item>
          <el-form-item label="语种：">
            <el-select v-model="listQuery.languageId" placeholder="请选择" clearable>
              <el-option
                v-for="item in languageOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <!--<el-cascader-->
            <!--clearable-->
            <!--v-model="selectProductCateValue"-->
            <!--:options="productCateOptions">-->
            <!--</el-cascader>-->
          </el-form-item>
          <el-form-item label="性别：">
            <el-select v-model="listQuery.sex" placeholder="请选择" clearable>
              <el-option
                v-for="item in sexOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="标签：">
            <el-select v-model="listQuery.tag" placeholder="全部" clearable>
              <el-option
                v-for="item in tagOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="未知：">
            <el-select v-model="listQuery.tag" placeholder="全部" clearable>
              <el-option
                v-for="item in verifyStatusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <!--数据内容-->
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span> 数据列表</span>
      <el-button
        class="btn-add"
        @click="addAuthorHandler"
        type="danger"
        plain
        size="mini">
        添加
      </el-button>
    </el-card>
    <div class="table-container">
      <el-table ref="productTable"
                :data="list"
                style="width: 100%"
                v-loading="listLoading"
                border>
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="编号" width="60" align="center">
          <template #default="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="歌手头像" width="120" align="center">
          <template #default="scope"><img style="height: 80px" :src="scope.row.headIcon"></template>
        </el-table-column>
        <el-table-column label="歌手姓名" width="160" align="center">
          <template #default="scope">
            <p>{{scope.row.name}}</p>
          </template>
        </el-table-column>
        <el-table-column label="性别" width="70" align="center">
          <template #default="scope">
            <p>{{scope.row.sex}}</p>
          </template>
        </el-table-column>
        <el-table-column label="描述" width="140" align="center">
          <template #default="scope">
            <el-popover trigger="hover" placement="top" width="400">
              <div>
                {{scope.row.description}}
              </div>
              <div slot="reference" class="name-wrapper">
                <el-button type="danger" icon="el-icon-chat-line-round" circle></el-button>
              </div>
            </el-popover>

          </template>
        </el-table-column>
        <el-table-column label="标签" align="center">
          <template #default="scope">{{scope.row.tag}}</template>
        </el-table-column>
        <el-table-column label="首字母" width="70" align="center">
          <template #default="scope">{{scope.row.prefix}}</template>
        </el-table-column>
        <el-table-column label="粉丝数量" width="140" align="center">
          <template #default="scope">{{scope.row.fansSum}}</template>
        </el-table-column>
        <el-table-column label="语种" width="80" align="center">
          <template #default="scope">{{scope.row.language}}</template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template #default="scope">
            <p>
              <el-button
                size="mini"
                type="danger"
                plain
                @click="handleShowProduct(scope.$index, scope.row)">查看
              </el-button>
              <el-button
                size="mini"
                type="danger"
                plain
                @click="updateAuthorHandler(scope.$index, scope.row)">编辑
              </el-button>
            </p>
            <p>
              <el-button
                size="mini"
                type="danger"
                plain
                @click="handleShowLog(scope.$index, scope.row)">日志
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </p>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--分页-->
    <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes,prev, pager, next,jumper"
        :page-size="listQuery.pageSize"
        :page-sizes="[5,10,15]"
        :current-page.sync="listQuery.pageNum"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {getAuthorList} from "@/api/author";

  const defaultListQuery = {
    pageNum: 1,
    pageSize: 5,
    keyname: null,
    keyprefix: null,
    languageId: null,
    sex: null,
    tag: null
  };
  export default {
    name: "authorList",
    data() {
      return {
        editSkuInfo: {
          dialogVisible: false,
          productId: null,
          productSn: '',
          productAttributeCategoryId: null,
          stockList: [],
          productAttr: [],
          keyword: null
        },
        operateType: null,
        listQuery: Object.assign({}, defaultListQuery),
        list: null,
        total: null,
        listLoading: true,
        multipleSelection: [],
        productCateOptions: [],
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
        sexOptions: [
          {
            value: 1,
            label: '男'
          }, {
            value: 2,
            label: '女'
          }, {
            value: 3,
            label: '组合'
          }
        ],
        verifyStatusOptions: [{
          value: 1,
          label: '审核通过'
        }, {
          value: 0,
          label: '未审核'
        }],
        tagOptions:[]
      }
    },
    methods: {
      authorList() {
        this.listLoading = true
        getAuthorList(this.listQuery).then(response => {
          console.log(response);
          this.listLoading = false
          this.list = response.data.list
          this.total = response.data.total
        })
      },
      handleCurrentChange(val) {
        this.listQuery.pageNum = val
        this.authorList()
      },
      handleSizeChange(val) {
        this.listQuery.pageNum = 1
        this.listQuery.pageSize = val
        this.authorList()
      },
      addAuthorHandler(){
        this.$router.push('/ams/addAuthor')
      },
      updateAuthorHandler(index,row){
        console.log(index);
        this.$router.push({path:'/ams/updateAuthor',query:{id:row.id}})
      }
    },
    created() {
      this.authorList()
    }
  }
</script>

<style scoped>

</style>

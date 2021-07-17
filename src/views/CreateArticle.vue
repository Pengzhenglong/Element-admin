<template>
  <el-form
    @submit.native.prevent="saveArticle"
    ref="form"
    :model="article"
    label-width="80px"
  >
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>

    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="onSubmit">立即创建</el-button>
      <el-button    @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
export default {
  data() {
    return {
      article: {

      }
    }
  },
  methods: {
    cancel(){
this.$router.push('/articles/index')
    },
    saveArticle() {
      this.$http.post('articles', this.article).then(() => {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
        this.$router.push('/articles/index')
      })

    }
  }
}
</script>
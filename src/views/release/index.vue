<template>
  <div class='release'>
    <header v-if='num<5'>
      <van-search placeholder="请输入搜索关键词" v-model="value" v-if='num==1' />
      <div class="top" v-else> <i class="fas fa-chevron-left" @click='num--'> </i> <span>类别</span></div>
    </header>
    <section>
      <Content :index='num' @reset='reset' />
    </section>
    <van-button type="primary" v-if='num<5' size="large" round @click='num++'>
      <span v-if='num==1'>选择完成，下一步</span> 
      <span v-else> 下一步 </span>
      </van-button>
  </div>
</template>

<script>
import Content from './content'
export default {
    data(){
      return {
        value:'',
        num:1
      }
    },
    components:{
      Content
    },
    methods:{
      reset(){
        this.num=1;
      }
    },
    watch:{
      
    }
}
</script>

<style lang='scss' scoped>
header{
  width: 100%;
  display: flex;
  justify-content: center;
}
  .release{
    justify-content: flex-start;
    position: relative;
    align-items: center;
    
    .top,.van-search{
      margin-top: 0.1rem;
      width: 3rem;
      height: 0.31rem;
      // margin-bottom: 0.2rem;
    }
    .top{
      width: 100%;
      display: flex;
      position: relative;
      border-bottom: 1px solid #ccc;
      i{
        position: absolute;
        padding-left: 0.2rem;
         font-size: 0.18rem;
      }
      span{
        flex:1;
        font-size: 0.18rem;
      }
    }
    section{
      width: 100%;
      // height: 96%;
      overflow: auto;
      padding-bottom: 0.32rem;
    }
    .van-button{
      width: 2.39rem;
      height: 0.34rem;
      position: absolute;
      bottom: 0.17rem;
      margin-left: 50%;
      left:-1.195rem;
      line-height: 0.34rem;
      background: #4cc79b;

    }
  }
</style>
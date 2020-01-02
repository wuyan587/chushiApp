<template>
  <div class='release'>
    <header v-if='num<5'>
      <van-search placeholder="请输入搜索关键词" v-model="value" v-if='num==1' />
      <div class="top" v-else-if='num==2'> <i class="fas fa-chevron-left" @click='des'> </i> <span>{{fruit.fruitType?fruit.fruitType:''}}</span></div>
      <div class="top" v-else> <i class="fas fa-chevron-left" @click='des'> </i> <span>{{fruit.fruitName?fruit.fruitName:''}}</span></div>
    </header>
    <section>
      <Content  />
    </section>
    <van-button type="primary" v-if='num<5' size="large" round @click='add'>
      <span v-if='num==1'>选择完成，下一步</span> 
      <span v-else> 下一步 </span>
      </van-button>
  </div>
</template>

<script>
import Content from './content'
import { mapMutations } from 'vuex'
export default {
    data(){
      return {
        value:'',
      }
    },
    components:{
      Content
    },
    methods:{
      ...mapMutations(['add','des']),
      add(){
        this.$store.commit('add');
      },
      des(){
        this.$store.commit('des');
      }
    },
    watch:{
      
    },
    mounted(){
      // console.log(this.$store.state.release.fruit)
    },
    computed:{
      fruit(){
        return this.$store.state.release.fruit;
      },
      num(){
        return this.$store.state.release.flagNum
      }
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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    align-items: center;
    background: white;
    overflow: auto;
    
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

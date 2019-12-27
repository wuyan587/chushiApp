<template>
  <footer>
      <ul>
          <li v-for="item of tabbar"  :key='item.id' >
               <div v-if="item.name=='发布'" class="btn_warp tabbar_list"  >
                <span class="icon" @click='showPopup'>
                    +
                </span>
                <span class="des">
                    {{item.name}}
                </span>
                <!-- 弹出层  -->
                <van-popup
                v-model="show"
                position="bottom"
                :style="{ height: '2.56rem' }"
                :overlay-style="{ background:'rgba(0,0,0,0.3)' }"
                >
                    <div class='pop'>
                        <div class="pop_warp">

                        </div>
                        <i class="fas fa-times"  @click="hidePopup"></i> 
                    </div>
                </van-popup>
              </div>
              <router-link 
            :to=' item.path '
            active-class='active'
            tag='div' v-else
            class="tabbar_list"
          >
                <i class="fas" :class="`fa-${item.icon}`"></i>
                <span class="des">
                    {{item.name}}
                </span>
          
          </router-link>
          </li>
          
          
      </ul>
  </footer>
</template>

<script>
export default {
    data(){
        return {
            tabbar:[
                {
                    id:1,
                    name:'首页',
                    path:'/home',
                    icon:'home'
                },{
                    id:2,
                    name:'分类',
                    path:'/sort',
                    icon:'th-large'
                },{
                    id:3,
                    name:'发布',
                    path:'/release',

                },{
                    id:4,
                    name:'货单',
                    path:'/shopcart',
                    icon:'clipboard-list'
                },{
                    id:5,
                    name:'我的',
                    path:'/user',
                    icon:'user-tie'
                }
            ],
            show:false
        }
    },
    methods:{
        showPopup() {
         this.show = true;
        },
        hidePopup(){
         this.show = false;
        }
    }
}
</script>

<style lang='scss' scoped>
    footer{
        height: 0.5rem;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        ul{
            height: 100%;
            display: flex;
            li{
                height: 100%;
                display: flex;  
                flex:1;
                justify-content: center;
            }
            .tabbar_list{
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                position: relative;
                &.active{
                    color: #4cc79b;
                }
                i{
                    font-size: 0.24rem;
                    margin-bottom: 0.05rem;
                }
                .des{
                    font-size: 0.06rem;
                }
            }
            .btn_warp{
                flex: 1;
                    .des{
                        position: relative;
                        bottom: -0.15rem;
                    }
                   .icon{
                        display: block;
                        height: 0.5rem;
                        width: 0.5rem;
                        position: absolute;
                        background: #4cc79b;
                        border-radius: 50%;
                        top:-40%;
                        left: -0.25rem;
                        margin-left: 50%;
                        line-height: 0.5rem;
                        text-align: center;
                        font-size: 0.5rem;
                        color: white;
                    }
                }
        }
        .pop{
            height: 100%;
            background: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            i{
                font-size: 0.18rem;
                color:#005c60;
                width: 0.3rem;
            }
            .pop_warp{
                height: 0.9rem;
                background: #ccc;
                margin-top: 0.5rem;
                margin-bottom: 0.55rem;
                width: 100%;
            }
        }
    }
</style>
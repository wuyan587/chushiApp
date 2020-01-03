<template>
  <div class="pub_supply">
      <van-cell-group>
        <van-cell title-class="titles" value-class="text" title="货品名称" :value="fruit.fruitName" />
        <van-cell title-class="titles" value-class="text" title="规格" :value="fruitSpecification" />
        <van-cell title-class="titles" value-class="text" title="标题预览" :value="fruit.fruitName" />
      </van-cell-group>
      <van-cell-group>
        <van-field label="单价" label-class="titles suffix_price" v-model="fruit.price" placeholder="请输入用户名" />
        <van-field label="起批数量" label-class="titles suffix_num" v-model="fruit.num" placeholder="请输入用户名" />
        <van-cell title="发货地址" title-class="titles" value-class="text" is-link :value="area" @click="showArea" />
        <van-cell title="发货时间" title-class="titles" value-class="text" is-link value="现货" />
      </van-cell-group>
      <van-cell-group>
        <van-field label="是否包运费" type="checkbox" label-class="titles" placeholder="请输入用户名" />
        <van-field label="是否支持零售" type="checkbox" label-class="titles" placeholder="请输入用户名" />
        <van-cell title="提供服务" title-class="titles" value-class="text" is-link :value="supChose" @click='showSup'/>
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="fruit.detail"
          label-class="titles"
          rows="4"
          label="详情"
          type="textarea"
          placeholder="请输入详情"
        />
      </van-cell-group>
      <van-cell-group>
        <p style='padding:0.1rem 0.15rem;' class="titles">产品主图</p>
        <van-uploader v-model="fruit.imgs"  multiple />
      </van-cell-group>
      <!-- 弹出层 -->
        <van-popup
          v-model="show"
          position="bottom"
          :style="{ height: '55%' }"
        > 
        <!-- 地址 -->
        <div v-if="puptype=='area'">
          <van-area
          :area-list="areaList"
          :columns-placeholder="['请选择', '请选择', '请选择']"
          @cancel='hidePopup'
          @confirm='confirm'
          title="标题"
         />
        </div>
        <div class="sup" v-else-if="puptype=='support'">
          <h2>请选择你为采购商提供的服务</h2>
          <h3>越多越好的服务,越能获取采购商的订单哦!</h3>
          <ul>
            <li v-for="item of suplist" :key='item.sid' :class="{'active':item.flag}" @click="item.flag=!item.flag"><span>{{item.val}}</span></li>
          </ul>
          <van-button type="primary" size="large" round @click="closeChose">
        <span > 下一步 </span>
          </van-button>
        </div>
        </van-popup>
        
        
  </div>
</template>

<script>
import areaList from '@/utils/area';
import { mapMutations } from 'vuex'
export default {
    data(){
        return {
            num: "",
            price:'',
            message: "",
            // fileList: [],
            Specification:'',
            show:false,
            areaList,
            arealist:[],
            puptype:'area',
            supList:[],
            suplist:[
              {
                sid:1,
                val:'见面交易',
                flag:true
              },{
                sid:2,
                val:'基地直供',
                flag:false
              },{
                sid:3,
                val:'产地代办',
                flag:false
              },{
                sid:4,
                val:'包地种植',
                flag:false
              },{
                sid:5,
                val:'协助找车',
                flag:false
              },{
                sid:6,
                val:'支持快递',
                flag:false
              },{
                sid:7,
                val:'支持空运',
                flag:false
              },{
                sid:8,
                val:'支持周边送货',
                flag:false
              },{
                sid:9,
                val:'支持零担拼车',
                flag:false
              },{
                sid:10,
                val:'提供包装',
                flag:false
              },{
                sid:11,
                val:'提供清洗',
                flag:false
              },{
                sid:12,
                val:'按需分拣',
                flag:false
              },{
                sid:13,
                val:'协助装车',
                flag:false
              },{
                sid:14,
                val:'农残留检测',
                flag:false
              },{
                sid:15,
                val:'提供打冷',
                flag:false
              },{
                sid:16,
                val:'支持扣称',
                flag:false
              },{
                sid:17,
                val:'支持代卖',
                flag:false
              },{
                sid:18,
                val:'提供样品',
                flag:false
              },

            ],
            imglist:[],
        }
    },
    mounted(){

    },
    methods:{
      ...mapMutations(['setval']),
      showPopup() {
        this.show = true;
      },
      hidePopup(){
       this.show=false;
     },
     showArea(){
       this.puptype='area';
       this.show = true;
     },
     showSup(){
       this.puptype='support';
       this.show = true;
     },
     confirm(a){
       this.arealist=a;
       this.show=false;
     },
     closeChose(){
       this.supList=this.suplist.filter(item=>item.flag);
       this.show=false;
     },
    },
    computed:{
      area(){
        let areastr='';
        if(this.arealist.length!=0){
          this.arealist.forEach(item=>{
            if(item&&item.name&&item.name!=''){
                    areastr+=item.name;
            }
          })
        }
        if(areastr=='')
           return '请选择地址';
        else {
          this.$store.commit('setval',['area',areastr]);
          return areastr;
        }
           
      },
      supChose(){
        let str='';
         if(this.supList.length!=0)
          str = this.supList.map(item=>{
            return item.val;
          }).join(',');
         else
          str='请选择提供的服务';
        this.$store.commit('setval',['sup',str]);
        return str;
      },
      fruit(){
        return this.$store.state.release.fruit;
      },
      fruitSpecification(){
        let str='';
        str=  Object.values(this.$store.state.release.fruit.fruitSpecification).join(',')
        return str
      }
    }
}
</script>

<style lang='scss' scoped>
.van-cell__value{
  span{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
}
.sup{
  h2{
    margin-top: 0.2rem;
    font-size: 0.18rem;
    margin-bottom: 0.1rem
  }
  h3{
    font-size: 0.13rem;
    color: #b8b8b8;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    padding: 0.1rem;
    
    li{
      width: 20%;
      margin: 0.078rem;
      border:1px solid #4cc79b;
      height: 0.3rem;
      box-sizing: border-box;
      font-size: 0.12rem;
      display: flex;
      justify-content: center;
      align-self: center;
      border-radius: 0.05rem;
      &.active {
      color: white;
      background: #4cc79b;
    }
      span{
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
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
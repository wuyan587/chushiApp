<template>
  <div class="pub_purchase">
      <van-cell-group>
        <van-cell title-class="titles" value-class="text" title="货品名称" :value="fruit.fruitName" />
        <van-cell title-class="titles" value-class="text" title="规格" :value="fruitSpecification" />
        <van-cell title-class="titles" value-class="text" title="标题预览" :value="fruit.fruitName" />
      </van-cell-group>
       <van-cell-group>
        <van-field label="采购数量" label-class="titles suffix_num" v-model="fruit.num" placeholder="请输入数量" />
        <van-cell title="采购周期" title-class="titles" value-class="text" is-link value="1" />
        <van-cell title="期望产地" title-class="titles" value-class="text" is-link :value="from" @click="showFrom" />
        <van-cell title="收货地址" title-class="titles" value-class="text" is-link :value="area" @click="showArea" />
      </van-cell-group>
       <van-cell-group>
        <van-field
          v-model="fruit.detail"
          label-class="titles"
          rows="2"
          label="其他要求(选填)"
          type="textarea"
          placeholder="请输入详情"
        />
      </van-cell-group>
       <van-cell-group>
        <van-field label="手机号码" label-class="titles" v-model="fruit.phone" placeholder="请输入手机号" />
        <van-field
    v-model="sms"
    label-class="titles"
    center
    clearable
    label="短信验证码"
    placeholder="请输入短信验证码"
  >
    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
  </van-field>
        </van-cell-group>
         <!-- 弹出层 -->
        <van-popup
          v-model="show"
          position="bottom"
          :style="{ height: '55%' }"
        > 
        <!-- 地址 -->
        <div>
          <van-area
          :area-list="areaList"
          :columns-placeholder="['请选择', '请选择', '请选择']"
          @cancel='hidePopup'
          @confirm='confirm'
          title="标题"
         />
         </div>
         </van-popup>
  </div>
</template>

<script>
import areaList from '@/utils/area';
import { mapMutations } from 'vuex'
export default {
    props:[
        'fruitDetil'
    ],
    data(){
        return {
            value:'',
            sms:'',    //短信验证,
            phone:'',
            puptype:'area',
            show:false,
            areaList,
            fromlist:[],
            arealist:[],
        }
    },
    methods:{
      ...mapMutations(['setval']),
      hidePopup(){
       this.show=false;
     },
      showFrom(){
        this.puptype='from';
        this.show=true;
      },
      showArea(){
        this.puptype='area';
        this.show=true;
      },
      confirm(a){
        switch(this.puptype){
          case 'from':
            this.fromlist=a;
            break;
          case 'area':
            this.arealist=a;
            break;

        }
        this.show=false;
      }
    },
    computed:{
      fruit(){
        return this.$store.state.release.purfruit;
        },
      fruitSpecification(){
        let str='';
        str=  Object.values(this.$store.state.release.fruit.fruitSpecification).join(',')
        return str
        },
      from(){
        let areastr='';
        if(this.fromlist.length!=0){
          this.fromlist.forEach(item=>{
            if(item&&item.name&&item.name!=''){
                    areastr+=item.name;
            }
          })
        }
        if(areastr=='')
           return '请选择地址';
        else {
          this.$store.commit('setval',['from',areastr]);
          return areastr;
        }
    },
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
    }
}}
</script>

<style>

</style>
<template>
  <div class="pub_supply">
      <van-cell-group>
        <van-cell title-class="titles" value-class="text" title="货品名称" :value="fruitDetil.fruitName" />
        <van-cell title-class="titles" value-class="text" title="规格" value="内容" />
        <van-cell title-class="titles" value-class="text" title="标题预览" value="内容" />
      </van-cell-group>
      <van-cell-group>
        <van-field label="单价" label-class="titles suffix_price" v-model="value" placeholder="请输入用户名" />
        <van-field label="起批数量" label-class="titles suffix_num" v-model="value" placeholder="请输入用户名" />
        <van-cell title="发货地址" title-class="titles" value-class="text" is-link :value="area" @click="showPopup" />
        <van-cell title="发货时间" title-class="titles" value-class="text" is-link value="内容" />
      </van-cell-group>
      <van-cell-group>
        <van-field label="是否包运费" type="checkbox" label-class="titles" placeholder="请输入用户名" />
        <van-field label="是否支持零售" type="checkbox" label-class="titles" placeholder="请输入用户名" />
        <van-cell title="提供服务" title-class="titles" value-class="text" is-link value="内容" />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="message"
          label-class="titles"
          rows="4"
          label="详情"
          type="textarea"
          placeholder="请输入详情"
        />
      </van-cell-group>
      <van-cell-group>
        <p style='padding:0.1rem 0.15rem;' class="titles">产品主图</p>
        <van-uploader v-model="fileList" multiple />
      </van-cell-group>
      <!-- 弹出层 -->
        <van-popup
          v-model="show.areashow"
          position="bottom"
          :style="{ height: '50%' }"
        > 
        <!-- 地址 -->
        <van-area
          :area-list="areaList"
          :columns-placeholder="['请选择', '请选择', '请选择']"
          @cancel='hidePopup'
          @confirm='confirm'
          title="标题"
        />
        </van-popup>
  </div>
</template>

<script>
import areaList from '@/utils/area';
export default {
    props:[
        'fruitDetil'
    ],
    data(){
        return {
            value: "",
            message: "",
            fileList: [],
            show:{
              areashow:false,
            },
            areaList,
            arealist:[]
        }
    },
    mounted(){
        console.log(this.fruitDetil);
    },
    methods:{
      showPopup() {
        this.show.areashow = true;
      },
      hidePopup(){
       this.show.areashow=false;
     },
     confirm(a){
       this.arealist=a;
       this.show.areashow=false;
     }
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
        else 
           return areastr;
      }
    }
}
</script>

<style>

</style>
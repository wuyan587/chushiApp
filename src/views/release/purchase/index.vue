<template>
  <div class="pub_purchase">
      <van-cell-group>
        <van-cell title-class="titles" value-class="text" title="货品名称" :value="fruit.fruitName" />
        <van-cell title-class="titles" value-class="text" title="规格" :value="fruitSpecification" />
        <van-cell title-class="titles" value-class="text" title="标题预览" :value="fruit.fruitName" />
      </van-cell-group>
       <van-cell-group>
        <van-field label="采购数量" label-class="titles suffix_num" v-model="value" placeholder="请输入用户名" />
        <van-cell title="采购周期" title-class="titles" value-class="text" is-link value="内容" />
        <van-cell title="期望产地" title-class="titles" value-class="text" is-link value="内容" />
        <van-cell title="收货地址" title-class="titles" value-class="text" is-link value="内容" />
      </van-cell-group>
       <van-cell-group>
        <van-field
          v-model="message"
          label-class="titles"
          rows="2"
          label="其他要求(选填)"
          type="textarea"
          placeholder="请输入详情"
        />
      </van-cell-group>
       <van-cell-group>
        <van-field label="手机号码" label-class="titles" v-model="value" placeholder="请输入用户名" />
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
  </div>
</template>

<script>
export default {
    data(){
        return {
            value:'',
            message:'',
            sms:'',    //短信验证
        }
    },
    computed:{
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

<style>

</style>
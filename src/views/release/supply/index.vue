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
        <van-cell title="发货地址" title-class="titles" value-class="text" is-link value="内容" />
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
  </div>
</template>

<script>
export default {
    props:[
        'fruitDetil'
    ],
    data(){
        return {

        }
    }
}
</script>

<style>

</style>
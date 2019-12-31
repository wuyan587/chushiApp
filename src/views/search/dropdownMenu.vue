<template>
<div class="dropdownMenu">
 <van-dropdown-menu active-color="#4cc79b">
  <van-dropdown-item v-model="value1" :options="items">
    <van-tree-select
  :items="items"
  :active-id.sync="activeId"
  :main-active-index.sync="activeIndex"
/>
  </van-dropdown-item>
  <van-dropdown-item v-model="value2" :options="option2" />
  <van-dropdown-item title="筛选" ref="item">
 <van-checkbox-group v-model="result" checked-color="#4cc79b">
  <van-cell-group>
    <van-cell
      v-for="(item, index) in list"
      clickable
      :key="item"
      :title="`${item}`"
      @click="toggle(index)"
    >
      <van-checkbox
        :name="item"
        ref="checkboxes"
        slot="right-icon"
      />
    </van-cell>
  </van-cell-group>
</van-checkbox-group>
        <van-button block type="info" @click="onConfirm">确认</van-button>
  </van-dropdown-item>
</van-dropdown-menu>
</div>
  
</template>
<script>
export default {
     data() {
    return {
       value1: 0,
      value2: 'a',
      
       activeId: 1,
      activeIndex: 0,
      result: [],
      items:[{text:'全国',value: 0},{
        text:'浙江省',value: 1,
      children:[{text:'杭州',id:1},{text:'温州',id:2}]
      },
      {
        text:'江苏省',value: 2,
      children:[{text:'南京',id:1},{text:'苏州',id:2}]
      },
      {
        text:'广东省',value: 3,
      children:[{text:'广州',id:1},{text:'深圳',id:2}]
      },
      ],
      list:['包运费','支持零售'],
      option1: [
        { text: '全国', value: 0 },
       
      ],
      option2: [
        { text: '综合排序', value: 'a' },
        { text: '距离排序', value: 'b' },
        { text: '价格排序', value: 'c' },
      ]
    }
  },

  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
      toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }

}
</script>
<style lang="scss" scoped>

</style>
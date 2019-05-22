<template>
  <div class="cell">
    <div class="demo">
      <h3>基本用法</h3>
      <pl-cell-group>
        <pl-cell-item title="单元格" value="内容" />
      </pl-cell-group>
      <pl-cell-group>
        <pl-cell-item title="单元格" value="内容" desc="描述内容" />
      </pl-cell-group>
    </div>
    <div class="demo">
      <h3>展示图标</h3>
      <pl-cell-group>
        <pl-cell-item
          title="单元格"
          value="内容"
          icon="month"
        />
      </pl-cell-group>
    </div>
    <div class="demo">
      <h3>只展示标题及其位置</h3>
      <pl-cell-group>
        <pl-cell-item title="单元格" />
        <pl-cell-item title="单元格" title-align="center" />
      </pl-cell-group>
    </div>
    <div class="demo">
      <h3>展示箭头</h3>
      <pl-cell-group>
        <pl-cell-item title="单元格" is-link />
      </pl-cell-group>
    </div>
    <div class="demo">
      <h3>页面跳转</h3>
      <pl-cell-group>
        <pl-cell-item title="单元格" is-link to="/welcome" />
      </pl-cell-group>
    </div>
    <div class="demo">
      <h3>分组标题</h3>
      <pl-cell-group title="分组1">
        <pl-cell-item title="单元格" value="内容" />
      </pl-cell-group>
      <pl-cell-group title="分组2">
        <pl-cell-item title="单元格" value="内容" />
      </pl-cell-group>
    </div>
    <div class="demo">
      <h3>高级用法</h3>
      <pl-cell-group title="插槽">
        <pl-cell-item>
          <div slot="desc" class="pl-cell-item--desc">
            <div class="header">
              <span>右侧标题</span>
            </div>
            <span class="text">描述内容</span>
          </div>
          <van-button plain type="warning" slot="right" size="small">去完成</van-button>
        </pl-cell-item>
        <pl-cell-item title="单元格" icon="times" size="18" is-link />
        <pl-cell-item title="单元格">
           <pl-svg-icon icon="done" size="18" slot="right" />
        </pl-cell-item>
      </pl-cell-group>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant'

export default {
  name: 'cell',
  components: {
    [Button.name]: Button
  }
}
</script>

<style lang="less" scoped>
.cell {
  h3 {
    margin-left: 10px;
  }
}
</style>

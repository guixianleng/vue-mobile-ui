<template>
  <div class="cell">
    <card>
      <div class="demo">
        <h2>基本用法</h2>
        <pl-cell-group>
          <pl-cell-item title="单元格" value="内容" />
        </pl-cell-group>
        <pl-cell-group>
          <pl-cell-item title="单元格" value="内容" desc="描述内容" />
        </pl-cell-group>
      </div>
    </card>
    <card>
      <div class="demo">
        <h2>展示图标</h2>
        <pl-cell-group>
          <pl-cell-item
            title="单元格"
            value="内容"
            icon="month"
          />
        </pl-cell-group>
      </div>
    </card>
    <card>
      <div class="demo">
        <h2>只展示标题及其位置</h2>
        <pl-cell-group>
          <pl-cell-item title="单元格" />
          <pl-cell-item title="单元格" title-align="center" />
        </pl-cell-group>
      </div>
    </card>
    <card>
      <div class="demo">
        <h2>展示箭头</h2>
        <pl-cell-group>
          <pl-cell-item title="单元格" is-link />
        </pl-cell-group>
      </div>
    </card>
    <card>
      <div class="demo">
        <h2>页面跳转</h2>
        <pl-cell-group>
          <pl-cell-item title="单元格" is-link to="/welcome" />
        </pl-cell-group>
      </div>
    </card>
    <card>
      <div class="demo">
        <h2>分组标题</h2>
        <pl-cell-group title="分组1">
          <pl-cell-item title="单元格" value="内容" />
        </pl-cell-group>
        <pl-cell-group title="分组2">
          <pl-cell-item title="单元格" value="内容" />
        </pl-cell-group>
      </div>
    </card>
    <card>
      <div class="demo">
        <h2>高级用法</h2>
        <pl-cell-group title="插槽">
          <pl-cell-item>
            <div slot="desc" class="pl-cell-item--desc">
              <div class="header">
                <span>右侧标题</span>
              </div>
              <span class="text">描述内容</span>
            </div>
            <van-button slot="right" type="warning" size="mini" plain>去完成</van-button>
          </pl-cell-item>
          <pl-cell-item title="单元格" icon="times" size="18" is-link />
          <pl-cell-item title="单元格">
            <pl-svg-icon icon="done" size="18" slot="right" />
          </pl-cell-item>
        </pl-cell-group>
      </div>
    </card>
  </div>
</template>

<script>

export default {
  name: 'cell'
}
</script>

<style lang="less" scoped>
.cell {
  h2 {
    margin-left: 10px;
  }
}
</style>

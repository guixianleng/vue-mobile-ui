<template>
  <div class="bus-comps">
    <div class="demo">
      <h3>列表卡片</h3>
      <pl-card
        v-for="(item, index) in list"
        :key="index"
        :imgUrl="item.url"
        :title="item.title"
        :labelName="item.labelName"
        :desc="item.desc" />
    </div>
    <div class="demo">
      <h3>列表panel</h3>
      <pl-panel
        icon="disconnect"
        status="未完待续"
        :time="currTime">
        <div slot="header">
          <span>名称: <i>LenGxin</i></span>
          <span>项目名称: <i>vue-mobile-components</i></span>
          <span class="single-els">项目地址: <i>https://github.com/guixianleng/vue-mobile-ui</i></span>
        </div>
        <div slot="footer" class="footer-class">
          <span>上传时间: 2019-05-22</span>
          <span>兴趣爱好: 欢迎吐槽</span>
        </div>
      </pl-panel>
    </div>
  </div>
</template>

<script>
import plCard from '@/components/businessComponents/plCard'
import plPanel from '@/components/businessComponents/plPanel'
import avatar from '@/assets/images/avatar.png'
import { formatTime } from '@/utils'

export default {
  name: 'bus-comps',
  components: {
    plCard,
    plPanel
  },
  data () {
    return {
      formatTime,
      list: [
        {
          url: avatar,
          title: '张三丰',
          labelName: '一代宗师',
          desc: '张三丰，原名张君宝，在金庸小说《神雕侠侣》与《倚天屠龙记》登场。为人正气凛然，宽和从容，颇有仙风道骨之姿，其是当世无出其右的武学奇才。百岁之时自创太极拳、太极剑，将武当派发扬光大，威名远扬武林豪杰黑白两道无不拜服。门下七位弟子有“武当七侠”之称。'
        },
        {
          url: avatar,
          title: '王五',
          labelName: '一代皮匠',
          desc: '皮匠，一般是指用皮革制作物件的工人或者修理、通常指制作皮鞋的鞋匠，或其他皮制品，例如马鞍，皮质鼓面，等的手工艺人。'
        }
      ],
      currTime: formatTime(new Date().getTime())
    }
  }
}
</script>

<style lang="less" scoped>
.bus-comps {
  .demo {
    h3 {
      margin-left: 10px;
    }
  }
  .pl-panel {
    span {
      display: block;
      line-height: 28px;
    }
    i {
      color: #268AED
    }
  }
  .footer-class {
    background-color: #EEF6FF;
    padding: 6px;
    margin-top: 10px;
    font-weight: 600;
    line-height: 20px;
  }
}
</style>

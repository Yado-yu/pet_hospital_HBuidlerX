<template>
  <view class="template-protocol">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>
    
    <view class="tn-text-center tn-margin tn-text-lg plus-box" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <view class="plus-text">
        <view class="tn-text-bold">图鸟模板小程序，开源啦</view>
        <view class="tn-margin-bottom-xl">（会员有更多福利鸭）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">图鸟模板小程序，页面数量50+</view>
        <view class="tn-text-bold">
          <text class="tn-text-xl-xxl">199￥</text>
          <text class="tn-text-xl" style="">299￥</text>
          <!-- 为什么不用text-decoration 因为这里面加了骚操作，不生效，你试试就知道了吖-->
          <text class="" style="margin: -10rpx 10rpx 0 -115rpx;">————</text>
          <text class="tn-text-xl-xxl"> / </text>
          <text class="tn-text-xxl tn-padding-left-sm">7月1日前早鸟价</text>
        </view>
        <view class="tn-margin-bottom-xl">（大约等于1个酷炫前端效果价格💕）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">不断更新酷炫组件以及页面模板</view>
        <view class="tn-margin-bottom-xl">（图鸟UI会员免费拥有所有模板）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">请勿转售，转售是会慢慢追究法律责任的</view>
        <view class="tn-margin-bottom-xl">（毕竟开发圈子就那么小）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">图鸟北北，微信号：<text class="tn-text-bold tn-text-xxl" @click="copyWechat">tnkewo</text> </view>
        <view class="">（如需入群，可备注：进微信群）</view>
        <view class="">（如需合作，可备注：商业合作）</view>
        <view class="tn-margin-bottom-xl">（如需会员，可备注：咨询会员）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">入群须知，群内禁止黄赌毒+广告+吵架</view>
        <view class="tn-margin-bottom-xl">（可进群与群友合作，拓展人脉）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">模板会员达到50+叭</view>
        <view class="tn-margin-bottom-xl">（希望得到支持，并出下一个更好的作品）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">也希望大家能喜欢这个项目</view>
        <view class="tn-margin-bottom-xl">（不喜勿喷，北北还在努力成长）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">使用手册 + 图片素材 + 意见反馈 + Bug提交</view>
        <view class="tn-margin-bottom-xl" @click="copyYuque">（https://www.yuque.com/tuniao）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">图鸟模板开始于2022年5月1日，上线于5月30日</view>
        <view class="tn-margin-bottom-xl">（期间没有任何恰饭接单）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">目的为了感谢支持的会员大佬们</view>
        <view class="tn-margin-bottom-xl">（项目初衷是拓展业务，寻求商务合作）</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold tn-text-xxl"> <text class="tn-icon-vip-fill tn-padding-right-xs"></text> 699￥会员特权 <text class="tn-icon-vip-fill tn-padding-left-xs"></text></view>
        <view class="">①会员尊享所有酷炫模板，模板持续更新</view>
        <view class="">②优先响应会员页面模板需求，icon需求</view>
        <view class="">③会员版本更新，在会员群进行代码发送</view>
        <view class="tn-margin-bottom-xl">④有什么好的建议，可以提出来，多沟通</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold tn-text-xxl"> <text class="tn-icon-moon-fill tn-padding-right-xs"></text> 关于作者 <text class="tn-icon-moon-fill tn-padding-left-xs"></text></view>
        <view class="">蔡北北，95年，广州</view>
        <view class="">浮夸UI设计</view>
        <view class="">菜鸡软件开发</view>
        <view class="">祭天产品经理</view>
        <view class="">背锅项目经理</view>
        <view class="tn-margin-bottom-xl">努力往CTO去发展</view>
      </view>
      
      <view class="plus-text">
        <view class="tn-text-bold">北北感恩你的支持</view>
        <view class="tn-margin-bottom-xl"></view>
      </view>
      
    </view>
    
    
    <view class="tn-padding-bottom"></view>
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  export default {
    name: 'TemplatePlus',
    mixins: [template_page_mixin],
    data(){
      return {}
    },
    methods: {
      // 复制语雀地址
      copyYuque() {
        uni.setClipboardData({
          data: "https://www.yuque.com/tuniao",
        })
      },
      // 复制微信号
      copyWechat() {
        uni.setClipboardData({
          data: "tnkewo",
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  /* 胶囊*/
  .tn-custom-nav-bar__back {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 1000rpx;
    border: 1rpx solid rgba(255, 255, 255, 0.5);
    color: #FFFFFF;
    font-size: 18px;
    
    .icon {
      display: block;
      flex: 1;
      margin: auto;
      text-align: center;
    }
    
    &:before {
      content: " ";
      width: 1rpx;
      height: 110%;
      position: absolute;
      top: 22.5%;
      left: 0;
      right: 0;
      margin: auto;
      transform: scale(0.5);
      transform-origin: 0 0;
      pointer-events: none;
      box-sizing: border-box;
      opacity: 0.7;
      background-color: #FFFFFF;
    }
  }
  /* 内容 开始 */
  .plus-box {
    counter-reset: index;  
    padding: 0;
    max-width: 100vw;
    background-image: linear-gradient(to top, #FFA726 , #2DE8BD);
    background-attachment: fixed;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .plus-text {
    counter-increment: index; 
    display: initial;
    align-items: center;
    padding: 12px 0;
    box-sizing: border-box;

  }
  
  
  .plus-text::before {
    content: counters(index, ".", decimal-leading-zero);
    font-size: 1.5rem;
    font-weight: bold;
    font-feature-settings: "tnum";
    font-variant-numeric: tabular-nums;
    align-self: flex-start;
  }
  
</style>

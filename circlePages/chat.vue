<template>
  <view class="template-content">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>
    
    
    
    <view class="" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      
      <view class="tn-text-justify">
        
        <view class="tn-margin">
          <view class="tn-flex tn-flex-row-between tn-flex-col-center">
            <view class="justify-content-item">
              <view class="tn-flex tn-flex-col-top tn-flex-row-left">
                <view class="logo-pic tn-shadow-blur tn-margin-top-sm" style="background-image:url('https://tnuiimage.tnkjapp.com/blogger/blogger_beibei.jpg')">
                  <view class="logo-image" >
                  </view>
                </view>
                <view class="tn-padding-right tn-color-black">
                  
                  <view class="tn-padding-left-sm tn-text-bold tn-margin-top-sm" style="max-width: 62vw;">
                    图鸟_北北
                  </view>
                  <view class="tn-flex tn-flex-col-center">
                    <view class="tn-bg-gray--light tn-margin-sm tn-padding-sm" style="max-width: 62vw;border-radius: 0 15rpx 15rpx 15rpx;">
                      <text class="">😬😋 今天给大家安排个任务</text>
                    </view>
                    <view class="">
                      <!-- 发送失败 -->
                      <!-- <text class="tn-icon-warning-fill tn-color-purplered tn-text-xxl"></text> -->
                    </view>
                  </view>
                  
                </view>
                
              </view>
            </view>
            <view class="justify-content-item">
              <!-- 预留空位 -->
            </view>
          </view>
        </view>
        
		
		<view class="tn-margin">
		  <view class="tn-flex tn-flex-row-between tn-flex-col-center">
		    <view class="justify-content-item">
		      <!-- 预留空位 -->
		    </view>
		    <view class="justify-content-item">
		      <view class="tn-flex tn-flex-col-top tn-flex-row-left">
		        
		        <view class="tn-padding-left tn-color-black">
		          <view class="tn-padding-right tn-text-bold tn-margin-top-sm tn-text-right" style="max-width: 62vw;">
		            图鸟_东东
		          </view>
		          <view class="tn-flex tn-flex-col-center">
					  <view class="tn-bg-gray--light tn-margin-sm tn-padding-sm" style="max-width: 62vw;border-radius: 0 15rpx 15rpx 15rpx;">
						<text class="">好的</text>
					  </view>
		            <view class="">
		              <!-- 发送失败 -->
		              <!-- <text class="tn-icon-warning-fill tn-color-purplered tn-text-xxl"></text> -->
		            </view>
		            <!-- <view class="tnchat4 tn-margin-sm" style="max-width: 62vw;">
		              <text class="">现在就去抓</text>
		            </view> -->
		          </view>
		        </view>
		        <view class="logo-pic tn-shadow-blur tn-margin-top-sm" style="background-image:url('https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg')">
		          <view class="logo-image" >
		          </view>
		        </view>
		        
		      </view>
		    </view>
		  </view>
		</view>

        
      </view>
      
    </view>
	<view class="reply-container van-hairline--top">
	  <tn-input  placeholder="说点什么...">
	  </tn-input>
	  <tn-button class="subBtn" backgroundColor="#01BEFF" fontColor="#fff">提交</tn-button>
	</view>
    
    <view class='tn-tabbar-height'></view>
    
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  export default {
    name: 'TemplateContent',
    mixins: [template_page_mixin],
    data(){
      return {}
    },
    methods: {
      
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
  .tn-tabbar-height {
  	min-height: 100rpx;
  	height: calc(120rpx + env(safe-area-inset-bottom) / 2);
  }
  
  /* 用户头像 start */
  .logo-image {
    width: 80rpx;
    height: 80rpx;
    position: relative;
  }
  
  .logo-pic {
    background-size: cover;
    background-repeat: no-repeat;
    // background-attachment:fixed;
    background-position: top;
    // box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    // overflow: hidden;
    // background-color: #FFFFFF;
  }
  
  .bg-img-cont {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 260rpx;
    width: 55vw;
    margin: 10rpx 0 0 0;
    border-radius: 12rpx;
  }
  
  /* 聊天*/
  .tnchat1{
    border-style:solid;
    border-width:71rpx;
    border-image-source: url(https://cdn.nlark.com/yuque/0/2022/png/280373/1656388937089-assets/web-upload/9d92dfd6-3486-4be9-a933-0ae160bdfc86.png);
    border-image-slice:71 71 71 71 fill;
    border-image-repeat:repeat;
    word-break: break-word;
    width: fit-content;  
  }
  .tnchat2{
    border-style:solid;
    border-width:26rpx 43rpx;
    border-image-source: url(https://cdn.nlark.com/yuque/0/2022/png/280373/1656471916508-assets/web-upload/e2305ffa-d1c7-435c-adae-2b3f0bc0da41.png);
    border-image-slice:26 43 26 43 fill;
    border-image-repeat:repeat;
    word-break: break-word;
    width: fit-content;  
  }
  
  .tnchat3{
    border-style:solid;
    border-width:26rpx 43rpx;
    border-image-source: url(https://cdn.nlark.com/yuque/0/2022/png/280373/1656562395500-assets/web-upload/2662c10c-061b-403d-9289-1165d9ee9e7b.png);
    border-image-slice:26 43 26 43 fill;
    border-image-repeat:repeat;
    word-break: break-word;
    width: fit-content;  
  }
  
  .tnchat4{
    border-style:solid;
    border-width:26rpx 43rpx;
    border-image-source: url(https://cdn.nlark.com/yuque/0/2022/png/280373/1656562336904-assets/web-upload/ad050d7f-3bdd-4de5-9e67-500f778b20e4.png);
    border-image-slice:26 43 26 43 fill;
    border-image-repeat:repeat;
    word-break: break-word;
    width: fit-content;  
  }
  
  
  .tnchat5{
    border-style:solid;
    border-width:26rpx 43rpx;
    border-image-source: url(https://cdn.nlark.com/yuque/0/2022/png/280373/1656562607434-assets/web-upload/cf008270-2a2c-4fac-82b1-b558d8a92230.png);
    border-image-slice:26 43 26 43 fill;
    border-image-repeat:repeat;
    word-break: break-word;
    width: fit-content;  
  }
  
  .tnchat6{
    border-style:solid;
    border-width:26rpx 43rpx;
    border-image-source: url(https://cdn.nlark.com/yuque/0/2022/png/280373/1656598070402-assets/web-upload/e123a1e3-6235-4d39-81d5-33d221d7a960.png);
    border-image-slice:26 43 26 43 fill;
    border-image-repeat:repeat;
    word-break: break-word;
    width: fit-content;  
  }
  
  .tnchat7{
    border-style:solid;
    border-width:26rpx 43rpx;
    border-image-source: url(https://cdn.nlark.com/yuque/0/2022/png/280373/1656602660855-assets/web-upload/9c698bba-af80-47bf-9ee4-3a78e0288fc4.png);
    border-image-slice:26 43 26 43 fill;
    border-image-repeat:repeat;
    word-break: break-word;
    width: fit-content;  
  }
.reply-container {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 44px;
  width: 100%;
  background: #f5f5f5;
  z-index: 9999;
}
.subBtn {
	position: absolute;
	right: 0;
	top: 0;
	height: 100% !important;
	box-sizing: border-box;
}
  
</style>

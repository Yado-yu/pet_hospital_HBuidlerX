<template>
  <view class="template-king tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar>

    <!-- 顶部 -->
    <view>
      <view class="tn-strip-bottom">
        <view class="slideshow">
        <view class="slideshow-image" :style="{ 'background-image': 'url(' + currentDoctor.doctor_pic + ')' }">
        </view>
          <!-- <view class="slideshow-image" style="background-image: url('https://cdn.nlark.com/yuque/0/2021/jpeg/280373/1629377642486-assets/web-upload/4cb7d03d-4873-433e-9a9c-774ffdc490d8.jpeg')">
          </view>
          <view class="slideshow-image" style="background-image: url('https://cdn.nlark.com/yuque/0/2021/jpeg/280373/1629377643739-assets/web-upload/5f08a35e-241e-4825-8a7b-f9c7db14a7ed.jpeg')">
          </view>
          <view class="slideshow-image" style="background-image: url('https://cdn.nlark.com/yuque/0/2021/jpeg/280373/1629377641839-assets/web-upload/8a247704-9256-4c88-836a-90fee5aee611.jpeg')">
          </view> -->
        </view>
        <view class="beibei">
          <!-- <view class="beibei2" style="background-image: url('https://cdn.nlark.com/yuque/0/2021/jpeg/280373/1629377641839-assets/web-upload/8a247704-9256-4c88-836a-90fee5aee611.jpeg')"></view> -->
        </view>
        <view class='tn-margin tn-padding-top-sm'>
          <view class="tn-text-bold">
            <text class='tn-text-xxl tn-padding-right'>{{currentDoctor.doctor_name}}</text>
            <text class='tn-text-lg tn-color-gray'>{{currentDoctor.jobTitle}}</text>
          </view>
          <view class="tn-margin-top-lg">
            <text class="tn-text-lg">微信：{{currentDoctor.weChat}}</text>
          </view>
          <view class="tn-margin-top-xs">
            <text class="tn-text-lg">电话：{{currentDoctor.phone}}</text>
          </view>
        </view>
      </view>
	  
      <view class="king-list tn-margin-top-sm">
		  
		  <view class="king-icon">
			<text class='tn-icon-company tn-color-white tn-text-lg tn-bg-blue tn-round tn-padding-xs'></text>
			<text class='tn-text-xl tn-margin-left'>擅长领域</text>
		  </view>
		  <view class='king-item tn-color-red tn-icon-circle-fill'>
			<view>
			<!-- <view class="resume tn-text-lg">
			  <view class="">2014-09 ~ 2018-06</view>
			  <view class=''>软件开发</view>
			</view>
			<view class="resume2">
			  <text>广州大学华软软件学院</text>
			</view> -->
			<view class="resume2">
			  <text>{{currentDoctor.skilled}}</text>
			</view>
			</view>
		  </view>
		  
        <view class="king-icon">
          <text class='tn-icon-creative tn-color-white tn-text-lg tn-bg-blue tn-round tn-padding-xs'></text>
          <text class='tn-text-xl tn-margin-left'>医生简介</text>
        </view>
        <view class='king-item tn-color-red tn-icon-circle-fill'>
          <view class="resume2">
            <text class="">
              {{currentDoctor.profile}}
            </text>
          </view>
        </view>
		
        <view class="king-icon">
          <text class='tn-icon-tag tn-color-white tn-text-lg tn-bg-blue tn-round tn-padding-xs'></text>
          <text class='tn-text-xl tn-margin-left'>个性标签</text>
        </view>
        <view class='king-item tn-color-red tn-icon-circle-fill'>
          <view class="resume">
            <view class="tn-tag-content tn-text-justify">
              <view v-for="(item, index) in currentDoctor.label" :key="index" class="tn-tag-content__item tn-margin-right tn-round tn-text-sm tn-text-bold" :class="[`tn-bg-${item.color}--light tn-color-${item.color}`]">
                <text class="tn-tag-content__item--prefix">#</text> {{ item.title }}
              </view>
            </view>
          </view>
        </view>
      </view>
	  <view class="btnList" v-if="isLogin">
		  <tn-button class="btn" backgroundColor="#1d76f9" fontColor="#fff" @click="show = true">预约医生</tn-button>
		  <tn-button  class="btn" backgroundColor="#1d76f9":plain="true">镂空按钮</tn-button>
	  </view>
      <view class="tn-margin-bottom">
        <view class="see">      
          <view class="justify-content-item tn-flex tn-flex-col-center">
            <view style="margin-right: 10rpx;margin-left: 30rpx;">
              <tn-avatar-group :lists="groupList" size="sm"></tn-avatar-group>
            </view>
          </view>
          <view class="tn-margin-right">
            <text class='tn-color-grey tn-text-df tn-margin-right-sm'>{{currentDoctor.fans}} 关注 </text>
            <text class='tn-color-grey tn-text-df'> {{currentDoctor.askNum}} 问诊</text>
          </view>   
        </view>
      </view>
      <!-- <view class="action cf" bindtap="showModal" data-target="bottomModal">
        <image src='/static/images/admin.jpg' class='edit' mode='aspectFit'></image>
      </view> -->
      <!-- <button class='' open-type="contact">
        <image src='/static/images/admin.jpg' class='share-img png round shadow-lg bg-white' mode='aspectFit'>
        </image>
      </button> -->
	  <tn-popup v-model="show" mode="bottom" length="40%">
		  <view class="titleYuyue">
			预约{{currentDoctor.doctor_name}}医生
		  </view>
	    <view class="pickPet">
			<tn-button backgroundColor="#006ef2" fontColor="#fff" width="300rpx" class="petBtn"
				@click="selectShow = true">{{ pickPet.label || '点击选择宠物'}}</tn-button>
			<tn-select v-model="selectShow" mode="single" :list="petOptions" @confirm="confirm"></tn-select>
			
			<tn-button backgroundColor="#006ef2" fontColor="#fff" class="timeBtn" width="300rpx"
				@click="timeShow = true">{{ timeStr || '点击选择时间'}}</tn-button>
			<tn-picker mode="time" v-model="timeShow" @confirm="timeConfirm"></tn-picker>
		</view>
		<tn-button backgroundColor="#006ef2" fontColor="#fff" @click="submit"
			style="margin-left: 50rpx;">提交预约单</tn-button>
			<tn-tips ref="tips" position="center"></tn-tips>
	  </tn-popup>
    </view>



  </view>

</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  import { mapState } from 'vuex'
  import { getDoctorListAPI } from '@/api/appointment.js'
  
  export default {
    name: 'TemplateKing',
    mixins: [template_page_mixin],
    data(){
      return {
		show: false,
		selectShow: false,
		timeShow: false,
		timeStr: '',
		pickPet: {},
		appointmentName: '',
		type: 'select',
        groupList: [
          {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
          {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
          {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
          {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
          {src: 'https://tnuiimage.tnkjapp.com/blogger/blogger_beibei.jpg'},
        ],
		petOptions: []
      }
    },
	onReady() {
		this.petOptions = this.petList.map(({ pet_id, pet_name, ...rest }) => ({
		  value: pet_id,
		  label: pet_name,
		  ...rest,
		}))
	},
    methods: {
		tn(e) {
			uni.navigateTo({
				url: e,
			});
		},
		confirm(e) {
			const [ obj ] = e
			this.pickPet = obj
			this.appointmentName = `${this.pickPet.label}的预约单`
		},
		timeConfirm(e) {
			const { year, month, day } = e
			this.timeStr = `${year}-${month}-${day}`
		},
		async submit() {
			if(!this.pickPet.label) {
				this.$refs.tips.show({
				  msg: '请选择你的爱宠',
				  backgroundColor: '#ffb13b',
				  fontColor: '#FFFFFF',
				  duration: 1500
				})
			} else if(!this.timeStr) {
				this.$refs.tips.show({
				  msg: '请选择预约的时间',
				  backgroundColor: '#ffb13b',
				  fontColor: '#FFFFFF',
				  duration: 1500
				})
			} else {
				const token = uni.getStorageSync('userToken')
				const { id } = uni.getStorageSync('userInfo')
				// console.log(this.appointmentName, this.timeStr, id, this.currentDoctor.doctor_id, token)
				try{
					const res = await getDoctorListAPI(this.appointmentName, this.timeStr, id, this.currentDoctor.doctor_id, token)
					console.log(res)
					if(res.status === 200) {
						if(res.data.status === 0) {
							this.$refs.tips.show({
							  msg: '预约成功！即将跳转',
							  backgroundColor: '#13c145',
							  fontColor: '#FFFFFF',
							  duration: 1500
							})
						}
						setTimeout(()=>{
							this.tn('/pages/index')
						}, 1500)
					}
				}catch(e){
					//TODO handle the exception
					console.log(e)
				}
			}
		},
		test() {
			console.log(123)
		}
    },
	computed: {
		...mapState('doctorAbout', ['currentDoctor']),
		...mapState('userAbout', ['isLogin']),
		...mapState('petAbout', ['petList'])
	},
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
  
  /* 主图固定 */
  .beibei{
      width:100%;
      height:1000upx;
  }
  .beibei2{
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 100%;
      width: 100%;
      position: relative;
      background-position: center center;
      background-size: cover;
  }
  /* 相册 */
  .slideshow {
    top: 0;
    position: absolute;
    width: 100vw;
    height: 1000upx;
    overflow: hidden;
  }

  .slideshow-image {
    position: absolute;
    width: 100%;
    height: 100%;
    background: no-repeat 50% 50%;
    background-size: cover;
    -webkit-animation-name: kenburns;
    animation-name: kenburns;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-duration: 16s;
    animation-duration: 16s;
    opacity: 1;
    transform: scale(1.2);
  }

  .slideshow-image:nth-child(1) {
    -webkit-animation-name: kenburns-1;
    animation-name: kenburns-1;
    z-index: 3;
  }

  .slideshow-image:nth-child(2) {
    -webkit-animation-name: kenburns-2;
    animation-name: kenburns-2;
    z-index: 2;
  }

  .slideshow-image:nth-child(3) {
    -webkit-animation-name: kenburns-3;
    animation-name: kenburns-3;
    z-index: 1;
  }

  .slideshow-image:nth-child(4) {
    -webkit-animation-name: kenburns-4;
    animation-name: kenburns-4;
    z-index: 0;
  }

  @-webkit-keyframes kenburns-1 {
    0% {
      opacity: 1;
      transform: scale(1.2);
    }

    1.5625% {
      opacity: 1;
    }

    23.4375% {
      opacity: 1;
    }

    26.5625% {
      opacity: 0;
      transform: scale(1);
    }

    100% {
      opacity: 0;
      transform: scale(1.2);
    }

    98.4375% {
      opacity: 0;
      transform: scale(1.2117647059);
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes kenburns-1 {
    0% {
      opacity: 1;
      transform: scale(1.2);
    }

    1.5625% {
      opacity: 1;
    }

    23.4375% {
      opacity: 1;
    }

    26.5625% {
      opacity: 0;
      transform: scale(1);
    }

    100% {
      opacity: 0;
      transform: scale(1.2);
    }

    98.4375% {
      opacity: 0;
      transform: scale(1.2117647059);
    }

    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes kenburns-2 {
    23.4375% {
      opacity: 1;
      transform: scale(1.2);
    }

    26.5625% {
      opacity: 1;
    }

    48.4375% {
      opacity: 1;
    }

    51.5625% {
      opacity: 0;
      transform: scale(1);
    }

    100% {
      opacity: 0;
      transform: scale(1.2);
    }
  }

  @keyframes kenburns-2 {
    23.4375% {
      opacity: 1;
      transform: scale(1.2);
    }

    26.5625% {
      opacity: 1;
    }

    48.4375% {
      opacity: 1;
    }

    51.5625% {
      opacity: 0;
      transform: scale(1);
    }

    100% {
      opacity: 0;
      transform: scale(1.2);
    }
  }

  @-webkit-keyframes kenburns-3 {
    48.4375% {
      opacity: 1;
      transform: scale(1.2);
    }

    51.5625% {
      opacity: 1;
    }

    73.4375% {
      opacity: 1;
    }

    76.5625% {
      opacity: 0;
      transform: scale(1);
    }

    100% {
      opacity: 0;
      transform: scale(1.2);
    }
  }

  @keyframes kenburns-3 {
    48.4375% {
      opacity: 1;
      transform: scale(1.2);
    }

    51.5625% {
      opacity: 1;
    }

    73.4375% {
      opacity: 1;
    }

    76.5625% {
      opacity: 0;
      transform: scale(1);
    }

    100% {
      opacity: 0;
      transform: scale(1.2);
    }
  }

  @-webkit-keyframes kenburns-4 {
    73.4375% {
      opacity: 1;
      transform: scale(1.2);
    }

    76.5625% {
      opacity: 1;
    }

    98.4375% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: scale(1);
    }
  }

  @keyframes kenburns-4 {
    73.4375% {
      opacity: 1;
      transform: scale(1.2);
    }

    76.5625% {
      opacity: 1;
    }

    98.4375% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: scale(1);
    }
  }


  /* 简历内容 */
  .king-list {
    display: block;
    background-color: #ffffff;
  }
  
  .king-list .king-icon {
    width: 100%;
    text-align: left;
    padding: 20rpx 0 20rpx 37rpx;
    font-size: 26rpx;
    color: #888;
    display: block;
  }
  
  .king-list>.king-item {
    padding: 30rpx 30rpx 30rpx 120rpx;
    position: relative;
    display: block;
    z-index: 0;
  }

  .king-list>.king-item::after {
    content: "";
    display: block;
    position: absolute;
    width: 1rpx;
    background-color: #E6E6E6;
    left: 60rpx;
    height: 100%;
    top: 0;
    z-index: 8;
  }

  .king-list>.king-item::before {
    display: block;
    position: absolute;
    top: 36rpx;
    z-index: 9;
    background-color: #ffffff;
    width: 50rpx;
    height: 50rpx;
    text-align: center;
    border: none;
    line-height: 50rpx;
    left: 36rpx;
  }


  /* 名片微调 */
  .img-solid {
    border: 2rpx solid #eee;
  }

  .share-img {
    position: fixed;
    /* padding: 10rpx; */
    width: 100rpx;
    height: 100rpx;
    /* top: 680rpx; */
    bottom: 200rpx;
    right: 20rpx;
    z-index: 1024;
    opacity: 0.8;
    box-shadow: 0rpx 8rpx 30rpx 0rpx rgba(0, 0, 0, 0.3);
    border: none;
    border: 6rpx solid rgba(255, 255, 255, 0);
  }

  .resume {
    display: flex;
    justify-content: space-between;
    padding-top: 10rpx;
    border-radius: 6rpx;
    color: #666;
    line-height: 1.6;
  }

  .resume+.resume {
    margin-top: 20rpx;
  }

  .resume2 {
    padding-top: 10rpx;
    border-radius: 6rpx;
    display: block;
    color: #666;
    line-height: 1.6;
    text-align: justify;
  }
  
  /* 间隔线 start*/
  .tn-strip-bottom {
   width: 100%;
   border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
  }
   /* 间隔线 end*/


  .bg-img-cont {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 350rpx;
    margin: 20rpx 0;
    border-radius: 8rpx;
  }



  // .button-no {
  //   border: none;
  //   width: 100%;
  //   height: 100%;
  //   background-color: rgba(0, 0, 0, 0);
  // }
  
  
  /* 标签内容 start*/
  .tn-tag-content {
    &__item {
      display: inline-block;
      line-height: 45rpx;
      padding: 10rpx 30rpx;
      margin: 0rpx 20rpx 25rpx 0rpx;
      
      &--prefix {
        padding-right: 10rpx;
      }  
    }
  }
  /* 标签内容 end*/
  
  .see {
    display: flex;
    justify-content: space-between;
    padding-top: 10rpx;
    border-radius: 6rpx;
    color: #666;
    line-height: 1.6;
  }
  .btnList {
	  margin-top: 15rpx;
	  // background-color: pink;
	  display: flex;
  }
  .btn {
	  margin: 5px;
	  flex: 1
  }
  .pickPet {
	  height: 300rpx;
	  // background-color: pink;
	  display: flex;
	  flex-direction: column;
	  margin: 50rpx;
  }
  .titleYuyue {
	  margin: 50rpx;
	  padding-left: 20rpx;
	  font-size: 45rpx;
  }
  .petBtn {
	  flex: 1;
  }
  .timeBtn {
	  flex: 1;
	  margin-top: 50rpx;
  }
</style>

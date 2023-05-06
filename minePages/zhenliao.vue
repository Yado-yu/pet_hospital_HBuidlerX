<template>
	<view class="mainC">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
		  <view slot="back" class='tn-custom-nav-bar__back'
			@click="goBack">
			<text class='icon tn-icon-left'></text>
			<text class='icon tn-icon-home-capsule-fill'></text>
		  </view>
		</tn-nav-bar>
		
		<view class="title">
			输入宠物症状
		</view>
		<tn-input class="btn" v-model="symptoms" :border="true" inputAlign="center" />
		<view class="ques">
		    <tn-button backgroundColor="#01BEFF" fontColor="#fff" @click="btnHandle">立即智能诊疗</tn-button>
		</view>
		
		<view class="bingT" v-if="quanShow">
			您的宠物可能有以下疾病
		</view>
		<view class="quanquan">
			<tn-circle-progress v-for="(item, index) in showList" :key="index"
				:percent="item.p" activeColor="#01BEFF" :showPercent="true" style="flex: 1;"></tn-circle-progress>
		</view>
		
		<view class="bingName" v-if="quanShow">
			<view class="bingL" v-for="(item, index) in showList" :key="index">
				{{item.category}}
			</view>
		</view>
		
		<view class="bottom">
			1
		</view>
		    <tn-toast ref="toast"></tn-toast>
			<tn-tips ref="tips" position="center"></tn-tips>
	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import { zhenliaoAPI } from '@/api/doctor.js'
	
	export default {
		mixins: [template_page_mixin],
		data() {
		  return {
			tips: '',
			seconds: 10,
			symptoms: '',
			bingList: [],
			showList: [],
			quanShow: false
		  }
		},
		methods: {
			btnHandle() {
				if(!this.symptoms) {
					this.$refs.tips.show({
					  msg: '请输入宠物症状',
					  backgroundColor: '#ffb13b',
					  fontColor: '#FFFFFF',
					  duration: 1500
					})
				} else {
					this.$refs.toast.show({
					  title: '智能问诊ing',
					  content: '即将诊断你的宠物',
					  icon: 'success',
					  image: '',
					  duration: 2000
					})
					setTimeout(async ()=>{
						const res = await zhenliaoAPI(this.symptoms)
						if(res.status === 200) {
							if(res.data.status === 0) {
								this.bingList = res.data.data.gailv
								this.showList = this.bingList.slice(0, 3)
								let randomNum0 = Math.floor(Math.random() * (93 - 80 + 1) + 80) // [80-93]
								let randomNum2 = Math.floor(Math.random() * 3) + 1 // [0-3]
								let randomNum1 = 100 - randomNum0 - randomNum2 - 1
								this.showList[0].p = randomNum0
								this.showList[1].p = randomNum1
								this.showList[2].p = randomNum2
								this.quanShow = true
								console.log(this.showList)
							}
						}
					}, 1950)
				}
			}
		}
	}
</script>

<style>
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
	
	.form {
		/* background-color: pink; */
		margin-top: 100rpx;
		margin-left: 3%;
		width: 94%;
	}
	.mainC {
		width: 100%;
		height: 100%;
		background: url(https://img.ixintu.com/download/jpg/202009/56afc838624206bc59bd78de4dc3af54_800_600.jpg!con);
	}
	.title {
		font-size: 50rpx;
		font-weight: 700;
		color: #00b8fb;
		padding-top: 100rpx;
		margin-left: 200rpx;
	}
	.btn {
		margin-top: 80rpx;
	}
	.ques {
		margin-top: 100rpx;
		margin-left: 250rpx;
	}
	.bingT {
		font-size: 35rpx;
		font-weight: 700;
		color: #00b8fb;
		margin-top: 140rpx;
		margin-left: 30rpx;
	}
	.quanquan {
		display: flex;
		margin-top: 80rpx;
	}
	.bingName {
		display: flex;
		margin-top: 80rpx;
	}
	.bingL {
		flex: 1;
		color: #00b8fb;
		padding-left: 70rpx;
	}
	.bottom {
		margin-top: 1200rpx;
	}
</style>
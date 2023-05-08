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
		<tn-button backgroundColor="#006ef2" fontColor="#fff" width="300rpx" class="petBtn"
			@click="selectShow = true">{{ pickPet.label || '点击选择宠物'}}</tn-button>
		<tn-select v-model="selectShow" mode="single" :list="petOptions" @confirm="confirm"></tn-select>
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
		
		<view class="tabelTreat">
			<view class="titleHis">
				诊疗历史
			</view>
			<view class="tabelTitle">
				<view class="titleItem1">
					宠物
				</view>
				<view class="titleItem1">
					历史症状
				</view>
				<view class="titleItem1">
					智能诊断
				</view>
			</view>
			<view class="tabelTitle" v-for="item in treatmentList" :key="item.id">
				<view class="titleItem">
					{{item.pet_name}}
				</view>
				<view class="titleItem">
					{{item.symptom}}
				</view>
				<view class="titleItem">
					{{item.result}}
				</view>
				<view class="de" @click="de(item.id)">
					删除
				</view>
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
	import { getTreatmentListAPI, addTreatmentAPI, deleteTreatmentAPI } from '@/api/treat.js'
	import { mapState } from 'vuex'
	
	export default {
		mixins: [template_page_mixin],
		data() {
		  return {
			tips: '',
			seconds: 10,
			symptoms: '',
			result: '',
			bingList: [],
			showList: [],
			quanShow: false,
			pickPet: [],
			selectShow: false,
			petOptions: [],
			treatmentList: []
		  }
		},
		computed: {
			...mapState('petAbout', ['petList'])
		},
		onReady() {
			this.petOptions = this.petList.map(({ pet_id, pet_name, ...rest }) => ({
			  value: pet_id,
			  label: pet_name,
			  ...rest,
			}))
			this.getTreatList()
		},
		methods: {
			async getTreatList() {
				const { id } = uni.getStorageSync('userInfo')
				try{
					const res = await getTreatmentListAPI(id)
					if(res.data.status === 0) {
						this.treatmentList = res.data.data
					}
				}catch(e){
					//TODO handle the exception
				}
			},
			confirm(e) {
				const [ obj ] = e
				this.pickPet = obj
				// this.appointmentName = `${this.pickPet.label}的预约单`
			},
			btnHandle() {
				if(!this.symptoms || !this.pickPet.label) {
					this.$refs.tips.show({
					  msg: '请输入宠物症状或者选择宠物',
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
					  duration: 1500
					})
					const { id } = uni.getStorageSync('userInfo')
					setTimeout(async ()=>{
						const res = await zhenliaoAPI(this.symptoms)
						if(res.status === 200) {
							if(res.data.status === 0) {
								this.bingList = res.data.data.gailv
								this.showList = this.bingList.slice(0, 3)
								this.result = this.showList[0].category
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
						const resAdd = await addTreatmentAPI(id, this.pickPet.label, this.symptoms, this.result)
						this.getTreatList()
					}, 1950)
				}
			},
			async de(id) {
				try{
					const res = await deleteTreatmentAPI(id)
					this.getTreatList()
					this.$refs.tips.show({
					  msg: '删除成功',
					  backgroundColor: '#ff504f',
					  fontColor: '#FFFFFF',
					  duration: 1500
					})
				}catch(e){
					//TODO handle the exception
				}
				console.log(123)
			}
		}
	}
</script>

<style>
	/* #ifdef H5 */
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
  /* #endif */
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
		margin-top: 80rpx;
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
	.petBtn {
		margin-top: 20rpx;
		margin-left: 210rpx;
	}
	.tabelTreat {
		/* background-color: pink; */
		margin-top: 100rpx;
	}
	.tabelTitle {
		display: flex;
		margin-bottom: 20rpx;
	}
	.titleItem1 {
		flex: 1;
		color: #0067ea;
		padding-left: 20rpx;
	}
	.titleItem {
		flex: 1;
		color: #00b8fb;
		padding-left: 20rpx;
	}
	.titleHis {
		color: #4d00ff;
		margin-left: 20rpx;
		margin-bottom: 20rpx;
		font-weight: 700;
		font-size: 35rpx;
	}
	.de {
		color: red;
		right: 5rpx;
		position: absolute;
	}
</style>
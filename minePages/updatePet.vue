<template>
	<view class="">
		<!-- 顶部自定义导航 -->
		<tn-nav-bar fixed alpha customBack>
		  <view slot="back" class='tn-custom-nav-bar__back'
			@click="goBack">
			<text class='icon tn-icon-left'></text>
			<text class='icon tn-icon-home-capsule-fill'></text>
		  </view>
		</tn-nav-bar>
		
		<tn-form class="form" :model="form" ref="addPetForm">
		    <tn-form-item label="姓名" prop="name">
		      <tn-input v-model="form.name" />
		    </tn-form-item>
		    <tn-form-item label="性别" prop="sex">
			  <tn-radio-group v-model="form.sex">
				<tn-radio v-for="(item, index) in radioList" :key="index" :name="item.name" :disabled="item.disabled">
				  {{ item.name }}
				</tn-radio>
			  </tn-radio-group>
			</tn-form-item>
			<tn-form-item label="种类" prop="species">
			  <tn-input v-model="form.species" />
			</tn-form-item>
			<tn-form-item label="年龄" prop="age">
			  <tn-input v-model="form.age" />
			</tn-form-item>
			<tn-form-item label="体重" prop="weight">
			  <tn-input v-model="form.weight" /> kg
			</tn-form-item>
			<tn-form-item label="绝育状态" prop="jueyue">
			  <tn-radio-group v-model="form.jueyue">
				<tn-radio v-for="(item, index) in jueyueList" :key="index" :name="item.name" :disabled="item.disabled">
				  {{ item.name }}
				</tn-radio>
			  </tn-radio-group>
			</tn-form-item>
		  </tn-form>
		  <tn-button backgroundColor="#01BEFF" fontColor="#ffffff" 
			 margin="40rpx"	width="650rpx" @click="submit">提交</tn-button>
		<tn-toast ref="toast"></tn-toast>
	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	import { updatePetAPI } from '@/api/pet.js'
	import { mapState } from 'vuex'
	
	export default {
		mixins: [template_page_mixin],
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
		  this.$refs.addPetForm.setRules(this.rules);
		  this.form = {
			  name: this.currentPet?.pet_name || '',
			  age: this.currentPet?.age || '',
			  sex: this.currentPet?.pet_gender || '',
			  species: this.currentPet?.species || '',
			  weight: this.currentPet?.weight || '',
			  jueyue: this.currentPet?.isSterilization || ''
			};
		},
		data() {
		  return {
			form: {
			  name: '',
			  age: '',
			  sex: '',
			  species: '',
			  weight: '',
			  jueyue: ''
			},
			radioList: [{
				name: '弟弟',
				disabled: false
			  },
			  {
				name: '妹妹',
				disabled: false
			  }
			],
			jueyueList: [{
				name: '已绝育',
				disabled: false
			  },
			  {
				name: '未绝育',
				disabled: false
			  }
			],
			rules: {
			  name: [{
				required: true,
				message: '请输入姓名',
				// 可以单个或者同时写两个触发验证方式 
				trigger: ['change', 'blur'],
			  }],
			 //  age: [{
				// min: 1,
				// required: false,
				// message: '请选择年龄',
				// trigger: ['change', 'blur'],
			 //  }],
			  sex: [{
				  required: true,
				  message: '请选择性别',
			  }],
			  species: [{
				required: true,
				message: '请选择种类',
				// 可以单个或者同时写两个触发验证方式 
				trigger: ['change', 'blur'],
			  }],
			 //  weight: [{
				// required: true,
				// message: '请输入体重',
				// // 可以单个或者同时写两个触发验证方式 
				// trigger: ['change', 'blur'],
			 //  }],
			}
		  }
		},
		computed: {
			...mapState('petAbout', ['currentPet'])
		},
		methods: {
			submit() {
				this.$refs.addPetForm.validate(async (valid) => {
				  if (valid) {
					const token = uni.getStorageSync('userToken')
					try{
						const res = await updatePetAPI(this.form, token, this.currentPet.pet_id)
						if(res.status === 200) {
							if(res.data.status === 0) {
							this.$refs.toast.show({
							  title: '修改宠物信息成功',
							  content: '即将跳转到首页',
							  icon: 'success',
							  image: '',
							  duration: 1500
							})
							setTimeout(()=>{
								uni.reLaunch({
								  url: '/pages/index'
								})
							}, 1500)
							}
						}
					}catch(e){
						//TODO handle the exception
						console.log(e)
					}
				  } else {
				  }
				});
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
</style>
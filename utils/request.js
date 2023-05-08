// // 基于 axios 封装的请求模块
import ajax from 'axios'
// 新建一个新的axios实例
const axios = ajax.create({
 baseURL: 'http://127.0.0.1:3007' // 基地址
})

// 封装的请求模块
// const baseURL = 'http://127.0.0.1:3007'; // 基地址

// 导出自定义函数, 参数对象解构赋值
export default ({ url, method = 'GET', params, data, headers }) => {
 return axios({ 
   url: url,
   method: method,
   params: params,
   data: data,
   headers: headers
 })
}

// import { uni } from 'uni-app';

// function request({ url, method = 'GET', params, data, headers }) {
//   return new Promise((resolve, reject) => {
//     uni.request({
//       url: 'http://127.0.0.1:3007' + url,
//       method: method,
//       data: method === 'GET' ? params : data,
//       header: headers,
//       success(res) {
//         resolve(res.data);
//       },
//       fail(err) {
//         reject(err);
//       },
//     });
//   });
// }

// export default request;


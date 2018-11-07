import axios from 'axios'
axios.defaults.withCredentials = true;// 设置携带cookie
// 响应头中间件
// axios.interceptors.response.use(function (response) {
//     // Do something with response data
//     console.log(response, 11111);
//     return response;
// }, function (error) {
//     // Do something with response error
//     return Promise.reject(error);
// });
const ajax = (options,all) => {
    let _react = options.react === undefined ? true : options.react
    
    options.params = options.params || {}
    
    options.params.__t = Date.now()
    
    return axios(options)
        .then(res => {
            if (res.data.msg === 'ok') {
                if (_react) console.log('数据获取成功')
            } else {
                if (_react) console.log('数据获取失败')
            }
        
            return all ? res : res.data.data          
        })
        .catch(err => {
            console.log('数据请求失败')
            return err      
        })
    
}

export default ajax
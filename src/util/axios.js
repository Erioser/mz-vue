import axios from 'axios'

const ajax = (options) => {
    let _react = options.react === undefined ? true : options.react
    return axios(options)
        .then(res => {
            if (res.data.msg === 'ok') {
                if (_react) console.log('数据获取成功')
            } else {
                if (_react) console.log('数据获取失败')
            }
            return res.data.data          
        })
        .catch(err => {
            return err
            console.log('数据请求失败')
            
        })
    
}

export default ajax
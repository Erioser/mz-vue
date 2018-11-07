
import ajax from '@util/axios'

const none = () => {}

const authLogin = () => {
    // 在这里已经不能调用这个接口，因为我们的cookie模拟不了
    let user_info = JSON.parse(localStorage.getItem('userInfo') || '{}')
    // let result = await ajax({
    //     url: '/mz/v4/api/me',
    //     params: { __t: Date.now() }
    // })
    return user_info
}

export default {
    authLogin
}
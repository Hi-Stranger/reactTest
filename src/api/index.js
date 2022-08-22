import axios from 'axios';
//增加默认请求路径
axios.defaults.baseURL = 'http://cm.mycode5.com/api/';  //这里要做更换
axios.interceptors.response.use((res) => {
    console.log(res);
    if (res.data) return res.data;
    return res; //在这里统一拦截结果
});
export let signlnApi = (params) => {  //登录
    return axios.post('login', params)
}
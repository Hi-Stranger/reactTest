import React from 'react';  //导入规范
// import ReactDOM from 'react-dom';
// ReactDOM.render(
//     <SingIn></SingIn>
//     , document.querySelector('#root'))
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/es/locale/zh_CN';
// import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.min.css'; // or 'antd/dist/antd.less'  官网是antd/dist/antd.css  但是会报错
import './static/css/index.less'
import {createRoot} from 'react-dom/client';    //1.8以后用这个
// moment.locale('zh-cn');
// import './static/encryption'    //引入加密方法
import SingIn from './base/Register'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<SingIn tab="home"/>);


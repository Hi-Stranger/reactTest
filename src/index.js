import React from 'react';  //导入规范
// import ReactDOM from 'react-dom';
// ReactDOM.render(
//     <SingIn></SingIn>
//     , document.querySelector('#root'))


import {createRoot} from 'react-dom/client';    //1.8以后用这个
import SingIn from './base/SignIn'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<SingIn tab="home"/>);


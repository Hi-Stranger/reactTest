import React, {Component} from 'react';
import {signlnApi} from '../../api/index'
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input} from 'antd';
import './index.less'

class Index extends Component {
    render() {
        const onFinish = (values) => {
            // var code = kbt.encrypt('我爱北京天安门');
            console.log('Received values of form: ', values);
            // signlnApi({username: values['username'], password: values['password']}).then(res => {
            //     console.log(res);
            // })
            if (values['remember']) { //如果记住了密码
                localStorage['accountNumber'] = values['username'] //缓存账号
                localStorage['accountPassword'] = values['password'] //缓存密码
            }
        };
        return (
            <div className='signin main'>
                <div className='logoBox'>
                    <img className='full-height full-width' src={require('../../static/img/ClounM_LOGO.gif')}
                         alt='logoimg'/>
                </div>
                <div className='formBox'>
                    <Form
                        name='form'
                        initialValues={{remember: true,}}
                        onFinish={onFinish}
                    >
                        <Form.Item name='username'
                                   rules={[{required: true, message: '请输入账号',},]}>
                            <Input prefix={<UserOutlined className='site-form-item-icon'/>} placeholder='请输入账号'/>
                        </Form.Item>
                        <Form.Item name='password' rules={[{required: true, message: '请输入密码',},]}>
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type='password'
                                placeholder='请输入密码'/>
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name='remember' valuePropName='checked' noStyle>
                                <Checkbox>记住密码</Checkbox>
                            </Form.Item>
                            <a className='login-form-forgot' href='www.baidu.com'>
                                忘记密码？
                            </a>
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit' className='login-form-button'>
                                登录
                            </Button>
                            <a href='www.baidu.com'>立即注册</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Index;
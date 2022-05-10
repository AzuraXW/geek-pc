import { Card, Form, Input, Button, Checkbox, message } from 'antd'
import useStore from '@/store'
import logo from '@/assets/logo.png'
import { useNavigate } from 'react-router-dom'
import './index.scss'

function Login () {
  const { loginStore } = useStore()
  const navigate = useNavigate()
  // 表单提交
  const onSubmit = async (values) => {
    try {
      await loginStore.login(values.mobile, values.password)
      message.success('登录成功')
      navigate('/')
    } catch (error) {
      message.error(error.response.data.message)
    }
  }
  return (
    <div className="login">
      <Card className="login-container">
        <div className="logo-img">
          <img src={logo} alt="logo" />
        </div>
        <div className="login-form">
          <Form
            onFinish={onSubmit}
          >
            <Form.Item
              name="mobile"
              rules={[
                {
                  pattern: /^1[3-9]\d{9}$/,
                  message: '手机号码格式不对',
                  validateTrigger: 'onBlur'
                },
                { required: true, message: '请输入手机号' }
              ]}
            >
              <Input size="large" placeholder="请输入手机号" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { len: 6, message: '验证码6个字符', validateTrigger: 'onBlur' },
                { required: true, message: '请输入验证码' }
              ]}
            >
              <Input.Password size="large" placeholder="请输入密码" />
            </Form.Item>
            <Form.Item>
              <Checkbox className="login-checkbox-label">
                我已阅读并同意「用户协议」和「隐私条款」
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </div>
  )
}

export default Login
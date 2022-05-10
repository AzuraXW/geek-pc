import { Layout, Menu, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import './index.scss'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const { Header, Sider, Content } = Layout
// 菜单配置项
const items = [
  { label: '数据概览', key: '/', icon: <HomeOutlined /> },
  { label: '内容管理', key: '/article', icon: <DiffOutlined /> },
  { label: '发布文章', key: '/publish', icon: <EditOutlined /> }
]


const GeekLayout = () => {
  const location = useLocation()
  const selectedKey = location.pathname
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">user.name</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={[selectedKey]}
            style={{ height: '100%', borderRight: 0 }}
            items={items}
          >
          </Menu>
        </Sider>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default GeekLayout
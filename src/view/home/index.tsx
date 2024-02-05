import './style/index.css';
import React from 'react';
import {Layout, Menu} from 'antd';
import {DashboardOutlined} from '@ant-design/icons';

const {Header, Sider, Content} = Layout;

// 路由
const Workspace = React.lazy(() => import('@/view/dashboard/workspace'));

// 菜单
const items: any = [
  {
    label: 'Dashboard',
    key: 'dashboard',
    icon: <DashboardOutlined />,
    children: [{label: '工作台', key: 'workspace'}]
  }
];
const App: React.FC = () => (
  <>
    <Layout className="container">
      <Header className="header">
        <div className="logo">AMIS Admin Pro</div>
      </Header>
      <Layout className="main">
        <Sider className="sider">
          <Menu style={{height: '100%'}} mode="inline" items={items}
                defaultOpenKeys={['dashboard']} defaultSelectedKeys={['workspace']} />
        </Sider>
        <Content className="content">
          <Workspace />
        </Content>
      </Layout>
    </Layout>
  </>
);

export default App;

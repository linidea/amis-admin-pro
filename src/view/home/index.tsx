import './style/index.css';
import React from 'react';
import {Layout, Menu} from 'antd';
import {GithubOutlined, CopyrightOutlined, DashboardOutlined} from '@ant-design/icons';

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
        <div className="navigate">
          <div className="account"><a href="https://github.com/0xduer" target="_blank"><GithubOutlined
            style={{fontSize: '16px', color: '#000', marginRight: '8px'}} />Lin Gui</a>
          </div>
        </div>
      </Header>
      <Layout className="main">
        <Sider className="sider" theme="light">
          <Menu mode="inline" items={items}
                defaultOpenKeys={['dashboard']} defaultSelectedKeys={['workspace']} />
        </Sider>
        <Content className="content">
          <Workspace />
          <div className="footer">AMIS Admin Pro <CopyrightOutlined /> Powered by Lin Gui</div>
        </Content>
      </Layout>
    </Layout>
  </>
);

export default App;

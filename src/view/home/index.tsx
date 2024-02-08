import './style/index.css';
import React, {useState} from 'react';
import {Button, Layout, Menu} from 'antd';
import {CopyrightOutlined, GithubOutlined} from '@ant-design/icons';

// 菜单配置项
import {MenuConfig} from '@/view/home/component/MenuConfig';

console.log(MenuConfig);

const {Header, Sider, Content} = Layout;

function setCurComp(key: string, list: any, call: Function) {
  for (let i = 0; i < list.length; i++) {
    if (key === list[i].key) {
      call(list[i].component);
      break;
    }
    Array.isArray(list[i].children) && setCurComp(key, list[i].children, call);
  }
}


export default function Home() {

  const [curComp, setComp] = useState(<></>);

  function handleMenuClick(item: any) {
    setCurComp(item.key, MenuConfig, setComp);
  }

  return (
    <Layout className="container">
      <Header className="header">
        <div className="logo">AMIS Admin Pro</div>
        <div className="navigate">
          <div>
            <Button type="link" style={{fontWeight: '600'}}>编辑器</Button>
          </div>
          <div className="account"><a href="https://github.com/0xduer" target="_blank"><GithubOutlined
            style={{fontSize: '16px', color: '#000', marginRight: '8px'}} />Lin Gui</a>
          </div>
        </div>
      </Header>
      <Layout className="main">
        <Sider className="sider" theme="light">
          <Menu mode="inline" items={MenuConfig} defaultSelectedKeys={['demo']} onClick={handleMenuClick} />
        </Sider>
        <Content className="content">
          {curComp}
          <div className="footer">AMIS Admin Pro <CopyrightOutlined /> Powered by Lin Gui</div>
        </Content>
      </Layout>
    </Layout>
  );
}

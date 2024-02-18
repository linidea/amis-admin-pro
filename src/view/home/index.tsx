import './style/index.css';
import React, {useEffect, useState} from 'react';
import {Layout, Menu} from 'antd';
import {CopyrightOutlined} from '@ant-design/icons';

// 组件
import Navigate from './component/Navigate';

// 菜单配置项
import {MENU_PROPS} from '@/view/home/lib/config';

const {Header, Sider, Content} = Layout;

// 设置当前组件
function setCurComp(key: string, list: any, call: Function) {
  for (let i = 0; i < list.length; i++) {
    if (key === list[i].key) {
      call(list[i].component);
      return;
    }
    Array.isArray(list[i].children) && setCurComp(key, list[i].children, call);
  }
}


export default function Home() {

  const [curComp, setComp] = useState(<></>);

  useEffect(() => {
    // 默认选中申请页
    handleMenuClick({key: 'test'});
  }, []); // 空数组表示只执行一次


  // 点击菜单
  function handleMenuClick(item: any) {
    setCurComp(item.key, MENU_PROPS, setComp);
  }


  return (
    <Layout className="container">
      <Header className="header">
        <div className="logo">AMIS Admin Pro</div>
        <Navigate />
      </Header>
      <Layout className="main">
        <Sider className="sider" theme="light">
          <Menu mode="inline" items={MENU_PROPS} defaultOpenKeys={['demo']} defaultSelectedKeys={['test']}
                onClick={handleMenuClick} />
        </Sider>
        <Content className="content">
          {curComp}
          <div className="footer">AMIS Admin Pro <CopyrightOutlined /> Powered by Lin Gui</div>
        </Content>
      </Layout>
    </Layout>
  );
}

import '../style/index.css';
import React from 'react';
import type {MenuProps} from 'antd';
import {Button, Dropdown} from 'antd';
import {CoffeeOutlined, GithubOutlined} from '@ant-design/icons';

const items: MenuProps['items'] = [
  {
    key: 'amis',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://aisuda.bce.baidu.com/amis/zh-CN/docs/index">
        百度 AMIS
      </a>
    )
  },
  {
    key: 'example',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://aisuda.bce.baidu.com/amis/examples/index">
        AMIS 示例
      </a>
    )
  },
  {
    key: 'antd',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://4x-ant-design.antgroup.com/components/overview-cn/">
        Ant Design V4
      </a>
    )
  }
];

export default function App() {
  return (
    <div className="navigate">
      <div>
        <Button type="link" style={{fontWeight: '600'}} target="_blank"
                href={`${window.location.origin}${window.location.pathname}#/editor`}>编辑器</Button>
      </div>
      <div>
        <Dropdown menu={{items}} placement="bottom" arrow>
          <Button type="link" icon=<CoffeeOutlined/> style={{fontWeight: '600', color: '#000'}}>
            文档
          </Button>
        </Dropdown>
        <Button type="link" icon=<GithubOutlined/> style={{fontWeight: '600', color: '#000'}}
                href="https://github.com/0xduer" target="_blank">
          0xduer
        </Button>
      </div>
    </div>
  );
}

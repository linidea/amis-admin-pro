import React from 'react';
import {DashboardOutlined, FormOutlined} from '@ant-design/icons';

import AMISRenderer from '@/component/AMISRenderer';
import Document from '@/view/workspace/document';

const MenuConfig = [
  {
    label: '本地示例',
    key: 'demo',
    icon: <FormOutlined />,
    component: <AMISRenderer />
  }, {
    label: '工作台',
    key: 'workspace',
    icon: <DashboardOutlined />,
    children: [
      {
        label: '文档',
        key: 'document',
        component: <Document />
      }
    ]
  }
];

function getCurrentMenu() {
  
}

export {MenuConfig};

import React from 'react';
import {DashboardOutlined, FormOutlined} from '@ant-design/icons';

// 本地示例
import Test from '@/view/demo/Test';
import Apply from '@/view/demo/Apply';
import Approval from '@/view/demo/Approval';
import Detail from '@/view/demo/Detail';

// 工作台
import Document from '@/view/workspace/document';

const MenuConfig = [
  {
    label: '本地示例',
    key: 'demo',
    icon: <FormOutlined />,
    children: [
      {
        label: '测试页',
        key: 'test',
        component: <Test />
      }, {
        label: '申请页',
        key: 'apply',
        component: <Apply />
      }, {
        label: '审批页',
        key: 'approval',
        component: <Approval />
      }, {
        label: '详情页',
        key: 'detail',
        component: <Detail />
      }
    ]
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

export {MenuConfig};

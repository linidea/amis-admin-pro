import React from 'react';
import {FormOutlined, NodeIndexOutlined} from '@ant-design/icons';

// 本地示例
import Test from '@/view/demo/Test';

// oa 流程
import Apply from '@/view/oa/Apply';
import Approval from '@/view/oa/Approval';
import Detail from '@/view/oa/Detail';

const MENU_PROPS = [
  {
    label: '本地示例',
    key: 'demo',
    icon: <FormOutlined />,
    children: [
      {
        label: '测试页',
        key: 'test',
        component: <Test />
      }
    ]
  },
  {
    label: 'OA 流程',
    key: 'oa',
    icon: <NodeIndexOutlined />,
    children: [
      {
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
  }
];

export {MENU_PROPS};

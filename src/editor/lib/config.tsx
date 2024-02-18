import React from 'react';
import {ApiOutlined, PartitionOutlined, SendOutlined} from '@ant-design/icons';

const DROPDOWN_BUTTON = [
  {
    key: 'config',
    icon: <ApiOutlined />,
    label: '配 置'
  },
  {
    key: 'bind',
    icon: <PartitionOutlined />,
    label: '绑 定'
  },
  {
    key: 'publish',
    icon: <SendOutlined />,
    label: '发 布'
  }
];

const DROPDOWN_BUTTON_PROPS = {
  items: DROPDOWN_BUTTON,
  onClick: (item: any) => {
    console.log(item);
  }
};

export {DROPDOWN_BUTTON_PROPS};

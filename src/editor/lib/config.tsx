import React from 'react';
import type {MenuProps} from 'antd';
import {ApiOutlined, PartitionOutlined, SendOutlined, DeleteOutlined, DownloadOutlined} from '@ant-design/icons';

const DROPDOWN_BUTTON_1: MenuProps['items'] = [
  {
    key: 'import',
    icon: <DownloadOutlined />,
    label: '导 入'
  },
  {
    key: 'delete',
    icon: <DeleteOutlined />,
    label: '清 空',
    danger: true
  }
];

export {DROPDOWN_BUTTON_1};

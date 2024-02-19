import './style/index.css';
import React, {useState} from 'react';
import {Editor} from 'amis-editor';
import {Button, Dropdown, message, Modal} from 'antd';
import {DesktopOutlined, FormOutlined, SaveOutlined} from '@ant-design/icons';

import {loading} from '@/util/loading';
import {DROPDOWN_BUTTON_1} from './lib/config';


let finalSchema: any = null;

// 加载本地示例
function getLocalSchema() {
  let localSchema = localStorage.getItem('localSchema');
  return localSchema ? JSON.parse(localSchema) : {type: 'page', body: '初始页面'};
}


// 修改页面
function handleChange(value: any) {
  finalSchema = value;
}

// 保存页面
function handleSave() {
  message.success('保存成功').then();
  localStorage.setItem('localSchema', JSON.stringify(finalSchema));
}

// 按钮下拉菜单点击
function handleMenuClick(item: any, callback: any) {
  // 清空
  if (item.key === 'delete') {
    Modal.confirm({
        title: '清空页面',
        content: '是否确认清空当前页面？',
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
          finalSchema = {type: 'page', body: '初始页面'};
          callback(finalSchema);
          localStorage.removeItem('localSchema');
          loading(500).then(() => {
            message.success('清空成功').then();
          });
        }
      }
    );
  }
}

export default function App() {
  const [schema, setSchema] = useState(getLocalSchema);
  const [previewed, setPreviewed] = useState(false);

  return <div className="editor">
    <div className="header">
      <div className="header-left"></div>
      <div className="header-center"></div>
      <div className="header-right">
        <div className="btn-group">
          <Button
            icon={previewed ? <FormOutlined /> : <DesktopOutlined />}
            style={{marginRight: '10px', color: '#fff', background: '#52c41a'}}
            onClick={async () => {
              await loading(500);
              setPreviewed(!previewed);
            }}>
            {previewed ? '编 辑' : '预 览'}
          </Button>
          <Dropdown.Button
            type="primary"
            menu={{
              items: DROPDOWN_BUTTON_1, onClick: (item) => {
                return handleMenuClick(item, setSchema);
              }
            }}
            onClick={handleSave}
          >
            <SaveOutlined />保 存
          </Dropdown.Button>
        </div>
      </div>
    </div>
    <div className="container">
      <Editor
        theme={'cxd'}
        className="is-fixed"
        preview={previewed}
        value={schema}
        onChange={handleChange}
      />
    </div>
  </div>;
}

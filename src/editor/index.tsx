import './style/index.css';
import React, {useState} from 'react';
import {Editor} from 'amis-editor';
import {Button, Dropdown, message, Spin} from 'antd';
import {DesktopOutlined, FormOutlined, SaveOutlined} from '@ant-design/icons';

import {loading} from '@/util/loading';
import {DROPDOWN_BUTTON_PROPS} from './lib/config';


let finalSchema: any = null;
let localSchema: any = loadLocalSchema();

// 加载本地示例
function loadLocalSchema() {
  let localSchema = localStorage.getItem('localSchema');
  if (localSchema) {
    return JSON.parse(localSchema);
  }
  return {'type': 'page', 'body': '初始页面'};
}


// 修改
function handleChange(value: any) {
  finalSchema = value;
}

// 保存
function handleSave() {
  message.success('保存成功').then();
  localStorage.setItem('localSchema', JSON.stringify(finalSchema));
}

export default function App() {
  const [previewed, setPreviewed] = useState(false);

  return <div className="editor">
    <div className="header">
      <div className="header-left"></div>
      <div className="header-center"></div>
      <div className="header-right">
        <div className="btn-group">
          <Button
            icon={previewed ? <FormOutlined /> : <DesktopOutlined />}
            style={{marginRight: '10px', color: '#fff', background: previewed ? '#1890ff' : '#52c41a'}}
            onClick={async () => {
              await loading(1000);
              setPreviewed(!previewed);
            }}>
            {previewed ? '编 辑' : '预 览'}
          </Button>
          <Dropdown.Button menu={DROPDOWN_BUTTON_PROPS}
                           buttonsRender={([leftButton, rightButton]) => {
                             return [
                               <Button icon={<SaveOutlined />} onClick={handleSave}>保 存</Button>,
                               rightButton
                             ];
                           }}
          ></Dropdown.Button>
        </div>
      </div>
    </div>
    <div className="container">
      <Editor
        theme={'cxd'}
        className="is-fixed"
        preview={previewed}
        value={localSchema}
        onChange={handleChange}
      />
    </div>
  </div>;
}

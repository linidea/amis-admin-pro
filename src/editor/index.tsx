import './style/index.css';
import React, {useState} from 'react';
import {Editor} from 'amis-editor';
import {Button, message} from 'antd';
import {SaveOutlined} from '@ant-design/icons';

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
function onChange(value: any) {
  console.log(value);
  finalSchema = value;
}

// 预览
function onPreview(callback: any) {
  callback(true);
}

// 保存
function handleSave() {
  message.success('保存成功').then();
  localStorage.setItem('localSchema', JSON.stringify(finalSchema));
}

export default function App() {
  const [preview, setPreview] = useState(false);

  return <div className="editor">
    <div className="header">
      <div className="header-left"></div>
      <div className="header-center"></div>
      <div className="header-right">
        <Button icon={<SaveOutlined />} onClick={handleSave}>保 存</Button>
      </div>
    </div>
    <div className="container">
      <Editor
        theme={'cxd'}
        className="is-fixed"
        preview={preview}
        value={localSchema}
        onChange={onChange}
      />
    </div>
  </div>;
}

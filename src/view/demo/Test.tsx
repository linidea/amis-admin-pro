import React from 'react';
import {render as amisRender} from 'amis';
import {Result, Button} from 'antd';


// 设置默认的 schema
function getSchema() {
  let localSchema = localStorage.getItem('localSchema');
  return localSchema ? JSON.parse(localSchema) : '';
}

export default function App() {
  const [schema, setSchema] = React.useState(getSchema());

  let body = amisRender(schema);
  return <>
    <Result
      style={{display: getSchema() ? 'none' : 'block'}}
      title="无可预览的页面"
      extra={
        <Button type="primary" target="_blank"
                href={`${window.location.origin}${window.location.pathname}#/editor`}>
          去设计
        </Button>
      }
    />
    <div>{body}</div>
  </>;
}

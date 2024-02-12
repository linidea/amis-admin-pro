import React from 'react';
import {render as amisRender} from 'amis';


// 设置默认的 schema
function getSchema() {
  let defaultSchema = {
    'type': 'page',
    'title': '测试页面',
    'body': '这是一个测试页面,你可以在编辑器中修改这个页面的内容'
  };
  let localSchema = localStorage.getItem('localSchema');
  if (localSchema) {
    return JSON.parse(localSchema);
  } else {
    return defaultSchema;
  }
}

export default function App() {
  const [schema, setSchema] = React.useState(getSchema());

  let body = amisRender(schema);
  return <div>{body}</div>;
}

import React from 'react';
import {render as amisRender} from 'amis';

export default function App() {
  let schema = {
    'type': 'page',
    'title': '测试页面',
    'body': '这是一个测试页面'
  };
  let body = amisRender(schema);
  return <div>{body}</div>;
}

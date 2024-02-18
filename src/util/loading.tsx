import React from 'react';
import ReactDOM from 'react-dom';
import {Spin} from 'antd';

function showLoading(tip: string = '') {
  let dom = document.createElement('div');
  dom.setAttribute('id', 'lg-loading');
  document.body.appendChild(dom);
  ReactDOM.render(<Spin tip={tip} />, dom);
}

function hideLoading() {
  let dom: any = document.getElementById('lg-loading');
  document.body.removeChild(dom);
}

function loading(delay: number = 3000, tip: string = '') {
  let timer: any = null;
  showLoading(tip);
  timer = setTimeout(() => {
    hideLoading();
    clearTimeout(timer);
  }, delay);
}


export {loading};

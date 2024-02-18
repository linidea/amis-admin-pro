import React from 'react';
import ReactDOM from 'react-dom';
import {Spin} from 'antd';

function showLoading(tip: string = '') {
  let dom = document.createElement('div');
  dom.setAttribute('id', 'lg-loading');
  document.body.appendChild(dom);
  ReactDOM.render(<Spin tip={tip} size="large" />, dom);
}

function hideLoading() {
  let dom: any = document.getElementById('lg-loading');
  document.body.removeChild(dom);
}

function loading(delay: number = 3000, tip: string = '') {
  showLoading(tip);
  let timer: any = null;
  return new Promise((resolve, reject) => {
    try {
      timer = setTimeout(() => {
        hideLoading();
        clearTimeout(timer);
        resolve(true);
      }, delay);
    } catch (e) {
      hideLoading();
      clearTimeout(timer);
    }
  });

}


export {loading};

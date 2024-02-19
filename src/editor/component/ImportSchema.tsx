import React, {useEffect} from 'react';
import {Modal} from 'antd';

function handleOk() {

}

function handleCancel(callback: Function) {
  return () => {
    callback(false);
  };
}

export default function App({isModalOpen}: any) {
  const [visible, setVisible] = React.useState(isModalOpen);
  useEffect(() => {
    isModalOpen && setVisible(isModalOpen);
  }, [isModalOpen]);
  return (
    <Modal title="Basic Modal" open={visible} onOk={handleOk} onCancel={handleCancel(setVisible)}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}

import '@/style/common.css';
import React from 'react';
import {Card} from 'antd';

const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center'
};

const App: React.FC = () => (
  <Card className="module-card" title="参考项目集">
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>
      Content
    </Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
  </Card>
);

export default App;

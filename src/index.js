import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './HelloWorld'; // 作成したコンポーネントをインポート

const rootElement = document.getElementById('react-app-root');
if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      <HelloWorld />
    </React.StrictMode>,
    rootElement
  );
}

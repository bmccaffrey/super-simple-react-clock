import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

function tick() {
  const element = (
    <div>
      <h1>Hello, World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
  registerServiceWorker();
}
setInterval(tick, 1000);

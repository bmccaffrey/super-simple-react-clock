import React from 'react';
import ReactDOM from 'react-dom';
import tick from './Clock';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(tick(), document.getElementById('root'));
registerServiceWorker();

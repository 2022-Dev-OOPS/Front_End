import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');

// createRoot 함수를 사용하여 렌더링 대상 요소를 래핑
const root = createRoot(rootElement);
root.render(
<Router>
<App />
</Router>
);

document.body.style.backgroundColor = "#F3F4F9";



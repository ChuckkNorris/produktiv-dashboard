import React from 'react';
import './app.component.css';
import { BrowserRouter, Router } from 'react-router';
import { AuthLayoutRoutes } from 'modules/pages/pages.routes';

function App() {
  return (
    <BrowserRouter>
      <AuthLayoutRoutes />
    </BrowserRouter>
  );
}

export default App;

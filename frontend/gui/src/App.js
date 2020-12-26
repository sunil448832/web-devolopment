import './App.css';
import 'antd/dist/antd.css'
import React from 'react'
import CostomLayout from './containers/Layout'
import BaseRouter from './routes'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router >
        <CostomLayout >
          <BaseRouter />
        </CostomLayout>
      </Router>
    </div>
  );
}

export default App;

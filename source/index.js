import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './shared/Header/Header'
import Home from './pages/Home/Home'

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div>
      <Header tab={selectedTab} setTab={tab => setSelectedTab(tab)} />
      <Home tab={selectedTab} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './shared/header'
import Home from './pages/home/home'

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <>
      <Header tab={selectedTab} setTab={tab => setSelectedTab(tab)} />
      <Home tab={selectedTab} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

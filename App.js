
import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './src/screen/Login/Login';
import Home from './src/screen/Home/Home';

const App = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene hideNavBar
          showLabel={false}
          key='Login'
          component={Login}
          back={false}
          initial
        />
        <Scene hideNavBar
          showLabel={false}
          key='Home'
          component={Home}
        />
      </Scene>
    </Router>
  )
}

export default App;


import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './src/screen/Login/Login';
import Home from './src/screen/Home/Home';
import Registers from './src/screen/Register/Register';
import Test from './src/test/Test';
import Profile from './src/screen/Profile/Profile';

const App = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene hideNavBar
          key='Login'
          component={Login}

        />
        <Scene hideNavBar
          key='Home'
          component={Home}
          back={false}
        />
        <Scene hideNavBar
          key='Register'
          component={Registers}
        />
        <Scene hideNavBar
          key='Test'
          component={Test}
          initial
        />
        <Scene hideNavBar
          key='Profile'
          component={Profile}
        />
      </Scene>
    </Router>
  )
}

export default App;

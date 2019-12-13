
import React from 'react';
import { Router, Scene, Modal } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import Login from './src/screen/Login/Login';
import Home from './src/screen/Home/Home';
import Registers from './src/screen/Register/Register';
import Test from './src/test/Test';
import Profile from './src/screen/Profile/Profile';
import Hire from './src/components/Hire/Hire';
import Navigation from './src/screen/Navigation/Navigation';

import store from './src/public/Redux/Store';

const persistStore = store();

const App = () => {

  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <Router>
          <Modal>
            <Scene key='root' hideNavBar>
              <Scene hideNavBar
                key='Login'
                component={Login}
                initial
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
                key='navigation'
                component={Navigation}

              />
              <Scene hideNavBar
                key='Profile'
                component={Profile}
              />
            </Scene>
            <Scene hideNavBar
              key='HireModal'
              component={Hire}
            />
          </Modal>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App;


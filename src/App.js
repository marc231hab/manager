import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCvndQj9bhzt1iRJoz5SkPUV8lR2w2d8OA',
      authDomain: 'manager-e74fd.firebaseapp.com',
      databaseURL: 'https://manager-e74fd.firebaseio.com',
      projectId: 'manager-e74fd',
      storageBucket: 'manager-e74fd.appspot.com',
      messagingSenderId: '692549640417'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

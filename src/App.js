import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './redux/createStore';
import InputSection from './components/InputSection';
import UsersSection from './components/UsersSection';
import Header from './components/header';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import userActions from './redux/actions/userActions';

function App() {


  const url = "https://jsonplaceholder.typicode.com/comments";

  const getAllUsers =  () => {
    axios.get(url,{
    params: {
      _limit: 15
     }
   })
    .then((res) => {
        const data = res.data
         store.dispatch(userActions.getUser({
           data:data
         }));

    })
    .catch(error => console.log(error))

  }

  useEffect(() => {
    getAllUsers();
  }, []);


  return (
    <Provider store={store}>
        <Header/>
        <Container>
              <h1>My Profile</h1>
              <InputSection />
              <UsersSection />
        </Container>
    </Provider>
  );
}

export default App;

import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './component/pages/homepage';
import LoginPage from './component/pages/loginpage';

const App = () => <div>
  <Route path='/' exact component={HomePage} />
  <Route path='/login' exact component={LoginPage} />
</div>

export default App;

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import About from './pages/About';
import Alert from './pages/Alert';
import Setting from './pages/Setting';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='container' style={{ marginTop: '10rem' }}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/post' component={NewPost} />
          <Route path='/alert' component={Alert} />
          <Route path='/about' component={About} />
          <Route path='/setting' component={Setting} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='*' component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

import { Switch, Route } from 'react-router-dom';
import PhoneBook from './components/PhoneBook';
import AppBar from './components/AppBar';
import HomeView from './components/HomeView';
import RegisterView from './components/RegisterView';
import LoginView from './components/LoginView';
import { connect } from 'react-redux';
import { authOperations } from './redux/auth';
import { useEffect } from 'react';

function App({ onGetCurrentUser }) {
  useEffect(() => {
    onGetCurrentUser();
  }, []);
  return (
    <>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/phonebook" component={PhoneBook} />
      </Switch>
    </>
  );
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

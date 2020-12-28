import './App.css';
import HomePage from './HomePage';
import Login from "./Login";
import {stateToUser} from "./redux/selectors";
//import Header from "./Header";
//import Sidebar from "./Sidebar";
//import Feed from "./Feed";
import {connect } from 'react-redux';
function App({user}) {
  return (
      <div className="app">
        {user ? <HomePage /> : <Login />}
      </div>
  );
}

export default connect(state => ({user: stateToUser(state)}))(App);

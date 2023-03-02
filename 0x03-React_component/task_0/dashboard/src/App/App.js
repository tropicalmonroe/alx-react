import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notification from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';

const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
]

const listNotifications = [
    {id: 1, value: "New course available", type: "default"},
    {id: 2, value: "New resume available", type: "urgent"},
    {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
]

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
            <Header />
            <div className="App-body">
              {this.props.isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
            </div>
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default App;

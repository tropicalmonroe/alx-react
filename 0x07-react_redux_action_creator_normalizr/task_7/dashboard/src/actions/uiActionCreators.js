import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  };
};

export const boundlogin = (email, password) => dispatch(login(email, password));

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const boundlogout = () => dispatch(logout());

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
};

export const bounddisplayNotificationDrawer = () => 
  dispatch(displayNotificationDrawer());

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
};

export const boundhideNotificationDrawer = () =>
  dispatch(hideNotificationDrawer());

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };      
};

export const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch('http://localhost:3000/login-success.json')
    .then((res) => res.json())
    .then((json) => dispatch(loginSuccess()))
    .catch((error) => dispatch(loginFailure()));
  };
};

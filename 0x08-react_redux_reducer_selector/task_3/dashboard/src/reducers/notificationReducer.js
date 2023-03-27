import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from './notificationActionTypes';

export const initialNotificationState = {
  notifications: [],
  filter: 'DEFAULT',
};

const notificationReducer = (state = initialNotificationState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
	notifications: action.map.data((notification) => {
	  return {
	    ...notification,
	    isRead: false,
	  };
	}),
      };

    case MARK_AS_READ:
      return {
        ...state,
	notifications: state.notification.map((notification) => {
	  const current = {
	    ...notification,
	  };
	  if (notification.id == action.index) current.isRead = true;

	  return current;
	}),
      };

      case SET_TYPE_FILTER:
        return {
	  ...state,
	  filter: action.filter,
	};

      default:
      break;
  }
  return state;
};

export const notificationReducer;

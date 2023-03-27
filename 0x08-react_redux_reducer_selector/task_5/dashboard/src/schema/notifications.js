import * as notificationItem from '../../notifications.json';
import { normalize, schema } from 'normalizr';

// user schema
const user = new schema.entity('users');

// message schema
const message = new schema.entity('messages', {}, {
  idAttribute: 'guid'
});

// notification schema 
const notification = new schema.entity('notifications', {
  author: user,
  context: message
});

export const normalizedData = normalize(notificationItem.default, [notification])

export const getAllNotificationsByUser = (userId) => {

  const entityNotification = normalizeData.entities.notification;
  const entityMessage = normalizeData.entities.messages;
  const data = [];

  for (let item in entityNotification) {
    if (entityNotification[item].author === userId) {
      const contextMessage = entityNotification[item].context;
      data.push(entityMessage[contextMessage])
    }
  }
  return data;
};

export const notificationsNormalizer = (data) => {
  return normalize(data, [notification]).entities
}

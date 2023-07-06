import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { auth, database } from '../../../misc/firebase';
import { transformToArrWithId } from '../../../misc/helpers';
import MessageItem from './MessageItem';
import { Alert } from 'rsuite';

const Message = () => {
  const { chatId } = useParams();
  const [messages, setMessages] = useState(null);

  const isChatEmpty = messages && messages.length === 0;
  const canShowMessages = messages && messages.length > 0;

  useEffect(() => {
    const messagesRef = database.ref('/messages');

    messagesRef
      .orderByChild('roomId')
      .equalTo(chatId)
      .on('value', snap => {
        const data = transformToArrWithId(snap.val());
        setMessages(data);
      });

    return () => {
      messagesRef.off('value');
    };
  }, [chatId]);

  const handelAdmin = useCallback(
    async uid => {
      const adminRef = database.ref(`/rooms/${chatId}/admins`);

      let alertMsg;

      await adminRef.transaction(admins => {
        if (admins) {
          if (admins[uid]) {
            admins[uid] = null;
            alertMsg = 'Admin permission removed';
          } else {
            admins[uid] = true;
            alertMsg = 'Admin permistion granted';
          }
        }

        return admins;
      });

      Alert.info(alertMsg, 4000);
    },
    [chatId]
  );

  const handelLike = useCallback(async msgId => {
    const { uid } = auth.currentUser;
    const messageRef = database.ref(`/messages/${msgId}`);

    let alertMsg;

    await messageRef.transaction(msg => {
      if (msg) {
        if (msg.likes && msg.likes[uid]) {
          msg.likeCount -= 1;
          msg.likes[uid] = null;
          alertMsg = 'Like removed';
        } else {
          msg.likeCount += 1;

          if (!msg.likes) {
            msg.likes = {};
          }

          msg.likes[uid] = true;
          alertMsg = 'Like added';
        }
      }

      return msg;
    });

    Alert.info(alertMsg, 4000);
  }, []);

  return (
    <ul className="msg-list cutom-scroll">
      {isChatEmpty && <li> No message yet </li>}
      {canShowMessages &&
        messages.map(msg => (
          <MessageItem
            key={msg.id}
            messages={msg}
            handelAdmin={handelAdmin}
            handelLike={handelLike}
          />
        ))}
    </ul>
  );
};

export default Message;

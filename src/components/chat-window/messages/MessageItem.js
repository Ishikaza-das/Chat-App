import React from 'react';
import ProfileAvatar from '../../ProfileAvatar';
import TimeAgo from 'timeago-react';

const MessageItem = ({ messages }) => {
  const { author, crreatedAt, text } = messages;

  return (
    <li className="padded mb-1">
      <div className="d-flex align-item-center font-bolder mb-1">
        <ProfileAvatar
          src={author.avatar}
          name={author.name}
          className="ml-1"
          size="xs"
        />

        <span className="ml-2">{author.name}</span>
        <TimeAgo
          datetime={crreatedAt}
          className="font-normal text-black-45 ml-2"
        />
      </div>

      <div>
        <span className="word-break-all">{text}</span>
      </div>
    </li>
  );
};

export default MessageItem;

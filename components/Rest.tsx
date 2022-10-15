import { useState } from 'react';
import { FriendResponse } from '../mocks/handlers';

const Rest = () => {
  const [friend, setFriend] = useState<FriendResponse | null>(null);

  const fetchFriendInfo = () => {
    fetch('https://backend.dev/friends')
      .then(res => res.json())
      .then(setFriend);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          margin: '20px 0',
        }}
      >
        <div>{friend?.name}</div>
        <div>{friend?.info.mbti}</div>
      </div>
      <button onClick={fetchFriendInfo}>Load Friend Data</button>
    </>
  );
};

export default Rest;

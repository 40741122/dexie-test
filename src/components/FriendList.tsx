import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db/offlineDB";

export function FriendList() {
  // 監聽 Dexie 中 friends 資料表，資料更新時自動重新 render
  const friends = useLiveQuery(() => db.friends.toArray(), []);

  const addRandomFriend = async () => {
    const randomAge = Math.floor(Math.random() * 50) + 20;
    const randomName = `Friend_${Math.floor(Math.random() * 1000)}`;
    await db.friends.add({ name: randomName, age: randomAge });
  };

  return (
    <div>
      <h2>朋友列表（跨 Tab 自動同步）</h2>
      <button onClick={addRandomFriend}>新增隨機朋友</button>
      <ul>
        {friends?.map((friend) => (
          <li key={friend.id}>
            {friend.name} - 年齡：{friend.age}
          </li>
        )) || <li>載入中...</li>}
      </ul>
    </div>
  );
}

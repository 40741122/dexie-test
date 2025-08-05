import React from "react";
import FormComponent from "./components/FormComponent";
import ResendPending from "./components/ResendPending";
import { FriendList } from "./components/FriendList";

const App: React.FC = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      flexDirection: "column",
    }}
  >
    <h2>📄 模擬表單送出 + IndexedDB 暫存</h2>
    <FormComponent />
    <ResendPending />
    <FriendList />
  </div>
);

export default App;

import React from "react";
import FormComponent from "./components/FormComponent";
import ResendPending from "./components/ResendPending";

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
  </div>
);

export default App;

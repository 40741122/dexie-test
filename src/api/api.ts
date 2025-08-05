// src/api/api.ts

// 模擬送出 API（80% 成功）
export const mockSendToServer = async (data: Record<string, any>): Promise<boolean> => {
  console.log("[模擬送出] 資料：", data);

  // 模擬網路延遲
  await new Promise((res) => setTimeout(res, 500));

  const isSuccess = Math.random() < 0.1;

  if (isSuccess) {
    console.log("[模擬] 成功送出");
    return true;
  } else {
    console.warn("[模擬] 送出失敗（模擬斷線）");
    return false;
  }
};

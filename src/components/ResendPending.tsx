import React from "react";
import { useEffect } from "react";
import { db } from "../db/offlineDB";
import { mockSendToServer } from "../api/api";

const ResendPending: React.FC = () => {
  useEffect(() => {
    const resend = async () => {
      const pendingList = await db.formSubmissions.where("status").equals("pending").toArray();

      for (const item of pendingList) {
        const success = await mockSendToServer({
          name: item.name,
          email: item.email,
        });

        if (success) {
          await db.formSubmissions.update(item.id!, { status: "sent" });
          console.log(`[模擬重送] 成功：id=${item.id}`);
        } else {
          console.warn(`[模擬重送] 失敗：id=${item.id}`);
        }
      }
    };

    resend();
    const interval = setInterval(resend, 10000);
    return () => clearInterval(interval);
  }, []);

  return null;
};

export default ResendPending;

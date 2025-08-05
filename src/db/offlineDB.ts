// src/db/db.ts
import Dexie from "dexie";
import type { Table } from "dexie";

export interface FormSubmission {
  id?: number;
  name: string;
  email: string;
  status: "pending" | "sent";
  createdAt: string;
}

export interface Friend {
  id?: number;
  name: string;
  age: number;
}

export class FormCacheDB extends Dexie {
  formSubmissions!: Table<FormSubmission, number>;
  friends!: Table<Friend, number>;

  constructor() {
    super("FormCacheDB");

    this.version(1).stores({
      formSubmissions: "++id, status, createdAt",
      friends: "++id,name,age",
    });

    console.log("✅ Dexie 初始化完成");
  }
}

export const db = new FormCacheDB();

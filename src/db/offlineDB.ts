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

export interface ContactForm {
  id?: number;
  fullName: string;
  email: string;
  message: string;
  status: "pending" | "sent";
  createdAt: string;
}

export interface ReportForm {
  id?: number;
  equipmentId: string;
  issueDescription: string;
  photoUrl?: string;
  status: "pending" | "sent";
  createdAt: string;
}

export class FormCacheDB extends Dexie {
  formSubmissions!: Table<FormSubmission, number>;
  contactForms!: Table<ContactForm, number>;
  reportForms!: Table<ReportForm, number>;

  constructor() {
    super("FormCacheDB");

    this.version(1).stores({
      contactForms: "++id, status, createdAt",
      reportForms: "++id, status, createdAt",
      formSubmissions: "++id, status, createdAt",
    });

    console.log("✅ Dexie 初始化完成");
  }
}

export const db = new FormCacheDB();

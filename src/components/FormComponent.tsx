import React, { useState } from "react";
import { db } from "../db/offlineDB";
import { mockSendToServer } from "../api/api";
import { useLiveQuery } from "dexie-react-hooks";

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitting, setSubmitting] = useState(false);

  const formSubmissions = useLiveQuery(() => db.formSubmissions.toArray(), []);

  console.log("formSubmissions: ", formSubmissions);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const success = await mockSendToServer(formData);

    if (!success) {
      const newId = await db.formSubmissions.add({
        ...formData,
        status: "pending",
        createdAt: new Date().toISOString(),
      });
      console.log("✅ 已暫存資料，ID:", newId, formData);
    }

    setSubmitting(false);
    setFormData({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="姓名"
        required
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
        required
      />
      <button type="submit" disabled={submitting}>
        送出（模擬）
      </button>
    </form>
  );
};

export default FormComponent;

"use client"
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config";


export default function UserDetail({params}) {
 
  const  id  =  params.id
  console.log("here is the id", id);
  

  
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [changing, setChanging] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", amount: 0, role: "" });

  useEffect(() => {
    if (!id) return;
    const fetchUser = async () => {
      try {
        const docRef = doc(db, "user", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
          setForm(docSnap.data()); 
        }
      } catch (err) {
        console.error("Error fetching user:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  // handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // save updated user
  const handleSave = async () => {
    setChanging(true)
    try {
      const docRef = doc(db, "user", id.toString());
      await updateDoc(docRef, {
        name: form.name,
        email: form.email,
        amount: Number(form.amount),
        role: form.role,
      });
      alert("User updated successfully ✅");
    } catch (err) {
      console.error("Error updating user:", err);
    }
    finally{ setChanging(false)}
  };

  if (loading) return <p>Loading user...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Edit User</h2>
      <div className="space-y-2">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="Email"
        />
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="Amount"
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button
          
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer disabled:opacity-50"
          
        >
          Save
        </button>
      </div>
    </div>
  );
}

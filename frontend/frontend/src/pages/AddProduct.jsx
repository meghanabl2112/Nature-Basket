import { useState } from "react";
import { ProductAPI } from "../api/products";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", price: "", quantity: "", imageUrl: "" });
  const [err, setErr] = useState("");
  const [saving, setSaving] = useState(false);

  const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setSaving(true);
    try {
      await ProductAPI.create({
        name: form.name.trim(),
        price: Number(form.price),
        quantity: Number(form.quantity),
        imageUrl: form.imageUrl.trim() || null,
      });
      nav("/products");
    } catch (e2) {
      setErr(e2?.response?.data?.message || e2?.message || "Failed to create");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{ padding: 16, maxWidth: 480 }}>
      <h2>Add Product</h2>
      {err && <p style={{ color: "red" }}>{err}</p>}

      <form onSubmit={submit} style={{ display: "grid", gap: 10 }}>
        <input placeholder="Name" value={form.name} onChange={onChange("name")} required />
        <input placeholder="Price" value={form.price} onChange={onChange("price")} type="number" step="0.01" required />
        <input placeholder="Quantity" value={form.quantity} onChange={onChange("quantity")} type="number" required />
        <input placeholder="Image URL (optional)" value={form.imageUrl} onChange={onChange("imageUrl")} />
        <button disabled={saving}>{saving ? "Saving..." : "Create"}</button>
      </form>
    </div>
  );
}

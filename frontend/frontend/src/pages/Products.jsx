import { useEffect, useState } from "react";
import { ProductAPI } from "../api/products";

export default function Products() {
  const [items, setItems] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setErr("");
        const data = await ProductAPI.list();
        setItems(data);
      } catch (e) {
        setErr(e?.message || "Failed to load products");
      }
    })();
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h2>Products</h2>
      {err && <p style={{ color: "red" }}>{err}</p>}
      {!err && items.length === 0 && <p>No products found.</p>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
        {items.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ddd", borderRadius: 10, padding: 12 }}>
            <div style={{ fontWeight: 700 }}>{p.name}</div>
            <div>Price: ${p.price}</div>
            <div>Qty: {p.quantity}</div>
            {p.imageUrl && (
              <img src={p.imageUrl} alt={p.name} style={{ width: "100%", marginTop: 8, borderRadius: 8 }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

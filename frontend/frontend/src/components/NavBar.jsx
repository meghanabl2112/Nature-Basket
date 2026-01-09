import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div style={{ display: "flex", gap: 16, padding: 12, borderBottom: "1px solid #ddd" }}>
      <Link to="/" style={{ fontWeight: 700, textDecoration: "none" }}>Nature Basket</Link>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/products/new">Add Product</NavLink>
    </div>
  );
}

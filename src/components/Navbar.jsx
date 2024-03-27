import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const navbar = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "cart",
    link: "/cart",
  },
];

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className="flex items-center justify-between mx-72 py-10">
      <div>
        <h2>Logo</h2>
      </div>
      <div>
        <ul className="flex items-center gap-x-5">
          {navbar.map(({ id, name, link }) => (
            <li key={id}>
              <Link to={link}>{name}</Link>
            </li>
          ))}
          <span>items:{items.length}</span>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

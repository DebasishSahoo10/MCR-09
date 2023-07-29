import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const { state } = useContext(DataContext);
  const categories = state.categories;
  return (
    <div style={{ textAlign: "left" }}>
      <h2>All the Video Categories</h2>
      <ul>
        {categories.map((cat) => {
          return (
            <li key={cat._id}>
              <NavLink to={`/categories/${cat.category}`}>
                <img src={cat.thumbnail} alt="" />
                <p>{cat.category}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

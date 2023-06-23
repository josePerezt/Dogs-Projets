import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import "./NavBar.css";

function NavBar({ onSearch }) {
  return (
    <div className="container-link">
      <p className="p-link">
        <NavLink
          to="/"
          className="link"
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: "rgba(74, 7, 136, 0.3)",
                  padding: "10px",
                  border: "thin solid transparent",
                  borderRadius: "40px",
                  textDecoration: "none",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: "#fff",
                }
              : {
                  fontFamily: "sans-serif",
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "#fff",
                }
          }
        >
          INICIO
        </NavLink>
      </p>
      <p className="p-link">
        <NavLink
          to={"cucha"}
          className="link"
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: "rgba(74, 7, 136, 0.3)",
                  padding: "10px",
                  border: "thin solid transparent",
                  borderRadius: "40px",
                  textDecoration: "none",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: "#fff",
                }
              : {
                  fontFamily: "sans-serif",
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "#fff",
                }
          }
        >
          CUCHA
        </NavLink>
      </p>

      <p className="p-link">
        <NavLink
          to={"/crear-perro"}
          className="link"
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: "rgba(74, 7, 136, 0.3)",
                  padding: "10px",
                  border: "thin solid transparent",
                  borderRadius: "40px",
                  textDecoration: "none",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: "#fff",
                }
              : {
                  fontFamily: "sans-serif",
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "#fff",
                }
          }
        >
          CREAR PERRO
        </NavLink>
      </p>
      <p>
        <NavLink
          className="link"
          to={"/detail"}
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: "rgba(74, 7, 136, 0.3)",
                  padding: "10px",
                  border: "thin solid transparent",
                  borderRadius: "40px",
                  textDecoration: "none",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: "#fff",
                }
              : {
                  fontFamily: "sans-serif",
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "#fff",
                }
          }
        >
          DETALLE
        </NavLink>
      </p>
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
}

export default NavBar;

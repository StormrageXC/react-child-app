import React, { version as reactVersion } from "react";
import Login from "./login";
import { ConfigProvider } from "antd";
import { NavLink, Link, Routes, Route, Navigate } from "react-router";
import { Divider } from "antd";
import "./app.scss";
const basename = "/";
function LibVersion() {
  return (
    <>
      <h1 className="app-title">React Demo</h1>
      <p className="app-lib">React version: {reactVersion}</p>
    </>
  );
}

export default function App() {
  return (
    <div className="app-main">
      <LibVersion />
      <Divider />
      <nav>
        {/* NavLink makes it easy to show active states */}
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          app
        </NavLink>

        <Link to="/login">login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to={`/login`} replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

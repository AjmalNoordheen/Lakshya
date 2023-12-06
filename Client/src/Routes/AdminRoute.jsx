import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Admin/Login";
import AddEvent from "../Components/Admin/AddEvent";
import ListEvents from "../Components/Admin/ListEvents";



function AdminRoute() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/addEvent" element={<AddEvent/>} />
        <Route path="/listEvents" element={<ListEvents/>} />


      </Routes>
    </>
  );
}

export default AdminRoute;

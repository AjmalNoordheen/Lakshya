import React from "react";
import { Routes, Route } from "react-router-dom";
import UserHomePage from "../Pages/UserHomePage";
import EventsPage from "../Pages/EventsPage";
import EventListPage from "../Pages/EventListpage";
import RegisterPage from "../Pages/RegisterPage";


function UserRoute() {
  return (
    <>
      <Routes>

        <Route path="/" element={<UserHomePage />} />
        <Route path="/events" element={<EventsPage/>} />
        <Route path="/eventList" element={<EventListPage/>} />
        <Route path="/register" element={<RegisterPage/>} />

      </Routes>
    </>
  );
}

export default UserRoute;
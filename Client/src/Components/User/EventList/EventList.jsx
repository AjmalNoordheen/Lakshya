import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EventList.css";
import userInstance from "../../../Api/UserApi";
import toast from "react-hot-toast";

function EventList() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    userInstance
      .get("/listEvents")
      .then(res => {
        console.log(res.data.eventLists,'lllll')
        if (res.data.result == true) {
          setEvents(res.data.eventLists);
        } else {
          toast.error("some-thing went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="header">
        <h1 style={{ fontWeight: "bold" }}>EVENTS</h1>
      </div>

      <div className="grid grid-cols-2 w-full">
      {events.map((item,index)=>
          <ul className="tilesWrap col-span-2 md:col-span-1 w-10/12">
        <li>
          <h2>{index+1}</h2>
          <h3>{item.heading}</h3>
          <p>
            It is an individual sports event in which participants must face the
            bowling of balling machine. Depending on registration fees, they can
            participate for 1 over or 2 overS. This event will be organized at
            volleyball ground. This event will start from 11 o’ clock.
          </p>
          <a>
            <button onClick={() => navigate("/events")}>Read more</button>
          </a>
        </li>
      </ul>
      )}
        </div>
    </div>
  );
}

export default EventList;

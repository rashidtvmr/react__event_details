import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"; 

const Card = ({
  _id,
  eventCategory,
  eventName,
  eventLocation,
  eventDesc,
  startDate,
  endDate,
}) => {
  const history = useHistory();
  startDate = startDate.split("T")[0];
  endDate = endDate.split("T")[0];
  return (
      <div
        onClick={()=> history.push(`/event-detail/${_id}`)}
        className="card"
        style={{
          margin: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          // className="d-felx flex-row justify-content-center"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: 29,
          }}
        >
          <h4 style={{ overflow: "hidden", flexGrow: 1, flexBasis: 0 }}>
            {" "}
            <b>{eventName}</b>{" "}
          </h4>
          <div style={{ overflow: "hidden", flexGrow: 1, flexBasis: 0 }}>
            <FaMapMarkerAlt color=" rgba(240, 0,0,0.6)" /> {eventLocation}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            overflow: "hidden",
            marginBottom: 20,
            marginTop: 10,
          }}
        >
          <p style={{ color: "gray" }}>{eventDesc}</p>
        </div>
        <div
          className=""
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <b>Start at : </b> {startDate}
          </div>
          <div>
            <b>End at : </b> {endDate}
          </div>
        </div>
      </div>
  );
};

export default Card;

import React, { useContext } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import * as _ from "lodash";
import { UserContext } from "../Layout/MainLayout";
import Container from "../Layout/Container";

export default function EventDetail({ match }) {
  const { userState, userDispatch } = useContext(UserContext);
  const postId = match.params.id;
  const post = _.find(userState.post, function (__post) {
    return __post["_id"] === postId;
  });

  let {
    eventCategory,
    eventName,
    eventLocation,
    eventDesc,
    startDate,
    endDate,
  } = post;
  startDate = startDate.split("T")[0];
  endDate = endDate.split("T")[0];
  return (
    <Container>
      <div
      className=""
      style={{
        margin: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontSize: 20, textAlign: "center" }}>
        <b>{eventCategory}</b>
      </div>
      <div style={{ fontSize: 10, textAlign: "center" }}>
        <b>At</b>
      </div>
      <div style={{ fontSize: 40, textAlign: "center" }}>
        <b>{eventLocation}</b>
      </div>
      <div
        // className="d-felx flex-row justify-content-center"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ overflow: "hidden", flexGrow: 1, flexBasis: 0 ,fontSize:50,textAlign:'center',color:'var(--c_primary)'}}>
          <b>{eventName}</b>
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
    </Container>
  );
}

import React, { useEffect, useState } from "react";
import "./trafficlight.css";
import io from "socket.io-client";

const Trafficlight = (props) => {
  const [color, setColor] = useState();
  const [status, setStatus] = useState("");
  useEffect(() => {
    serverConnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const serverConnect = () => {
    try {
      // connect to server locally
      // const socket = io.connect("localhost:5000", {
      //   forceNew: true,
      //   transports: ["websocket"],
      //   autoConnect: true,
      //   reconnection: false,
      //   timeout: 5000,
      // });

      // connect to server on Heroku
      const socket = io.connect();

      socket.emit("join", {
        streetName: props.street,
      });

      socket.on("turnLampOn", (data) => handleTurnLampOn(data, socket));
      if (socket.io._readyState === "opening") {
        if (status !== "disconnected") {
          setStatus("connecting...");
          setColor("red");
        }
        // we'll see this if server is down or it'll get overwritten if its up
      } else {
      }
    } catch (err) {
      console.log(err);
      console.log("some other problem occurred");
    }
  };
  // lamp handler code, lamp data from server
  const handleTurnLampOn = async (lampData, socket) => {
    setStatus("disconnected");
    socket.disconnect(); // don't need server anymore once we have data
    while (true) {
      // loop until browser closes
      // wait on current colour, then set next color
      await waitSomeSeconds(lampData.green, "green");
      await waitSomeSeconds(lampData.yellow, "yellow");
      await waitSomeSeconds(lampData.red, "red");
      //green and yellow lamps go here
    }
  };

  const waitSomeSeconds = (waitTime, nextColorToIlluminate) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setColor(nextColorToIlluminate); // update state variable
        resolve();
      }, waitTime);
    });
  };

  const getStateColor = (c) => (color === c ? color : "white");

  return (
    <div>
      <p>{status}</p>
      <div className="light">
        <div
          className="lamp"
          style={{ backgroundColor: getStateColor("red"), margin: ".5rem" }}
        />
        <div
          className="lamp"
          style={{ backgroundColor: getStateColor("yellow"), margin: ".5rem" }}
        />
        <div
          className="lamp"
          style={{ backgroundColor: getStateColor("green"), margin: ".5rem" }}
        />
        <div style={{ textAlign: "center", fontName: "Helvetica" }}>
          {props.street}
        </div>
      </div>
    </div>
  );
};

export default Trafficlight;

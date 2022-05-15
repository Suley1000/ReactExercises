import { useEffect, useRef } from "react";
import { ListItem } from "@mui/material";
import Bubble from "./bubble";
import Triangle from "./triangle";
const UserBubble = (props) => {
  const userRef = useRef(null);
  useEffect(() => {
    userRef.current.scrollIntoView(true);
  }, []);
  return (
    <div>
      <ListItem
        ref={userRef}
        style={{ textAlign: "left", marginBottom: "2vh" }}
      >
        <Bubble user={props.user} color={"navy"} />
        <Triangle color={"navy"} />
      </ListItem>
      <p></p>
    </div>
  );
};
export default UserBubble;

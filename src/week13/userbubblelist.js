import { List } from "@mui/material";
import UserBubble from "./userbubble";
const UserList = (props) => {
  let users = props.users.map((user, idx) => {
    return <UserBubble key={idx} user={user} />;
  });
  return <List>{users}</List>;
};
export default UserList;

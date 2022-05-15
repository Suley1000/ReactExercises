import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  AppBar,
  Toolbar,
} from "@mui/material";
import theme from "../theme";
import "./App.css";
import UserList from "./userlist";
const Exercise1 = () => {
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      setMsg("Attempting to load users from server...");
      let response = await fetch("http://localhost:5000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ query: "query { users{name,age,email} }" }),
      });
      let json = await response.json();
      setUsers(json.data.users);
      setMsg(`${json.data.users.length} users loaded`);
    } catch (error) {
      console.log(error);
      setMsg(`Problem loading server data - ${error.message}`);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            INFO3139 - Case 2 Exercises
          </Typography>
        </Toolbar>
      </AppBar>
      <Card
        style={{
          marginTop: "5vh",
          marginLeft: "10vw",
          width: "80vw",
          textAlign: "center",
          height: "80vh",
        }}
      >
        <CardHeader title="Exercise #1" style={{ marginTop: "2vh" }} />
        <CardContent style={{ textAlign: "center" }}>
          <Typography
            color="error"
            style={{ marginTop: "-3vh", marginBottom: "3vh" }}
          >
            {msg}
          </Typography>
          {users && (
            <div className="usersList">
              <UserList users={users} />
            </div>
          )}
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};
export default Exercise1;

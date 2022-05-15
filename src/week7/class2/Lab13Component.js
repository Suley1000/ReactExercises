import React, { useReducer, useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
 Card,
 CardHeader,
 CardContent,
 Snackbar,
 Typography,
 Autocomplete,
 TextField
} from "@mui/material";
import theme from "../../theme";
const Lab13Component = () => {
 // When you attempt to update state, whatever is passed into setState
 // (which is typically called dispatch) is passed on to the reducer as
 // the second argument. We called this newState. Instead of doing some
 // elaborate switch statement (as in Redux), we just return a new state object
 // that overrides the previous state with the new values passed in
 // kind of how setState works, i.e., by updating state properties
 // using rest/spread operators.
 const initialState = {
 msg: "",
 snackBarMsg: "",
 contactServer: false,
 users: [],
 };
 const reducer = (state, newState) => ({ ...state, ...newState });
 const [state, setState] = useReducer(reducer, initialState);
 useEffect(() => {
 fetchUsers();
 }, []);
 const fetchUsers = async () => {
 try {
 setState({
 contactServer: true,
 snackBarMsg: "Attempting to load users from server...",
 });
 let response = await fetch("http://localhost:5000/graphql", {
 method: "POST",
 headers: {
 "Content-Type": "application/json; charset=utf-8",
 },
 body: JSON.stringify({ query: "query { users{name,age,email} }" }),
 });
 let json = await response.json();
 setState({
 snackBarMsg: `users loaded`,
 users: json.data.users,
 contactServer: true,
 });
 } catch (error) {
 console.log(error);
 setState({
 msg: `Problem loading server data - ${error.message}`,
 });
 }
 };
 const snackbarClose = (event, reason) => {
 if (reason === "clickaway") {
 return;
 }
 setState({
 msg: `${state.users.length} users loaded`,
 contactServer: false,
 });
 };
 //const [selection, setSelection] = useState("");
 const onChange = (e, selectedOption) => {
   const user = state.users.find(x=> x.name === selectedOption)
 selectedOption
 ? setState({msg: `You selected ${user.name}. This user can be contacted at ${user.email}.`})
 : setState({msg: ""});
 };
 return (
 <ThemeProvider theme={theme}>
 <Card style={{ marginTop: "10vh" }}>
 <CardHeader
 title="Search Users"
 style={{ color: theme.palette.primary.main, textAlign: "center" }}
 />
 <CardContent>
 <Autocomplete
 data-testid="autocomplete"
 options={state.users.map(x=>x.name)}
 getOptionLabel={(option) => option}
 style={{ width: 300 }}
 onChange={onChange}
 renderInput={(params) => (
 <TextField
 {...params}
 label="available words"
 variant="outlined"
 fullWidth
 />
 )}
 />
 <div>
 <Typography color="primary">{state.msg}</Typography>
 </div>
 </CardContent>
 </Card>
 <Snackbar
 open={state.contactServer}
 message={state.snackBarMsg}
 autoHideDuration={3000}
 onClose={snackbarClose}
 />
 </ThemeProvider>
 );
};
export default Lab13Component;

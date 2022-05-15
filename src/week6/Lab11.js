import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import {
 Toolbar,
 Card,
 AppBar,
 CardHeader,
 CardContent,
 Typography,
 Button,
 TextField
} from "@mui/material";
import theme from "./theme";
const Lab11 = () => {
  const [msg, addMsg] = useState("");
  const [item, additem] = useState("");//enter word
return (
<ThemeProvider theme={theme}>
<AppBar color="primary">
<Toolbar>
<Typography variant="h6" color="inherit">
INFO3139 - Lab11
</Typography>
</Toolbar>
</AppBar>
<Card style={{ marginTop: "20%" }}>
<CardHeader title="Sentence Builder" style={{ textAlign: "center" }} />
<CardContent color="secondary" title="The Message is:" style={{ textAlign: "left" }} />
<h2 style={{ marginLeft: "4vw", color: "green" }}>{msg}</h2>
<input className="field" type="text"  placeholder="Add word" value={item} onChange={event => additem(event.target.value)}></input>
<input className="word" datatestid="addbutton"  type="submit"value="Submit"onClick={() => addMsg(msg + " " + item)} />
<input className="word"  type="submit"value="Clear msg" onClick={() => addMsg("")} /> 

</Card>
</ThemeProvider>
);
};

export default Lab11;
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
 Autocomplete,
 Card,
 CardHeader,
 CardContent,
 Typography,
 TextField,
 AppBar,
 Toolbar
} from "@mui/material";
import theme from "../../theme";
import "../../App.css";
const Lab12 = () => {
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
 <CardHeader
 title="Exercise #2 - Autocomplete"
 style={{ textAlign: "center" }}
 />
 <CardContent>
 <Autocomplete
 data-testid="autocomplete"
 options={fruits}
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
 <p />
 <Typography variant="h6" color="error">
 {selection}
 </Typography>
 </CardContent>
 </Card>
 </ThemeProvider>
 );
};const fruits = ['Here', 'is', 'a', 'sentence', 'about', 'nothing',
 'by', 'Suleyman', 'Jama'];
export default Lab12;
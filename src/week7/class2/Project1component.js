import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  AppBar,
  Toolbar,
} from "@mui/material";
import theme from "../../theme";
import "../App.css";
import LanguageIcon from "@mui/icons-material/Language";

function Project1component() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            INFO3139 - Project1
          </Typography>
        </Toolbar>
      </AppBar>
      <Card style={{ marginTop: "20%" }}>
        <CardHeader
          title="World Wide Travel Alerts"
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "30",
            color: theme.palette.primary.main,
            textAlign: "center",
          }}
          avatar={<LanguageIcon sx={{ fontSize: 100 }} />}
          titleTypographyProps={{ variant: "h5" }}
        />
        <CardContent></CardContent>
      </Card>
    </ThemeProvider>
  );
}

export default Project1component;

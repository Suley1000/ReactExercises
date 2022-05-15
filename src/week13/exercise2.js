import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import theme from "../theme";
import "../App.css";
import TopBar from "./topbar";
const Exercise2 = () => {
  const [open, setOpen] = useState(false);
  const handleOpenDialog = () => setOpen(true);
  const handleCloseDialog = () => setOpen(false);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <TopBar viewDialog={handleOpenDialog} />
        <Dialog open={open} onClose={handleCloseDialog} style={{ margin: 20 }}>
          <DialogTitle style={{ textAlign: "center" }}>
            Some Dialog Info
          </DialogTitle>
          <DialogContent>
            Some interesting stuff would go here<p></p>Suleyman Jama
          </DialogContent>
        </Dialog>
      </div>
      <h2>Case 2 - Client Ex. #2</h2>
    </ThemeProvider>
  );
};
export default Exercise2;

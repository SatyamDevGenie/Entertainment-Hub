import { Button } from "@mui/base";
import SearchIcon from "@mui/icons-material/Search";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const Searching = () => {
  const [type, setType] = useState(0);

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{ display: "flex", margin: "15px 0" }}>
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            // variant="filled"
            variant="outlined"
            // onChange={(e) => setSearchText(e.target.value)}
          />
          <Button variant="conatinaed" style={{ marginLeft: "10" }}>
            <SearchIcon />
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Searching;

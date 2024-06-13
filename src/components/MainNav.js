import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import TvIcon from "@mui/icons-material/Tv";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { styled } from "@mui/system";
import React from "react";

const StyledBottomNavigation = styled(BottomNavigation)({
  width: "100%",
  position: "fixed",
  bottom: 0,
  backgroundColor: "#000000",
  zIndex: 100,
  padding: "8px",
});

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <StyledBottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        label="Trending"
        icon={<WhatshotIcon />}
        style={{ color: "wheat", fontWeight: "bold" }}
      />
      <BottomNavigationAction
        label="Movies"
        icon={<MovieIcon />}
        style={{ color: "wheat", fontWeight: "bold" }}
      />
      <BottomNavigationAction
        label="TV Series"
        icon={<TvIcon />}
        style={{ color: "wheat", fontWeight: "bold" }}
      />
      <BottomNavigationAction
        label="Search"
        icon={<SearchIcon />}
        style={{ color: "wheat", fontWeight: "bold" }}
      />
    </StyledBottomNavigation>
  );
}
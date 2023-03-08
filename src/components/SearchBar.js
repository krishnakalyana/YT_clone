import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      console.log("search", searchTerm);
      navigate(`/video/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <Paper
      component={"form"}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        className="search-bar"
        placeholder="search..."
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: "red",
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;

import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
export default function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  const searchTerm = id;
  console.log("sea", searchTerm);
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      console.log(data);
      setVideos(data.items);
    });
  }, [searchTerm]);
  console.log("search", searchTerm);
  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={2}
        sx={{
          color: "white",
        }}
      >
        Search results for :
        <span
          style={{
            color: "#F31503",
          }}
        >
          {` ${searchTerm} `}
        </span>
        videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
}

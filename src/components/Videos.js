import React from "react";
import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./";
function Videos({ videos }) {
  console.log(videos);
  return (
    <Stack direction={"row"} flexWrap="wrap" justifyContent={"start"} gap={2}>
      {videos.map((item, index) => {
        console.log("ite", item);
        console.log("item.id.videoId", item.id.channelId);
        return (
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {/* {item.id.channelId && <ChannelCard channel={item} />} */}
          </Box>
        );
      })}
    </Stack>
  );
}

export default Videos;

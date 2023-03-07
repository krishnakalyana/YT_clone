import { Card, CardMedia } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";
function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: 358,
            height: 180,
          }}
        />
      </Link>
    </Card>
  );
}

export default VideoCard;

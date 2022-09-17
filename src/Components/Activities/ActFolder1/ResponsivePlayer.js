import React from "react";
import "./../ActFolder1/ResponsivePlayer.css";
import ReactPlayer from "react-player";

const ResponsivePlayer = () => {
  return (
    <div className="player-wrapper ">
      <ReactPlayer
        className="react-player  "
        url="https://www.youtube.com/watch?v=0CwApyWfyis&t=52s"
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export default ResponsivePlayer;

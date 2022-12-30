import React, { useEffect, useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import axios from "./axios";

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get("/users");
      setVideo(req.data);
    };
    fetchData();
  });
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      {video.map((vid) => (
        <div key={vid._id} className="video_player">
          <video
            loop
            ref={videoRef}
            onClick={handleVideoPress}
            src={vid.url}
          ></video>
          <VideoFooter
            channel={vid.channel}
            description={vid.description}
            song={vid.song}
          />
          <VideoSidebar
            likes={vid.likes}
            shares={vid.share}
            message={vid.message}
          />
        </div>
      ))}
    </div>
  );
};
export default Video;

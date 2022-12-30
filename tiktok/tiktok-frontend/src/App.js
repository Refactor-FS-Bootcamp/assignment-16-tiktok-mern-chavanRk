import "./App.css";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
      <div className="app_videos">
        <Video
          url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169739/video2_mecbdo.mp4"
          channel="nabendu82"
          description="Macbook Air to new editing beast"
          song="I am a windows PC"
          likes={239}
          shares={345}
          message={890}
        />
        <Video
          url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
          channel="thewebdev"
          description="Todays Morning Editing on kdenlive in windows"
          song="kdenlive is great"
          likes={390}
          shares={355}
          message={990}
        />
      </div>
    </div>
  );
}

export default App;

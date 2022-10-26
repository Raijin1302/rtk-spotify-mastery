import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song?.title ? (
    <FaPauseCircle
      className="text-gray-300 w-[40px] h-[40px]"
      onClick={handlePause}
    />
  ) : (
    <FaPlayCircle
      className="text-gray-300 w-[40px] h-[40px]"
      onClick={handlePlay}
    />
  );

export default PlayPause;

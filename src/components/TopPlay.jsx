import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import PlayPause from "./PlayPause";
import { useGetTopChartsQuery } from "../features/services/shazamCore";
import { useEffect, useRef } from "react";
import { TopCharts } from "../pages";

const TopChartCard = ({ song, index }) => {
  return (
    <div
      className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 rounded-lg cursor-pointer mb-2"
      key={index}
    >
      {song.title}
    </div>
  );
};

const TopPlay = () => {
  const dispatch = useDispatch();

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  }, [dispatch]);

  const topPlays = data?.slice(0, 5);

  // console.log(topPlays);
  // const handlePauseClick = () => {
  //   dispatch(playPause(false));
  // };
  // const handlePlayClick = () => {
  //   dispatch(setActiveSong({ song, data, index }));
  //   dispatch(playPause(true));
  // };

  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col "
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          {topPlays.map((song, index) => (
            <TopChartCard song={song} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPlay;

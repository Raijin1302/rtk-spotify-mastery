import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../features/player/playerSlice";
import { useGetTrackDetailQuery } from "../features/services/shazamCore";
const SongDetails = () => {
  const dispatch = useDispatch();
  const { songId } = useParams();

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data: trackData, isFetching } = useGetTrackDetailQuery({ songId });
  console.log(trackData);
  return (
    <div className="flex flex-col">
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics :</h2>
      </div>
      <div className="mt-5">
        {trackData?.sections[1].type === "LYRICS" ? (
          trackData?.sections[1].text.map((line, index) => <p>{line}</p>)
        ) : (
          <p>Sorry , no lyrics found!</p>
        )}
      </div>
    </div>
  );
};

export default SongDetails;

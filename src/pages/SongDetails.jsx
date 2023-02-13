import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../features/player/playerSlice";
import {
  useGetTrackDetailQuery,
  useGetRelatedSongsQuery,
} from "../features/services/shazamCore";
const SongDetails = () => {
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song, index) => {
    dispatch(setActiveSong({ song, relatedData, index }));
    dispatch(playPause(true));
  };
  const { songId, id } = useParams();

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data: trackData, isFetching: isFetchingTrack } =
    useGetTrackDetailQuery({ songId });
  const {
    data: relatedData,
    isFetching: isFetchingRelated,
    error,
  } = useGetRelatedSongsQuery({ songId });

  if (isFetchingTrack || isFetchingRelated) {
    return <Loader title="Searching song details...." />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={id} trackData={trackData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics :</h2>
        <div className="mt-5">
          {trackData?.sections[1].type === "LYRICS" ? (
            trackData?.sections[1].text.map((line, index) => (
              <p className="text-base text-gray-400 my-1">{line}</p>
            ))
          ) : (
            <p className="text-base text-gray-400 my-1">
              Sorry , no lyrics found!
            </p>
          )}
        </div>
      </div>
      <RelatedSongs
        artistId={id}
        relatedData={relatedData}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default SongDetails;

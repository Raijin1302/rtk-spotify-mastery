import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useGetArtistDetailQuery } from "../features/services/shazamCore";
const ArtistDetails = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { artistId } = useParams();
  const {
    data: artistData,
    isFetching,
    error,
  } = useGetArtistDetailQuery({ artistId });
  if (isFetching) {
    return <Loader title="Searching artist details" />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />

      <RelatedSongs
        artistId={artistId}
        relatedData={Object.values(artistData?.songs)}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;

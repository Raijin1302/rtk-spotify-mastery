import React from "react";
import { Error, Loader, ArtistCard } from "../components";
import { useGetTopChartsQuery } from "../features/services/shazamCore";
const TopCharts = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) {
    return <Loader title="Searching top artists details...." />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Artists
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, index) => (
          <ArtistCard key={song.key} song={song} />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;

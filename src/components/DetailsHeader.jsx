import React from "react"
import { Link } from "react-router-dom"

const DetailsHeader = ({ artistId, artistData, trackData }) => (
  <div className="relative w-full flex flex-col mx-auto">
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

    <div className="absolute inset-0 flex items-center">
      <img
        alt="profile"
        src={
          artistId
            ? artistData?.artists[artistId].attributes?.artwork?.url
                .replace("{w}", "500")
                .replace("{h}", "500")
            : trackData?.images?.coverart
        }
        className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
      />

      <div className="ml-5">
        <p className="font-bold sm:text-3xl text-xl text-white">
          {artistId
            ? artistData?.artists[artistId].attributes?.name
            : trackData?.title}
        </p>
        {!artistId && (
          <Link to={`/artists/${trackData?.artists[0]?.adamid}`}>
            <p className="text-base text-gray-400 mt-2">
              {trackData?.subtitle}
            </p>
          </Link>
        )}

        <p className="text-base text-gray-400 mt-2">
          {artistId
            ? artistData?.artists[artistId].attributes?.genreNames[0]
            : trackData?.genres?.primary}
        </p>
      </div>
    </div>

    <div className="w-full sm:h-44 h-24" />
  </div>
)

export default DetailsHeader

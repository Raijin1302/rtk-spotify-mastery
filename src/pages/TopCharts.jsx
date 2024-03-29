import axios from "axios"
import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Error, Loader, SongCard } from "../components"
import { useGetTopChartsQuery } from "../features/services/shazamCore"
const TopCharts = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data, isFetching, error } = useGetTopChartsQuery()

  if (isFetching) {
    return <Loader title="Searching top charts details...." />
  }

  if (error) {
    return <Error />
  }

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Charts
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-4">
        {data?.map((song, index) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default TopCharts

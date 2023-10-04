import React from "react"
import { useSelector } from "react-redux"
import { Error, Loader, SongCard } from "../components"
import { useGetSongsBySearchQuery } from "../features/services/shazamCore"
import { useParams } from "react-router-dom"

const Search = () => {
  const { searchString } = useParams()
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchString)

  if (isFetching) {
    return <Loader title={`Searching ${searchString}...`} />
  }

  if (error) {
    return <Error />
  }

  const songs = data?.tracks?.hits.map((songs) => songs.track)
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing result for
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-4">
        {songs?.map((song, index) => (
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

export default Search

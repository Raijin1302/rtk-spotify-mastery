import axios from "axios"
import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Error, Loader, SongCard } from "../components"
import { useGetChartByCountryQuery } from "../features/services/shazamCore"
const AroundYou = () => {
  const [country, setCountry] = useState("JP")
  const [loading, setLoading] = useState(true)
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data, isFetching, error } = useGetChartByCountryQuery(country)

  useEffect(() => {
    if (country) {
      setLoading(false)
    }
  }, [country])

  if (isFetching && loading) {
    return <Loader title="Searching chart details...." />
  }

  if (error && country) {
    return <Error />
  }
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://geo.ipify.org/api/v2/country?apiKey=${
  //         import.meta.env.VITE_GEO_API_KEY
  //       }`
  //     )
  //     .then((res) => setCountry(res?.data?.location.country))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, [country]);

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around you <span className="font-black">{country}</span>
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

export default AroundYou

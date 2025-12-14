"use client"

import React, { useEffect, useRef, useState } from "react"
import dynamic from 'next/dynamic'
import { Play, Pause, SkipBack, SkipForward } from "lucide-react"
import { trackList } from "@/public/assets"
const AudioPlayer = dynamic(
  () => import('react-h5-audio-player'),
  { ssr: false }
)
import 'react-h5-audio-player/lib/styles.css';

const Playlist = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const playerRef = useRef<any>(null)
  const [mounted, setMounted] = useState(false)

useEffect(() => {
  setMounted(true)
}, [])


    const togglePlay = () => {
  const audio = playerRef.current?.audio?.current
  if (!audio) return

  if (audio.paused) {
    audio.play()
    setIsPlaying(true)
  } else {
    audio.pause()
    setIsPlaying(false)
  }
}



    const nextTrack = () => {
        setCurrentTrack((prev) =>
            prev === trackList.length - 1 ? 0 : prev + 1
        )
        setIsPlaying(true)
    }

    const prevTrack = () => {
        setCurrentTrack((prev) =>
        prev === 0 ? trackList.length - 1 : prev - 1
        )
        setIsPlaying(true)
    }

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        if (isPlaying) {
            audio.play().catch(() => {})
        } else {
            audio.pause()
        }
    }, [isPlaying, currentTrack])



  return (
    <section className="play-section container">
      <h1 className="play-title">Dá o play</h1>

      <div className="play-content">
        <div className="tracklist">
          <h2>Tracklist</h2>

          <ul>
            {trackList.map((track, index) => (
              <li
                key={track.id}
                className={index === currentTrack ? "active" : ""}
                onClick={() => {
                  setCurrentTrack(index)
                  setIsPlaying(true)
                }}
              >
                <span>
                  {String(index + 1).padStart(2, "0")} - {track.title}
                </span>

                <span className="time">{track.duration}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="player">
          <h3>{trackList[currentTrack].title}</h3>
             <div className="audio-progress">
                {mounted && (
                  <AudioPlayer
                  ref={playerRef}
                  src={trackList[currentTrack].src}
                  autoPlay
                  showJumpControls={false}
                  showSkipControls={false}
                  showDownloadProgress={false}
                  customAdditionalControls={[]}
                  customVolumeControls={[]}
                  />
                )}
            </div>
          <div className="controls">
            <button onClick={prevTrack}>
              <SkipBack />
            </button>

            <button className="play" onClick={togglePlay}> {isPlaying ? <Pause /> : <Play />} </button>
            

            <button onClick={nextTrack}>
              <SkipForward />
            </button>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Playlist

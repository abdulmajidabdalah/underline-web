import React, { useRef, useState, useEffect } from "react";
import { songsdata } from "../audios";
import PlayerSongs from "./PlayerSongs";
import { TbDownload } from "react-icons/tb";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import bedaBiasa from "../assets/lagu/UNDERLINE - Beda Biasa (OFFICIAL AUDIO).mp3";
import akrk from "../assets/lagu/UNDERLINE - Aku Kamu Rindu Kita (OFFICIAL AUDIO & LYRIC).mp3";
import stl from "../assets/lagu/UNDERLINE - Sagara Tanah Legenda (Official Audio).mp3";

const Songs = () => {
  const [songs, setSongs] = useState(songsdata);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);
  const [duration, setDuration] = useState(0);
  const [cTime, setCTime] = useState(0);
  const audioElem = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
    const seconds = Math.floor(audioElem.current.duration);
    setDuration(seconds);
  }, [isPlaying]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
    setCTime(ct);
  };

  return (
    <div className="bg-dark-secondary py-6" id="songs">
      <h1 className="text-center capitalize text-2xl fontPoppins text-gold-primary">
        our songs
      </h1>
      <div className="lg:flex gap-2 lg:mx-10 mx-2 my-10">
        <div className="bg-dark-primary lg:w-[60%] px-2 py-2 rounded-md text-gold-secondary">
          <p className="text-center capitalize text-sm lg:text-2xl mb-5">
            You can instant play music for riview our songs
          </p>
          <p className="text-center capitalize text-xs lg:text-2xl">
            " setiap genre musik punya kharismanya sendiri, selama ia tak
            berpandu pada grafik popularitas dan matematika belaka "
          </p>
          <p className="text-center capitalize lg:text-2xl mb-3">- jerinx -</p>
          <p className="text-center capitalize text-lg lg:text-4xl mb-5">
            lets play the music, and enjoy your life
          </p>
          <audio
            src={currentSong.url}
            ref={audioElem}
            onTimeUpdate={onPlaying}
          />
          <PlayerSongs
            songs={songs}
            setSongs={setSongs}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            audioElem={audioElem}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            duration={duration}
            setDuration={setDuration}
            cTime={cTime}
            setCTime={setCTime}
            calculateTime={calculateTime}
          />
        </div>
        <div className="bg-dark-primary lg:w-[40%] lg:mt-0 mt-2 px-2 py-2 rounded-md text-gold-secondary">
          <h1 className="text-center lg:text-xl capitalize">
            You can also download or view our songs
          </h1>
          <h2 className="text-center text-lg capitalize">We have 3 songs</h2>
          <div className="">
            <div className="bg-light px-2 py-2 w-full rounded-sm text-dark-primary flex justify-start items-center gap-2 mb-2">
              <div className="bg-gold-primary px-2 py-2 rounded-[50%] h-[50px] w-[50px] flex justify-center items-center border border-dashed border-dark-primary">
                <p className="text-3xl fontLogo font-bold">1</p>
              </div>
              <div className="capitalize lg:text-center text-start">
                <p className="lg:text-xl text-sm fontLogo">
                  UNDERLINE - Beda Biasa (OFFICIAL AUDIO).mp3
                </p>
                <p className="text-sm text-slate-500 text-start">
                  lagu ini rilis pada 24 desember 2020
                </p>
                <div className="flex justify-start items-center gap-2 my-2">
                  <a
                    href={bedaBiasa}
                    download
                    className="bg-gold-primary px-2 py-1 rounded-md text-sm lg:text-[16px] lg:py-2 sm:text-xs text-light flex justify-center items-center gap-2"
                  >
                    Download <TbDownload />
                  </a>
                  <a
                    href="https://youtu.be/h6rCbHb6YkM"
                    target={"_blank"}
                    rel="noreferrer"
                    className="bg-gold-primary px-2 py-1 rounded-md text-sm lg:text-[16px] lg:py-2 sm:text-xs text-light flex justify-center items-center gap-2"
                  >
                    View Video <BsFillCollectionPlayFill />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-light px-2 py-2 w-full rounded-sm text-dark-primary flex justify-start items-center gap-2 mb-2">
              <div className="bg-gold-primary px-2 py-2 rounded-[50%] h-[50px] w-[50px] flex justify-center items-center border border-dashed border-dark-primary">
                <p className="text-3xl fontLogo font-bold">2</p>
              </div>
              <div className="capitalize lg:text-center">
                <p className="lg:text-xl text-sm fontLogo">
                  UNDERLINE - Aku Kamu Rindu Kita (OFFICIAL AUDIO).mp3
                </p>
                <p className="text-sm text-slate-500 text-start">
                  lagu ini rilis pada 24 desember 2020
                </p>
                <div className="flex justify-start items-center gap-2 my-2">
                  <a
                    href={akrk}
                    download
                    className="bg-gold-primary px-2 py-1 rounded-md text-sm lg:text-[16px] lg:py-2 sm:text-xs text-light flex justify-center items-center gap-2"
                  >
                    Download <TbDownload />
                  </a>
                  <a
                    href="https://youtu.be/L02-AwzilWk"
                    target={"_blank"}
                    rel="noreferrer"
                    className="bg-gold-primary px-2 py-1 rounded-md text-sm lg:text-[16px] lg:py-2 sm:text-xs text-light flex justify-center items-center gap-2"
                  >
                    View Video <BsFillCollectionPlayFill />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-light px-2 py-2 w-full rounded-sm text-dark-primary flex justify-start items-center gap-2 mb-2">
              <div className="bg-gold-primary px-2 py-2 rounded-[50%] h-[50px] w-[50px] flex justify-center items-center border border-dashed border-dark-primary">
                <p className="text-3xl fontLogo font-bold">3</p>
              </div>
              <div className="capitalize lg:text-center">
                <p className="lg:text-xl text-sm fontLogo">
                  UNDERLINE - Sagara Tanah Legenda (Official Audio)
                </p>
                <p className="text-sm text-slate-500 text-start">
                  lagu ini rilis pada 24 desember 2020
                </p>
                <div className="flex justify-start items-center gap-2 my-2">
                  <a
                    href={stl}
                    download
                    className="bg-gold-primary px-2 py-1 rounded-md text-sm lg:text-[16px] lg:py-2 sm:text-xs text-light flex justify-center items-center gap-2"
                  >
                    Download <TbDownload />
                  </a>
                  <a
                    href="https://youtu.be/daV4ZWiZoAw"
                    target={"_blank"}
                    rel="noreferrer"
                    className="bg-gold-primary px-2 py-1 rounded-md text-sm lg:text-[16px] lg:py-2 sm:text-xs text-light flex justify-center items-center gap-2"
                  >
                    View Video <BsFillCollectionPlayFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Songs;

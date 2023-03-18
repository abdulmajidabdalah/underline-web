import React, { useRef } from "react";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
  TbPlayerPlayFilled,
  TbPlayerPauseFilled,
} from "react-icons/tb";

const PlayerSongs = ({
  audioElem,
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  songs,
  setSongs,
  calculateTime,
  duration,
  setDuration,
  cTime,
  setCTime,
}) => {
  const clickRef = useRef();

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divProgress = (offset / width) * 100;
    audioElem.current.currentTime = (divProgress / 100) * currentSong.length;
  };

  const skipBack = () => {
    setIsPlaying(false);
    const i = songs.findIndex((x) => x.title === currentSong.title);
    if (i === 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[i - 1]);
    }
    audioElem.current.currentTime = 0;
  };

  const skiptoNext = () => {
    setIsPlaying(false);
    audioElem.current.currentTime = 0;
    const i = songs.findIndex((x) => x.title === currentSong.title);
    if (i === songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[i + 1]);
    }
  };

  return (
    <div>
      <div className="bg-light px-4 pt-10 py-5 text-dark-primary rounded-md">
        <p className="text-center lg:text-2xl">{currentSong.title}</p>
        <div className="flex justify-between items-center mb-[-1.2rem]">
          <p>{calculateTime(cTime)}</p>
          <p>{duration ? calculateTime(duration) : "00:00"}</p>
        </div>
        <div
          className="h-[5px] w-full bg-slate-400 my-5 hover:cursor-pointer"
          onClick={checkWidth}
          ref={clickRef}
        >
          <div
            className="h-[5px] bg-dark-secondary"
            style={{ width: `${currentSong.progress + "%"}` }}
          ></div>
        </div>
        <div className="flex justify-center items-center text-dark-primary gap-3">
          <div className="bg-dark-primary text-gold-secondary px-3 py-3 rounded-[50%]">
            <TbPlayerTrackPrevFilled onClick={skipBack} />
          </div>
          {isPlaying ? (
            <div className="bg-dark-primary text-gold-secondary px-3 py-3 rounded-[50%]">
              <TbPlayerPauseFilled onClick={handlePlay} size={40} />
            </div>
          ) : (
            <div className="bg-dark-primary text-gold-secondary px-3 py-3 rounded-[50%]">
              <TbPlayerPlayFilled onClick={handlePlay} size={40} />
            </div>
          )}
          <div className="bg-dark-primary text-gold-secondary px-3 py-3 rounded-[50%]">
            <TbPlayerTrackNextFilled onClick={skiptoNext} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSongs;

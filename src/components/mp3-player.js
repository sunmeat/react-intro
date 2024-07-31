import React, { useState, useRef, useEffect } from 'react';
import '../beauty/player.css';

import track1 from '../music/always.mp3';
import track2 from '../music/burned.mp3';
import track3 from '../music/drowning.mp3';
import track4 from '../music/embargo.mp3';
import track5 from '../music/face.mp3';
import track6 from '../music/feel.mp3';
import track7 from '../music/free.mp3';
import track8 from '../music/imagine.mp3';
import track9 from '../music/light.mp3';
import track10 from '../music/mirage.mp3';
import track11 from '../music/moment.mp3';
import track12 from '../music/song.mp3';
import track13 from '../music/wall.mp3';

const tracks = [
    { src: track1, title: 'Always' },
    { src: track2, title: 'Burned With Desire' },
    { src: track3, title: 'Drowning' },
    { src: track4, title: 'Embargo' },
    { src: track5, title: 'Face To Face' },
    { src: track6, title: 'Feel So Good' },
    { src: track7, title: 'Freefall' },
    { src: track8, title: 'Imagine' },
    { src: track9, title: 'This Light Between Us' },
    { src: track10, title: 'Mirage' },
    { src: track11, title: 'Take A Moment' },
    { src: track12, title: 'Song I Sing' },
    { src: track13, title: 'Wall Of Sound' }
];

const MusicPlayer = () => {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(null);
    const [isInitialized, setIsInitialized] = useState(false);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            if (audioRef.current.readyState >= 2) {
                audioRef.current.play();
            }
        }
        setIsPlaying(!isPlaying);
    };

    const handleNextTrack = () => {
        const nextIndex = (currentTrackIndex + 1) % tracks.length;
        setCurrentTrackIndex(nextIndex);
        setProgress(0);
        setIsPlaying(true);
    };

    const handlePreviousTrack = () => {
        const previousIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        setCurrentTrackIndex(previousIndex);
        setProgress(0);
        setIsPlaying(true);
    };

    const handleProgressChange = (event) => {
        const newValue = event.target.value;
        setProgress(newValue);
        if (audioRef.current) {
            audioRef.current.currentTime = (newValue / 100) * audioRef.current.duration;
        }
    };

    useEffect(() => {
        if (!isInitialized) return;
        const audio = audioRef.current;
        const updateProgress = () => {
            if (audio) {
                setProgress((audio.currentTime / audio.duration) * 100);
            }
        };
        audio.addEventListener('timeupdate', updateProgress);
        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
        };
    }, [isPlaying, isInitialized]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsInitialized(true);
            if (isPlaying) {
                audioRef.current.play();
            }
        }
    }, [currentTrackIndex]);

    return (
        <div className="music-player">
            <h2 className="player-title">Вы только послушайте:</h2>
            <div className="track-info">
                <h3 className="track-title">Armin van Buuren - {tracks[currentTrackIndex].title}</h3>
                <audio
                    ref={audioRef}
                    src={tracks[currentTrackIndex].src}
                    onEnded={handleNextTrack}
                >
                    Ваш браузер не поддерживает элемент <code>audio</code>.
                </audio>
                <div className="player-controls">
                    <button className="control-button" onClick={handlePreviousTrack}>⏮️</button>
                    <button className="control-button" onClick={handlePlayPause}>
                        {isPlaying ? '⏸️' : '▶️'}
                    </button>
                    <button className="control-button" onClick={handleNextTrack}>⏭️</button>
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleProgressChange}
                    className="progress-bar"
                />
            </div>
            {!isInitialized && <button onClick={() => audioRef.current.play()}>Play</button>}
        </div>
    );
};

export default MusicPlayer;
import React from 'react';
import '../beauty/armin.css'; 
import artistImage from '../images/armin.jpg';
import MusicPlayer from './mp3-player'; // импорт дочернего компонента
import PhotoGrid from './insta'; // импорт компонента сетки фотографий

const ArtistInfo = () => {
    const albums = [
        {
            title: 'Shivers',
            year: 2005,
            description: 'Первый альбом, который принес Armin van Buuren международную популярность. Он включает в себя хиты, такие как "Shivers" и "Serenity".'
        },
        {
            title: 'Intense',
            year: 2013,
            description: 'Альбом, который продемонстрировал развитие стиля Armin van Buuren, включая более разнообразные музыкальные направления. Включает треки, такие как "This Is What It Feels Like" и "Beautiful Life".'
        },
        {
            title: 'Embrace',
            year: 2015,
            description: 'Альбом, который отметил продолжение эволюции музыкального стиля Armin van Buuren. Отличается высоким качеством продакшена и глубокими текстами.'
        },
        {
            title: 'Balance',
            year: 2019,
            description: 'Альбом, который является результатом многолетнего опыта и экспериментов в музыке. Включает множество коллабораций и различные музыкальные стили.'
        }
    ];

    return (
        <div className="artist">
            <div className="artist-image">
                <img src={artistImage} alt="Armin van Buuren" className="artist-photo" />
            </div>
            <div className="artist-name">
                <h1 className="name">Armin van Buuren</h1>
            </div>
            <div className="artist-genre">
                <span className="genre">The Best Trance / EDM / Progressive House DJ in the world!</span>
            </div>
            <div className="artist-bio">
                <h2 className="bio-title">Биография:</h2>
                <p className="bio-text">
                    Armin van Buuren — один из самых известных и уважаемых диджеев и продюсеров в мире трансовой музыки. Его карьера началась в начале 2000-х годов, и с тех пор он стал известен своими живыми выступлениями и уникальным музыкальным стилем. Его музыкальные произведения часто получают награды и признание на международной арене.
                </p>
            </div>
            <div className="artist-albums">
                <h2 className="albums-title">Альбомы:</h2>
                {albums.map((album, index) => (
                    <div className="album" key={index}>
                        <h3 className="album-title">{album.title} ({album.year})</h3>
                        <p className="album-description">{album.description}</p>
                    </div>
                ))}
            </div>
            <div className="artist-music-player">
                <MusicPlayer /> {/* вставка компонента MP3-плеера */}
            </div>
            <div className="artist-photo-grid">
                <PhotoGrid /> {/* вставка компонента сетки фотографий как в инсте */}
            </div>
        </div>
    );
};

export default ArtistInfo;
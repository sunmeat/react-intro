import React from 'react';
import '../beauty/insta.css';

import photo1 from '../images/armin/1.jpg';
import photo2 from '../images/armin/2.jpg';
import photo3 from '../images/armin/3.jpg';
import photo4 from '../images/armin/4.jpg';
import photo5 from '../images/armin/5.jpg';
import photo6 from '../images/armin/6.jpg';
import photo7 from '../images/armin/7.jpg';
import photo8 from '../images/armin/8.jpg';
import photo9 from '../images/armin/9.jpg';
import photo10 from '../images/armin/10.jpg';
import photo11 from '../images/armin/11.jpg';
import photo12 from '../images/armin/12.jpg';
import photo13 from '../images/armin/13.jpg';
import photo14 from '../images/armin/14.jpg';
import photo15 from '../images/armin/15.jpg';
import photo16 from '../images/armin/16.jpg';
import photo17 from '../images/armin/17.jpg';
import photo18 from '../images/armin/18.jpg';
import photo19 from '../images/armin/19.jpg';
import photo21 from '../images/armin/21.jpg';
import photo23 from '../images/armin/23.jpg';

const photos = [
    photo1, photo2, photo3,
    photo4, photo5, photo6,
    photo7, photo8, photo9,
    photo10, photo11, photo12,
    photo13, photo21, photo15,
    photo16, photo17, photo18,
    photo19, photo14,
    photo23
];

const PhotoGrid = () => {
    return (
        <div className="photo-grid">
            {photos.map((photo, index) => (
                <div key={index} className="photo-item">
                    <img src={photo} alt={`Photo ${index + 1}`} className="photo-image" />
                </div>
            ))}
        </div>
    );
};

export default PhotoGrid;
import React, { useState, useEffect } from 'react';
import './fonts/font-list.css';
import './App.css';
import Alex from './components/task1-about';
import OdessaInfo from './components/task2-city';
import BookInfo from './components/task3-book';
import ArtistInfo from './components/task4-group';
import MusicPlayer from './components/mp3-player';
import PhotoGrid from './components/insta';
import Recipe from './components/task5-receipt';

function App() {
  const [currentComponent, setCurrentComponent] = useState('Recipe');

  // !!! прокрутка страницы вверх при смене раздела
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentComponent]);

  const renderComponent = () => {
    switch (currentComponent) {
      case 'Alex':
        return <Alex />;
      case 'OdessaInfo':
        return <OdessaInfo />;
      case 'BookInfo':
        return <BookInfo />;
      case 'ArtistInfo':
        return <ArtistInfo />;
      case 'Recipe':
      default:
        return <Recipe />;
    }
  };

  return (
    <div className="App">
      <nav className="menu">
        <button onClick={() => setCurrentComponent('Alex')} className="menu-button">Визитка</button>
        <button onClick={() => setCurrentComponent('OdessaInfo')} className="menu-button">Одесса</button>
        <button onClick={() => setCurrentComponent('BookInfo')} className="menu-button">Книга</button>
        <button onClick={() => setCurrentComponent('ArtistInfo')} className="menu-button">Артист</button>
        <button onClick={() => setCurrentComponent('Recipe')} className="menu-button">Рецепт</button>
      </nav>
      <main>
        {renderComponent()}
      </main>
    </div>
  );
}

export default App;
// src/App.js
import React from 'react';
import Card from './components/Card';

const App = () => {
  
  
  return (
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4"></h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
            <Card
              title="Darshan"
              age="18"
              image="/img/Photo.jpg"
              profession="Student"
            />
            <Card
              title="MS Dhoni"
              age="42"
              image="/img/download.jpeg"
              profession="Cricketer"
            />
            <Card
              title="Virat Kohli"
              age="34"
              image="/img/kohli.jpeg"
              profession="Cricketer"
            />
            <Card
              title="Suresh Raina"
              age="36"
              image="/img/sr.jpeg"
              profession="Cricketer"
            />
          </div>
        </div>
      </div>
    
  );
};

export default App;

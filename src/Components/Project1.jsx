import React, { useEffect, useRef, useState } from 'react';

const images = [
  './image/Screenshot 2025-05-10 090755.png',
  './image/Screenshot 2025-05-10 091108.pdf.png',
  './image/Screenshot 2025-05-10 091331.png',
  './image/Screenshot 2025-05-10 091500.png',
];

const Project1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const GitHub1 = () => {
    window.open('https://github.com/Deepakkumar8969/Weather-App-Project-');
  };

  return (
    <div className="project1">
      <div className="project1-pic">
        <div id="image">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`slide-${index}`}
              className={index === currentIndex ? 'active' : ''}
              style={{ display: index === currentIndex ? 'block' : 'none' }}
            />
          ))}
        </div>
      </div>
      <div className="project1-write">
        <p>WEATHER APP PROJECT</p>
        <ul>
          <li>Built a fully functional dynamic web app.</li>
          <li>Allows user to get accurate weather information of any location in world.</li>
          <li>Tech:- HTML, CSS, JAVASCRIPT, React JS, GitHub, Vercel etc</li>
        </ul>
        <button onClick={GitHub1}>Read More</button>
      </div>
    </div>
  );
};

export default Project1;

import React, { useEffect, useState } from 'react';

const images = [
  './image/page6.png',
  './image/page2.png',
  './image/page4.png',
  './image/page3.png',
  './image/page5.png',
];

const Project3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const GitHub3 = () => {
    window.open('https://github.com/Deepakkumar8969/USER-APP-PROJECT');
  };

  return (
    <div className="project3">
      <div className="project3-pic">
        <div id="image2">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`slide-${index}`}
              className={index === currentIndex ? 'active2' : ''}
              style={{ display: index === currentIndex ? 'block' : 'none' }}
            />
          ))}
        </div>
      </div>
      <div className="project3-write">
        <p>USER APP PROJECT</p>
        <ul>
          <li>Built a user management system with JSP, Servlets, JDBC, and MySQL using the DAO pattern.</li>
          <li>Implemented MVC architecture for clean and maintainable code.</li>
          <li>Tech:- JDBC, SERVLET, JSP, MySQL, Data Access Object, Controller</li>
        </ul>
        <button onClick={GitHub3}>Read More</button>
      </div>
    </div>
  );
};

export default Project3;

import React, { useEffect, useState } from 'react';

const imageList = [
  './image/bank1.png',
  './image/bank2.png',
  './image/bank3.png',
  './image/bank4.png',
  './image/bank5.png',
  './image/bank6.png',
  './image/bank7.png',
  './image/bank8.png',
  './image/bank9.png',
  './image/bank10.png',
  './image/bank11.png',
  './image/bank12.png',
  './image/bank13.png',
  './image/bank14.png',
  './image/bank15.png',
  './image/bank16.png',
  './image/bank17.png',
  './image/bank18.png',
  './image/bank19.png',
  './image/bank20.png',
];

const Project2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 2000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const GitHub2 = () => {
    window.open('https://github.com/Deepakkumar8969/Banking-Application-Project');
  };

  return (
    <div className="project2">
      <div className="project2-pic">
        <div id="image1">
          {imageList.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`bank-${index}`}
              className={index === currentIndex ? 'active1' : ''}
              style={{ display: index === currentIndex ? 'block' : 'none' }}
            />
          ))}
        </div>
      </div>
      <div className="project2-write">
        <p>BANKING APPLICATION</p>
        <ul>
          <li>Built a Java EE-based banking application with user management, loan processing, and transactions using Spring Boot, JSP, and JDBC.</li>
          <li>Implemented secure user authentication and optimized database interactions with JDBC and Spring Data JPA for efficient data management.</li>
          <li>Tech:- Spring Boot, Spring Data JPA, REST API, Postman</li>
        </ul>
        <button onClick={GitHub2}>Read More</button>
      </div>
    </div>
  );
};

export default Project2;

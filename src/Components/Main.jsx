import React, { useEffect, useState } from 'react';

const Main = () => {
  const roles = [
    "Java Full Stack Developer",
    "Frontend Developer",
    "Backend Developer"
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const Resume = () => {
    window.open("https://drive.google.com/file/d/1S1-ut6e0Kfx1Y8WVOWMJ7dtgGUZrCDI-/view?usp=sharing", "_blank");
  };

  return (
    <div>
      <main>
        <div className="part1">
          <h1>Hi! I'm Deepak Kumar</h1>

          <div className="role-container">
            <span>I am a </span>
            <span
              className="role-text"
            >
              {roles[index]}
            </span>
          </div>

          <p>
            I'm a software developer and here is my portfolio website. Here you'll
            learn about my journey as a software developer.
          </p>

          <button>hire me</button>
          <button onClick={Resume}>Resume</button>
        </div>

        <div className="part2">
          <img src="./image/deepak-kumar.JPG" alt="Deepak Kumar" />
        </div>
      </main>
    </div>
  );
};

export default Main;

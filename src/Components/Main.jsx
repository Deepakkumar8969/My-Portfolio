import React from 'react'

const Main = () => {

    const roles = [
     "Java Full Stack Developer",
     "Frontend Developer",
     "Backend Developer"
     ];

    let index = 0;
    const roleElement = document.getElementById("role");

    function changeRole() {
      roleElement.style.opacity = 0;
      setTimeout(() => {
      index = (index + 1) % roles.length;
      roleElement.textContent = roles[index];
      roleElement.style.opacity = 1;
  }, 500);
}

setInterval(changeRole, 3000); // Change every 3 seconds

// Resume link

   function Resume() {
            window.open("https://drive.google.com/file/d/1JZpdr-5g0caiEFGQ--knyUyMK6Ns_Ny4/view?usp=sharing");
        }

        
  return (
    <div>
      <main>
        <div class="part1">
            <h1> Hi! Deepak Kumar </h1>

            <div class="role-container">
               <span>I am a </span>
               <span id="role" class="role-text">Java Full Stack Developer</span>
            </div>

            <p> I'm a software developer and here is my portfolio website. Here you'll learn about my journey as a software developer. </p>

            <button> hire me </button>
            <button onClick={Resume}> Resume </button>

        </div>

        <div class="part2">
              <img src="./image/deepak-kumar.JPG" alt="image not found"/>
        </div>
    </main>
    </div>
  )
}

export default Main

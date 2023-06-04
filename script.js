// Adds dark/light mode functionality
// let toggle = document.querySelector('#dark-mode-toggle');
// toggle.addEventListener('click', () => { 
//   updateMode();
// })

function updateMode() {
  let mode = toggle.checked ? 'dark' : 'light';
  saveColorMode(mode);
  setColorMode(mode);
  saveToggle();
}

function loadToggle() {    
  var checked = JSON.parse(window.localStorage.getItem('dark-mode-toggle'));
  document.getElementById("dark-mode-toggle").checked = checked;
}

// loadToggle();

function saveToggle() {
  var checkbox = document.getElementById('dark-mode-toggle');
  window.localStorage.setItem('dark-mode-toggle', checkbox.checked);
}

// Creates lightbox effect
var images = document.querySelectorAll(".image");
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    var imageUrl = this.src;
    var lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    var image = document.createElement("img");
    image.src = imageUrl;
    lightbox.appendChild(image);
    document.body.appendChild(lightbox);
    lightbox.addEventListener("click", function() {
      document.body.removeChild(lightbox);
    });
  });
}

// Adds navigation functionality.
let contactBtn = document.querySelector('#contact-link');

contactBtn.addEventListener('click', () => {
  const bio = document.getElementById('bio');
  const resume = document.getElementById('resume');
  const contact = document.getElementById('contact');
  const recentWork = document.getElementById('recent-work');
  const sideMenu = document.getElementById('side-menu');
  sideMenu.checked = false;
  if (!bio.classList.contains("hide")) {
    bio.classList.add("hide");
  }
  if (!resume.classList.contains("hide")) {
    resume.classList.add("hide");
  }
  if (!recentWork.classList.contains("hide")) {
    recentWork.classList.add("hide");
  }
  if (contact.classList.contains("hide")) {
    contact.classList.remove("hide");
  }
})

let resumeBtn = document.querySelector('#resume-link');

resumeBtn.addEventListener('click', () => {
  const bio = document.getElementById('bio');
  const contact = document.getElementById('contact');
  const resume = document.getElementById('resume');
  const recentWork = document.getElementById('recent-work');
  const sideMenu = document.getElementById('side-menu');
  sideMenu.checked = false;
  if (!bio.classList.contains("hide")) {
    bio.classList.add("hide");
  }
  if (!contact.classList.contains("hide")) {
    contact.classList.add("hide");
  }
  if (!recentWork.classList.contains("hide")) {
    recentWork.classList.add("hide");
  }
  if (resume.classList.contains("hide")) {
    resume.classList.remove("hide");
  }
})

let recentWorkBtn = document.querySelector('#recent-work-link')
recentWorkBtn.addEventListener('click', () => {
  const bio = document.getElementById('bio');
  const contact = document.getElementById('contact');
  const resume = document.getElementById('resume');
  const recentWork = document.getElementById('recent-work');
  const sideMenu = document.getElementById('side-menu');
  sideMenu.checked = false;
  if (!bio.classList.contains("hide")) {
    bio.classList.add("hide");
  }
  if (!contact.classList.contains("hide")) {
    contact.classList.add("hide");
  }
  if (!resume.classList.contains("hide")) {
    resume.classList.add("hide");
  }
  if (recentWork.classList.contains("hide")) {
    recentWork.classList.remove("hide");
  }
})

let indexBtn = document.querySelector('#index-link')
indexBtn.addEventListener('click', () => {
  const bio = document.getElementById('bio');
  const contact = document.getElementById('contact');
  const resume = document.getElementById('resume');
  const recentWork = document.getElementById('recent-work');
  const sideMenu = document.getElementById('side-menu');
  sideMenu.checked = false;
  if (!contact.classList.contains("hide")) {
    contact.classList.add("hide");
  }
  if (!resume.classList.contains("hide")) {
    resume.classList.add("hide");
  }
  if (bio.classList.contains("hide")) {
    bio.classList.remove("hide");
  }
  if (recentWork.classList.contains("hide")) {
    recentWork.classList.remove("hide");
  }
})

// let mobileMenuBtn = document.querySelector('#mobile-menu-icon')
// mobileMenuBtn.addEventListener('click', () => {
//   const mobileMenu = document.getElementById('mobile-menu');
//   if (!mobileMenu.classList.contains("hide")) {
//     mobileMenu.classList.add("hide");
//   }
//   else {
//     mobileMenu.classList.remove("hide");
//   }
// })

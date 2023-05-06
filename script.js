class CssPropControl {
  constructor(element) {
    this.element = element;
  }
  get(varName) {
    return getComputedStyle(this.element).getPropertyValue(varName);
  }
  set(varName, val) {
    return this.element.style.setProperty(varName, val);
  }
}

const bodyCssProps = new CssPropControl(document.body);

// Adds navigation functionality.
let contactBtn = document.querySelector('#contact-link');

contactBtn.addEventListener('click', () => {
  const bio = document.getElementById('bio');
  const resume = document.getElementById('resume');
  const contact = document.getElementById('contact');
  const recentWork = document.getElementById('recent-work');
  if (!bio.classList.contains("hide")) {
    bio.classList.add("hide");
  }
  if (!resume.classList.contains("hide")) {
    resume.classList.add("hide");
  }
  if (recentWork.classList.contains("hide")) {
    recentWork.classList.remove("hide");
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
  if (!bio.classList.contains("hide")) {
    bio.classList.add("hide");
  }
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

let indexBtn = document.querySelector('#index-link')
indexBtn.addEventListener('click', () => {
  const bio = document.getElementById('bio');
  const contact = document.getElementById('contact');
  const resume = document.getElementById('resume');
  const recentWork = document.getElementById('recent-work');
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

// Adds dark/light mode functionality
let toggle = document.querySelector('#dark-mode-toggle');
toggle.addEventListener('click', () => { 
  setMode();
  save();
})

function setMode() {
  let mode = toggle.checked ? 'dark' : 'light';
  bodyCssProps.set('--background', bodyCssProps.get(`--${mode}-background`));
  bodyCssProps.set('--primary', bodyCssProps.get(`--${mode}-primary`));
  bodyCssProps.set('--link', bodyCssProps.get(`--${mode}-link`));
}

function load() {    
  var checked = JSON.parse(localStorage.getItem('dark-mode-toggle'));
  document.getElementById("dark-mode-toggle").checked = checked;
  setMode();
}

function save() {
  var checkbox = document.getElementById('dark-mode-toggle');
  localStorage.setItem('dark-mode-toggle', checkbox.checked);
}
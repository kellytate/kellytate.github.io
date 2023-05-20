function saveColorMode(currentColorMode) {
  window.localStorage.setItem('kellytate-theme', currentColorMode);
}

function getColorMode() {
  if (window.localStorage.getItem('kellytate-theme')) {
    let theme = window.localStorage.getItem('kellytate-theme');
    return theme;
  }
  else {
    saveColorMode();
  }
}

function setColorMode() {
  let colorMode = getColorMode();

  if (colorMode === 'dark') {
    document.documentElement.classList.add('dark-theme');
    document.documentElement.classList.remove('light-theme');
  }
  else {
    document.documentElement.classList.add('light-theme');
    document.documentElement.classList.remove('dark-theme');
  }
}
setColorMode();
class CssPropControl {
  constructor(element) {
    this.element = element
  }
  get(varName) {
    return getComputedStyle(this.element).getPropertyValue(varName)
  }
  set(varName, val) {
    return this.element.style.setProperty(varName, val)
  }
}

const bodyCssProps = new CssPropControl(document.body)

let toggle = document.querySelector('#dark-mode-toggle')

toggle.addEventListener('click', () => { 
  setMode()
  save()
})

function setMode() {
  let mode = toggle.checked ? 'dark' : 'light'
  bodyCssProps.set('--background', bodyCssProps.get(`--${mode}-background`))
  bodyCssProps.set('--primary', bodyCssProps.get(`--${mode}-primary`))
  bodyCssProps.set('--link', bodyCssProps.get(`--${mode}-link`))
}

function load() {    
  var checked = JSON.parse(localStorage.getItem('dark-mode-toggle'));
  document.getElementById("dark-mode-toggle").checked = checked;
  setMode()
}

function save() {
  var checkbox = document.getElementById('dark-mode-toggle');
  localStorage.setItem('dark-mode-toggle', checkbox.checked);
}
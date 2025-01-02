const navContainer = document.getElementById('nav-container');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle){
  navToggle.addEventListener("click", () => {
    navContainer.classList.add("show-menu");
  })
}

if (navClose){
  navClose.addEventListener("click", () => {
    navContainer.classList.remove("show-menu");
  })
}


const input = document.getElementById('input');
const canvas = document.getElementById('qr');

const createQR = v => {
  return new QRious({
    element: canvas,
    value: v,
    size: 400,
    backgroundAlpha: 0,
    foreground: 'white'
  });
};

const qr = createQR(input.value);
input.addEventListener("input", () => {
  const qr = createQR(input.value);
});


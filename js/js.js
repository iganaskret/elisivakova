function cv() {
  window.open("http://eliskasivakova.dk/CV_Eliska_Sivakova.pdf");
}

function btn1() {
  window.open("https://www.instagram.com/elisivakova/");
}

function btn2() {
  window.open(
    "https://www.linkedin.com/in/eli%C5%A1ka-siv%C3%A1kov%C3%A1-920843134/"
  );
}

function btn3() {
  window.open("https://www.behance.net/elisivakovd6b3");
}

let root = document.documentElement;

// get the element to animate
let element = document.querySelector("#test");
let elements = document.querySelectorAll(".skill-level");
let elementHeight = element.clientHeight;

// listen for scroll event and call animate function
document.addEventListener("scroll", animate);

// check if element is in view
function inView() {
  // get window height
  let windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  let scrollY = window.scrollY || window.pageYOffset;

  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  let scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  let elementPosition =
    element.getBoundingClientRect().top + scrollY + elementHeight;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

// animate element when it is in view
function animate() {
  // is element in view?
  if (inView()) {
    // element is in view, add class to element
    // root.style.setProperty("--design-skill", "55%");
    elements.forEach(function animate(e) {
      e.classList.add("animate");
    });
  }
}

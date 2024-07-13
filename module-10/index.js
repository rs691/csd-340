const hoverArea = document.querySelector('.hover-area');
const flower = document.querySelector('.flower');
const stem = document.querySelector('.stem');
const bloom = document.querySelector('.bloom');
// love variables
let growthInterval;
let shrinkInterval;
const initialHeight = 80; // Match the initial stem height in CSS
const maxHeight = 500;
const growthStep = 5;
const growthDelay = 20;
const shrinkStep = 10;
const shrinkDelay = 10;

function growFlower() {
  clearInterval(shrinkInterval);
  let currentHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--stem-height'));
  // increase the height of the stem
  growthInterval = setInterval(() => {
    if (currentHeight < maxHeight) {
      currentHeight += growthStep;
      document.documentElement.style.setProperty('--stem-height', `${currentHeight}px`);
      document.documentElement.style.setProperty('--bloom-translate', `-${currentHeight}px`);
    } else {
      clearInterval(growthInterval);
    }
  }, growthDelay);
}

function shrinkFlower() {
  clearInterval(growthInterval);
  let currentHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--stem-height'));
  
  shrinkInterval = setInterval(() => {
    if (currentHeight > initialHeight) {
      currentHeight -= shrinkStep;
      if (currentHeight < initialHeight) currentHeight = initialHeight; // Don't go below initial height
      document.documentElement.style.setProperty('--stem-height', `${currentHeight}px`);
      document.documentElement.style.setProperty('--bloom-translate', `-${currentHeight}px`);
    } else {
      clearInterval(shrinkInterval);
    }
  }, shrinkDelay);
}

hoverArea.addEventListener('mouseenter', growFlower);
hoverArea.addEventListener('mouseleave', shrinkFlower);
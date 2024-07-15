const initialHeight = 80; // Match the initial stem height in CSS
const maxHeight = 500;
const growthStep = 5;

let isGrowing = false;

function toggleFlower() {
    let currentHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--stem-height'));
    
    if (!isGrowing && currentHeight < maxHeight) {
        growFlower(currentHeight);
    } else {
        shrinkFlower(currentHeight);
    }
}

function growFlower(startHeight) {
    isGrowing = true;
    let currentHeight = startHeight;
    
    function grow() {
        if (currentHeight < maxHeight) {
            currentHeight += growthStep;
            updateFlower(currentHeight);
            requestAnimationFrame(grow);
        } else {
            isGrowing = false;
        }
    }
    
    grow();
}

function shrinkFlower(startHeight) {
    isGrowing = false;
    let currentHeight = startHeight;
    
    function shrink() {
        if (currentHeight > initialHeight) {
            currentHeight -= growthStep;
            if (currentHeight < initialHeight) currentHeight = initialHeight;
            updateFlower(currentHeight);
            requestAnimationFrame(shrink);
        }
    }
    
    shrink();
}

function updateFlower(height) {
    document.documentElement.style.setProperty('--stem-height', `${height}px`);
    document.documentElement.style.setProperty('--bloom-translate', `-${height}px`);
}
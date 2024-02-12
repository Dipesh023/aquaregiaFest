let arrow2 = document.getElementById("arrow");
let arrow = document.getElementById("rulesHeaderTitle");
let rulesContent = document.getElementById("rulesContent");
let profileCardContainer = document.getElementById("profileCardContainer");
let smallDeviceProfileContainer = document.getElementById("smallDeviceProfileContainer");
let coordinatorsss = document.getElementById('coordinatorsss');

let active = false;
arrow2.addEventListener("click", function() {
    if (active === false) {
        rulesAppear();
        active = true;
    } else {
        rulesDisappear();
        active = false;
    }
});

arrow.addEventListener("click", function() {
    if (active === false) {
        rulesAppear();
        active = true;
    } else {
        rulesDisappear();
        active = false;
    }
});


function rulesAppear(e) {
    var viewportWidth = window.innerWidth;

    arrow2.style.transform = 'rotate(180deg)';
    arrow2.style.translate = '12px';
    rulesContent.style.transform = 'scaleY(1)';
    rulesContent.style.transformOrigin = "top";
    rulesContent.style.opacity = '1';
    arrow2.style.transitionDuration = '.5s';
    rulesContent.style.transitionDuration = '.5s';
    
    // profile card
    if (viewportWidth <= 1020) {
        // Apply styles for small screens
        profileCardContainer.style.display = 'none';
        profileCardContainer.style.opacity = '0';
        
        smallDeviceProfileContainer.style.display = 'flex';
        smallDeviceProfileContainer.style.transformOrigin = "top";
        smallDeviceProfileContainer.style.opacity = '1';
    } else {
        // Apply styles for larger screens
        profileCardContainer.style.display = 'flex';
        profileCardContainer.style.transformOrigin = "top";
        profileCardContainer.style.opacity = '1';

        smallDeviceProfileContainer.style.display = 'none';
        smallDeviceProfileContainer.style.opacity = '0';
    }

    coordinatorsss.scrollIntoView();
}

function rulesDisappear(e) {
    arrow2.style.transform = 'rotate(-0deg)';
    arrow2.style.translate = '0px';
    rulesContent.style.opacity = '0';
    rulesContent.style.transform = 'scaleY(0)';

    profileCardContainer.style.display = 'none';
    profileCardContainer.style.opacity = '0';
    smallDeviceProfileContainer.style.display = 'none';
    smallDeviceProfileContainer.style.opacity = '0';
}


let scrolldown = document.getElementById('scrolldown');

scrolldown.addEventListener('click', scrolldownfunction);

function scrolldownfunction() {
    coordinatorsss.scrollIntoView();
}
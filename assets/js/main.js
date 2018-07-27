function scrollBanner() {
    var scrollPos;
    var headerHeight = document.querySelector('.headerarea').offsetHeight;
    var headerText = document.querySelector('.headerarea__wrapper');
    scrollPos = window.scrollY;

    if (scrollPos <= headerHeight) {
        headerText.style.transform = "translateY(" + (-scrollPos / 3) + "px" + ")";
        headerText.style.opacity = 1 - (scrollPos / headerHeight);
        headerBg.style.backgroundPosition  = "0px " + (scrollPos / 2) + "px";
    }
}
 
window.addEventListener('scroll', scrollBanner);
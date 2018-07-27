function scrollBanner() {
    var scrollPos;
    var pos = 0;
    var headerText = document.querySelector('.headerarea__wrapper');
    var headerBg = document.querySelector('.headerarea');
    scrollPos = window.scrollY;

    if (scrollPos <= 500) {
        headerText.style.transform = "translateY(" + (-scrollPos / 3) + "px" + ")";
        headerText.style.opacity = 1 - (scrollPos / 500);
        headerBg.style.backgroundPosition  = "0px " + (scrollPos / 5) + "px";
    }
}
 
window.addEventListener('scroll', scrollBanner);
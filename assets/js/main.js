function scrollBanner() {
    var scrollPos;
    var headerHeight = document.querySelector('.headerarea').offsetHeight;
    var headerText = document.querySelector('.headerarea__wrapper');
    var header = document.querySelector('.mainheader');
    scrollPos = window.scrollY;

    if (scrollPos <= headerHeight) {
        headerText.style.transform = "translateY(" + (-scrollPos / 3) + "px" + ")";
        headerText.style.opacity = 1 - (scrollPos / headerHeight);     
    }


    if (scrollPos > 590){
       header.className = "mainheader mainheader--fixed";
    } else {
        header.className = "mainheader";
    }
   
}
 
window.addEventListener('scroll', scrollBanner);


var feed = new Instafeed({
    get: 'user',
    userId: '22827060',
    clientId: '716715bc2b8c4d19a26ee83328ccf923',
    accessToken: '22827060.ba4c844.aa2e55c1f79947008c852de12e185569',
    resolution: 'standard_resolution',
    limit: 6,
    template: '<img class="footer__instagram__feed__img" alt="{{caption}}" src="{{image}}" />'
});
feed.run();


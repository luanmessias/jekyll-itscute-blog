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

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v3.1';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


var feed = new Instafeed({
    get: 'user',
    userId: '22827060',
    clientId: '716715bc2b8c4d19a26ee83328ccf923',
    accessToken: '22827060.ba4c844.aa2e55c1f79947008c852de12e185569',
    resolution: 'low_resolution',
    limit: 6,
    //template: '<img class="footer__instagram__feed__img" alt="{{caption}}" src="/assets/img/blank.jpg" data-echo="{{image}}" orientation="{{square}}" />'
    template: '<div class="footer__instagram__feed__cont" style="background-image: url({{image}})"></div>'
});
feed.run();

function scrollTo(element) {
    scrollIt(
        document.querySelector(element),
        1000,
        'easeInOutQuint'
    );
}


grecaptcha.ready(function() {
    grecaptcha.execute('6Lcuv4cUAAAAAHIUxwL7OiwWyY9XN4XQA_CHsT28', {action: 'action_name'})
    .then(function(token) {
    // Verify the token on the server.
    });
});


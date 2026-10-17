(function() {
    var urlMap = {
        'a': 'https://alpha.magiclinking.website',
        's': 'https://sigma.magiclinking.website',
        'o': 'https://go.magiclinking.website',
        'z': 'https://zeta.magiclinking.website',
        'd': 'https://wp.me/PeZLar-6',
        'l': 'https://loopbackcenter.website'
    };
    var links = document.querySelectorAll('a[data-target]');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(event) {
            event.preventDefault();
            var key = this.getAttribute('data-target');
            var targetUrl = urlMap[key];
            if (targetUrl) {
                window.open(targetUrl, '_blank', 'noopener,noreferrer');
            }
        });
    }
})();

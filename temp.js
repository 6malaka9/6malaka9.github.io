document.addEventListener('DOMContentLoaded', function() {
    var secureUrlMap = {
        'a': 'https://alpha.magiclinking.website',
        's': 'https://sigma.magiclinking.website',
        'o': 'https://go.magiclinking.website',
        'z': 'https://zeta.magiclinking.website',
        'd': 'https://wp.me/PeZLar-6',
        'l': 'https://loopbackcenter.website'
    };
    var targetLinks = document.querySelectorAll('a[data-target]');
    for (var i = 0; i < targetLinks.length; i++) {
        targetLinks[i].addEventListener('click', function(event) {
            event.preventDefault(); 
            var key = this.getAttribute('data-target');
            var targetUrl = secureUrlMap[key];
            if (targetUrl) {
                window.open(targetUrl, '_blank', 'noopener,noreferrer');
            }
        });
    }
});

function loadVConsole(path) {
    var isLoaded = false;
    if (!isLoaded) {
        var tag = document.createElement('script');
        document.body.appendChild(tag);
        tag.type = 'text/javascript';
        tag.src = path + '/vconsole.min.js';
        isLoaded = true;
    }
}
var hostname = window.location.hostname.toLowerCase();
if (hostname.indexOf('qa') || hostname.index('localhost')) {
    //加载vConsole 方便手机调试；
    loadVConsole('static/js')
}

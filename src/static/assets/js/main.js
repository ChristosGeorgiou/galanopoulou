(function() {

    'use strict';

    var _jquery = "//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min";
    var _libs = [
        "//netdna.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js",
        "//cdnjs.cloudflare.com/ajax/libs/simple-text-rotator/1.0.0/jquery.simple-text-rotator.min.js",
    ];
    var _scripts = [
        '/assets/js/contact.js',
        '/assets/js/rotate.js',
        '/assets/js/tawk.js',
        '/assets/js/ganalytics.js',
    ];

    requirejs.config({
        "baseUrl": "assets/js",
        "paths": {
            "jquery": _jquery
        }
    });

    requirejs(['jquery'], function($) {
        console.log("jquery loaded");
        requirejs(_libs, function() {
            console.log("libs loaded", _libs);
            requirejs(_scripts, function() {
                console.log("libs loaded", _scripts);
            });
        });
    });

})();

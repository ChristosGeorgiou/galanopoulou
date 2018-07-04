(function() {
    "use strict";

    if (document.getElementById("tawk-to-params")) {

        var e = (new Date, document.createElement("script")),
            t = document.getElementsByTagName("script")[0],
            n = document.getElementById("tawk-to-params").getAttribute("data-key");

        e.async = !0, e.src = "https://embed.tawk.to/" + n + "/default", e.charset = "UTF-8", e.setAttribute("crossorigin", "*"), t.parentNode.insertBefore(e, t)
    }

})();

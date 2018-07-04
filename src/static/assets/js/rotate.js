(function() {

    'use strict';

    $(function() {

        $(".rotate").text($(".rotate").data("phrases"));

        $(".rotate").textrotator({
            animation: "flipUp", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
            separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
            speed: 2200 // How many milliseconds until the next word show.
        });

    });
})();

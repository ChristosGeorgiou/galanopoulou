(function() {

    'use strict';

    $(function() {

        $(".form-contact").on("submit", function(e) {

            e.preventDefault();
            var _this = $(this);

            $(".form-contact-error").hide();
            _this.parent().addClass("loading");

            $.post(_this.attr("action") + "?frm=" + _this.attr("rel"), _this.serialize())
                .done(function() {
                    _this.parent().find(".form-contact-success").show();
                    _this.hide();
                })
                .fail(function() {
                    _this.parent().find(".form-contact-error").show();
                })
                .always(function() {
                    _this.parent().removeClass("loading");
                    _this.find("input").val("");
                    _this.find("textarea").val("");
                });

            return false;

        });

    });
})();
